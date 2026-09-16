export default function Experience() {
  return (
    <section id="experience" className="border-t border-[color:var(--border-soft)] py-14">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">Backend Developer</h3>
              <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                Techview365
              </p>
            </div>
            <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
              Pune, India
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">Freelance Backend Developer</h3>
              <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                Independent — API platforms, CRUD systems, and backend integrations
                for small teams
              </p>
            </div>
            <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
              Remote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
