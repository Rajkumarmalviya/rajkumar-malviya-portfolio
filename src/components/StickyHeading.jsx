export default function StickyHeading({ id, children }) {
  return (
    <div
      id={id}
      className="sticky top-0 z-20 -mx-6 mb-4 bg-bg/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-text-light">
        {children}
      </h2>
    </div>
  );
}
