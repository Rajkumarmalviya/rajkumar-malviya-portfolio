# Interview prep — walkthrough of this assignment

This is a study doc, not part of the graded submission (`ANSWERS.md` and
`PROMPTS.md` are). It exists so you can explain *what* was built and *why* in a
technical round without having to re-derive it live. Read it once, then try
answering the "likely questions" at the bottom out loud before your interview.

---

## Part A — reviewing the order-management PR

**What it was:** a Node/Express + React PR that "runs, happy path works" but has
serious hidden problems. The exercise: read it critically, don't fix it, grade
severity.

**What we found, grouped by theme** (full detail with file:line in `ANSWERS.md`):

- **SQL injection** — every query was built with string concatenation/template
  literals (`'... WHERE tenant_id = ' + req.query.tenantId`). Be ready to explain:
  *why* this is exploitable (`?tenantId=1 OR 1=1` returns everything), and the
  fix (parameterized queries / prepared statements — the driver, not your code,
  should assemble the SQL string).
- **Hardcoded secret in source** (`JWT_SECRET = 'prod-secret-2023'`) — secrets
  belong in env vars / a secret manager, never committed, because git history is
  forever and anyone with repo access gets it.
- **Broken double-refund guard** — `db.query(...)` returned an array of rows, but
  the code did `order.status === 'refunded'` directly on that array. Arrays don't
  have `.status`, so it's always `undefined`, so the guard *never* fires. This is
  the single best "walk me through a subtle bug" story from this exercise —
  practice explaining it in one breath: *the code assumed a single-row shape but
  got a row-set, so a truthy-looking check was silently always false.*
- **Non-atomic side effects** — the payment-gateway refund call and the
  "mark refunded" DB write were two separate, non-transactional steps. If the
  process dies between them, you've refunded money but the system doesn't know
  it — a classic **distributed transaction / at-least-once-vs-exactly-once**
  problem. The fix pattern is idempotency keys + a transactional outbox, not
  covered in the review itself but good to mention if asked "how would you fix
  it."
- **React specifics** — `key={Math.random()}` (defeats reconciliation, remounts
  every row on every render), a `useEffect` missing a dependency (`tenantId`)
  it actually reads (stale closure bug), no `.catch()` on a fetch chain.

**Concepts to be fluent in:** SQL injection & parameterized queries, JWT/secret
management, race conditions, idempotency, React reconciliation & the rules of
`useEffect` dependencies, N+1 query patterns.

---

## Part B — the bulk CSV import feature

**The ask:** an endpoint that accepts a CSV, validates rows (bad rows must not
block good ones), persists valid rows, and a small React screen to show the
outcome.

### Architecture decisions and the *why* behind each

