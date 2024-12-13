export default function Section({ children, title }) {
  return (
    <section className="mb-3">
      <h2 className="text-sm font-semibold text-blue-700 border-b-2 border-blue-300 pb-1 mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
