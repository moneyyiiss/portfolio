import Reveal from "./Reveal";

const ROLES = [
  {
    role: "Backend Developer",
    org: "Techview365",
    where: "Pune, India",
    note: "Building and maintaining backend services on the core team stack.",
  },
  {
    role: "Freelance Backend Developer",
    org: "Independent",
    where: "Remote",
    note: "API platforms, CRUD systems, and backend integrations for small teams — see Selected Work above.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28" style={{ background: "var(--bg-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal as="div">
          <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Where I've worked</h2>
        </Reveal>
        <div className="mt-12 flex flex-col">
          {ROLES.map((r, i) => (
            <Reveal
              as="div"
              key={r.role}
              className="grid grid-cols-1 gap-2 border-t py-8 sm:grid-cols-[1fr_2fr] sm:gap-8"
              style={{ borderColor: "var(--line-soft)", transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <h3 className="text-lg font-semibold">{r.role}</h3>
                <p className="mono text-xs mt-1" style={{ color: "var(--ink-faint)" }}>
                  {r.org} — {r.where}
                </p>
              </div>
              <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                {r.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