| Decision | Why |
|---|---|
| **Node/Express**, not Python | The frontend's Vite dev proxy was already pointed at `:4000` (Express's default port) — zero frontend config change. A real reason, not a coin flip. |
| **`csv-parse` library**, not hand-rolled `split(',')` | CSV isn't just comma-separated — quoted fields can contain commas (`"1,199.00"`). A real RFC4180-aware parser handles that; a naive split silently corrupts data. |
| **SQLite via `node:sqlite`** (Node's built-in module), not `better-sqlite3` | Same capability, but no native module to compile — one less thing to break in someone else's environment. **Caveat found during audit:** `node:sqlite` needs Node ≥22.5; an older Node would crash with a cryptic error. Fixed by declaring `"engines"` in `package.json` and making `db.js` throw an explicit, actionable message instead of a confusing one. Good interview story: *"I made a dependency choice, then caught its portability risk myself before shipping and mitigated it rather than just hoping."* |
| **Upsert by `sku`** (not reject-on-duplicate) | The brief says "update the catalogue," and the sample data reuses the same SKUs across files with different values — the intent is clearly "re-importing a known SKU updates it." `INSERT ... ON CONFLICT(sku) DO UPDATE` gets this for free from SQLite's constraint system instead of hand-rolled dedup logic. |
| **Strict price validation** (plain decimal regex, no currency symbols/commas) over lenient parsing | The alternative (strip symbols, then `parseFloat`) has a nasty trap: `parseFloat("12.9.9")` doesn't throw — it silently returns `12.9`. A regex (`^\d+(\.\d{1,2})?$`) fails closed instead of silently accepting garbage. This is the single best "why strict validation over lenient" story — **fail loud, not silently wrong**, especially for money. |
| **Always return HTTP 200** for a structurally valid CSV, even if every row fails | The brief says "invalid rows must not block valid ones" — that's a statement about the *response contract*, not just the code path. A 4xx for "some rows failed" would contradict the spirit of partial success. Reserve 4xx for "I couldn't even understand the request" (missing file, wrong headers). |
| **Header validation before row validation** | Bug we found ourselves while testing: uploading a non-CSV file silently returned `0 imported / 0 rejected` instead of an error, because the header row didn't match, so there were just zero "rows" to iterate. Added an explicit check for missing expected columns, returned as a single clear `400` instead of a confusing empty success. Good story for "tell me about a bug you caught in your own code." |

### Validation rules (and the *reasoning*, since interviewers probe "why," not just "what")

- `sku`, `name` required (sku is the upsert key; a nameless product is unusable).
- `price`: non-negative decimal, ≤2 decimal places, no symbols. `0` is valid (a
  free/promo item is plausible; nothing in the brief says otherwise), no upper
  bound (same logic — don't invent a rule you weren't asked for).
- `stock`: non-negative **integer** — `3.5` items in a warehouse isn't meaningful.
- `category`: optional — nothing marks it required, so don't punish an otherwise
  valid row over it.
- Whitespace trimmed before validating/storing (a real export had
  `"  SKU-2009  "` — don't fail or dedupe-incorrectly over incidental formatting).
- Unicode accepted as-is (Café, 日本語 names) — UTF-8 is just... text.

### Testing approach (worth describing — shows rigor, not just "it compiled")

1. Unit-level sanity: ran `csv-parse` against the actual messy fixture *before*
   writing validation code, to see its real output shape (quoted fields, ragged
   rows) instead of guessing.
2. `curl`-tested the real endpoint against both fixtures, and against edge cases
   *not* in the fixtures: no file, empty (header-only) CSV, a non-CSV upload, a
   CSV with an unterminated quote (malformed structurally, not just bad rows).
3. Verified persistence behavior (upsert overwriting, last-write-wins on an
   in-file duplicate SKU) by reading back `GET /api/products`, not just trusting
   the import response.
4. Browser-level: no `chromium-cli` available in this environment, so used
   `playwright-core` directly against the system's Chrome binary, drove the real
   file-input → upload → result-table flow, and took screenshots — because
   "the code looks right" and "I watched it work in a browser" are different
   claims, and only one of them is verification. (Type-checking / tests verify
   correctness of code, not correctness of the *feature*.)

**Concepts to be fluent in:** RFC4180 CSV quoting rules, upsert/`ON CONFLICT`,
partial-success API design, fail-closed vs fail-open validation, why floating
point (`parseFloat`) is dangerous for structured validation, dependency
portability risk (native modules vs. built-ins vs. Node version pinning).

---

## Part C — redesigning for 100× load

**The scenario:** 500 tenants, files up to 500 MB / 500k rows, need progress
reporting, per-row failure detail, and fairness (no tenant starves others).

**Why the Part B design falls over:** it does everything — buffer the file in
memory, parse, validate, write — *inside a single synchronous HTTP request*, on
a single-threaded Node event loop, in front of single-writer SQLite. At scale
that means: one upload can hold ~500 MB of heap; while it's parsing, the event
loop is blocked, so *no other tenant's request gets serviced* — that's the
starvation risk named in the brief, and it's not hypothetical, it's inherent to
synchronous CPU-bound work on one thread.

**The redesign, in one sentence:** turn the upload into "accept and hand off"
(stream to object storage, return `202` immediately) instead of "accept and do
the work," then process it asynchronously through a job queue with per-tenant
fairness, streaming the parse instead of buffering it, batching database writes,
and reporting progress/errors through pollable state instead of one giant
response body.

**Decisions worth explaining out loud (the "least sure about" ones):**

1. **Fairness = per-tenant worker cap**, not a smarter scheduler. Simpler, but
   wastes idle capacity when few tenants are active. The honest trade: I chose
   simplicity and starvation-proofing over max throughput.
2. **Progress reported every ~1,000 rows**, not every row. Trades smoothness for
   not turning "report progress" into its own write-amplification problem.
3. **Failed rows in a paginated DB table**, not a flat file. Trades more writes
   on a badly-formed file for filterable/paginable errors in a UI.

**What carries over from Part B vs. what doesn't:** the *validation rules* and
the *error shape* (`{row, sku, reason}`) don't change — only *where* and *how
often* they run. What gets thrown out: buffering in memory, doing work inside
the request cycle, one-shot error responses, and SQLite (single-writer doesn't
survive concurrent tenants).

**First thing that breaks at 10× more (5,000 tenants):** not compute, not
storage — the single Postgres primary's *write path*. Many simultaneous large
imports doing batched upserts exhaust the connection pool and turn `sku`
contention into lock waits. The queue and streaming design solved "one tenant
blocks everyone," but a shared write bottleneck at the database is the next
wall — you'd shard products by tenant or move to bulk-load (`COPY`) instead of
row-by-row upserts.

**Concepts to be fluent in:** backpressure, streaming vs. buffering, job
queues, fair scheduling / the noisy-neighbor problem, why "no code" system
design still needs concrete component names, connection-pool exhaustion, `COPY`
vs. row-by-row writes, horizontal scaling of stateless workers vs. a stateful
DB bottleneck.

---

## Part D — reviewing AI-generated code (`fx.py`)

**The scenario:** a junior asked ChatGPT for a currency-conversion helper. It
has tests, they pass. Would you merge it?

**Verdict: not as-is.** Passing tests only tell you the tested paths work — here
the tests are 100% happy-path, and all three real problems live outside that
path.

**Blockers (must fix before merge):**

- **Cache never expires** — a plain module-level `dict`, no TTL. FX rates move
  constantly; this pins a rate for the life of the process. Silent, ongoing
  financial-correctness bug, not a performance nicety.
- **No error isolation** — no error handling anywhere, so one bad order or one
  flaky upstream call kills the *entire batch*, with zero partial results. Note
  the parallel to Part B: "invalid rows must not block valid ones" is the same
  principle, and this code violates it for "invalid orders."
- **Upstream response trusted blindly** — `response.json()["rate"]`, no status
  check, no sanity check that `rate` is a sane positive number. A bad response
  silently corrupts a financial total with nothing to catch it.

**Raise-it (fix later, don't block merge):** sequential `await` instead of
concurrent fetches, a cache-stampede risk once someone parallelizes it, `float`
instead of `Decimal` for money math, an undeclared dependency (`total_usd`
silently requires `convert_all` to have run first), no explicit timeout/retry
config, and happy-path-only test coverage.

**Concepts to be fluent in:** cache invalidation / TTL, "never trust external
input, especially when it feeds a financial calculation," partial-failure
isolation in batch processing, `float` vs `Decimal` for currency, the general
skill of *auditing* AI output instead of trusting "it has tests and they pass."

---

## Quick-reference glossary

- **SQL injection** — untrusted input becomes part of a SQL query's *structure*,
  not just its data, because of string concatenation. Fix: parameterized
  queries.
- **Upsert** — insert-or-update in one atomic operation, keyed by a unique
  constraint (`ON CONFLICT ... DO UPDATE`).
- **Idempotency** — doing an operation twice has the same effect as doing it
  once. Critical for anything involving money or retries.
- **N+1 query problem** — one query to get a list, then one more query *per
  item* in that list, instead of one batched/joined query.
- **Race condition** — outcome depends on timing of concurrent operations;
  here: two refund requests both passing a check before either write lands.
  Fixed with locking or transactions, not by "being careful."
- **Backpressure / streaming vs buffering** — processing data as it arrives
  (bounded memory) vs. loading it all into memory first (memory scales with
  input size — the thing that breaks at 500 MB files).
- **Fail closed vs. fail open** — when validation is ambiguous, rejecting
  (closed) is safer than silently accepting (open) — see the price-regex vs.
  `parseFloat` story above.
- **Cache staleness/TTL** — cached data without an expiry is a correctness bug
  waiting to happen, not just a performance detail, whenever the underlying
  value changes over time (FX rates, prices, permissions).

---

## Likely interview questions (practice these out loud)

1. *"Walk me through the worst bug you found in Part A."* → the array-vs-row
   `.status` bug that silently disables the double-refund guard. Explain the
   *mechanism* (array has no `.status`, so it's always `undefined`), not just
   "there was a bug."
2. *"Why SQLite, and what's the risk?"* → simplicity + the brief explicitly
   deprioritizes migrations, but flag the Node-version dependency you caught
   and fixed yourself.
3. *"Why reject `"₹3499"` as a price instead of just stripping the symbol?"* →
   predictability and the `parseFloat("12.9.9")` silent-truncation trap; you
   made this an explicit, recorded assumption, not a silent guess.
4. *"How would you know your Part B feature actually works, not just that it
   compiles?"* → describe the curl edge-case tests plus the real headless-browser
   pass, and the header-validation bug you caught by testing your own code
   adversarially.
5. *"At 100× load, why does Postgres break before your queue/workers do?"* →
   connection pool exhaustion + row-lock contention on `sku` upserts under many
   concurrent large imports — a shared stateful bottleneck behind horizontally
   scalable stateless workers.
6. *"The AI-written code had passing tests — why not just merge it?"* → tests
   only prove the tested paths; all three blockers (stale cache, no error
   isolation, unvalidated upstream data) live entirely outside the tested happy
   path.
