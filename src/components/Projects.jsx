import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="border-t border-[color:var(--border-soft)] py-14">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold">Selected work</h2>
          <a
            href="https://github.com/moneyyiiss?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="mono text-xs"
            style={{ color: "var(--accent)" }}
          >
            all repos →
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="flex flex-col gap-3 rounded-xl border p-5"
              style={{ borderColor: "var(--border-soft)", background: "var(--surface)" }}
            >
              <div>
                <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
                  {p.tagline}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono rounded px-2 py-0.5 text-[11px]"
                    style={{ background: "var(--surface-2)", color: "var(--ink-soft)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
                <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: "var(--ink)" }}>
                  Code
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
                    Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
