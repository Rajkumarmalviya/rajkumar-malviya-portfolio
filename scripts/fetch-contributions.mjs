import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const USERS = ['rajkumarmalviya', 'prima-rajkumar'];

const results = await Promise.all(
  USERS.map((u) =>
    fetch(`https://github-contributions-api.jogruber.de/v4/${u}?y=last`).then((r) => r.json())
  )
);

// Merge: sum counts and take max level per date
const merged = new Map();
for (const { contributions } of results) {
  for (const day of contributions) {
    const existing = merged.get(day.date);
    if (existing) {
      existing.count += day.count;
      existing.level = Math.min(4, Math.max(existing.level, day.level));
    } else {
      merged.set(day.date, { ...day });
    }
  }
}

const contributions = [...merged.values()].sort((a, b) => a.date.localeCompare(b.date));
const totalLastYear = results.reduce((sum, r) => sum + r.total.lastYear, 0);

writeFileSync(
  resolve(__dirname, '../src/data/contributions.json'),
  JSON.stringify({ total: { lastYear: totalLastYear }, contributions }, null, 2)
);
console.log(`✓ Merged ${contributions.length} days (total: ${totalLastYear})`);
