import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal as="div">
          <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
            Toolbox
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Skills</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal as="div" key={group.label} style={{ transitionDelay: `${i * 60}ms` }}>
              <p className="mono text-xs tracking-[0.1em] uppercase" style={{ color: "var(--ink-faint)" }}>
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md px-3 py-1.5 text-sm"
                    style={{ background: "var(--surface)", border: "1px solid var(--line-soft)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
