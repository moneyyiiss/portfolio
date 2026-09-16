import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[color:var(--border-soft)] py-14">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mono text-xs tracking-[0.08em] uppercase" style={{ color: "var(--ink-faint)" }}>
                {group.label}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm" style={{ color: "var(--ink-soft)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
