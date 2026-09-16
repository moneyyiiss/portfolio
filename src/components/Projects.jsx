import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28" style={{ background: "var(--bg-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal as="div" className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              6 case studies, out of 70+ repos
            </h2>
          </div>
          <a
            href="https://github.com/moneyyiiss?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="mono text-xs underline"
            style={{ color: "var(--ink-soft)" }}
          >
            Browse everything on GitHub →
          </a>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              className="grid grid-cols-1 items-center gap-8 border-t pt-12 sm:grid-cols-[0.9fr_1.1fr] sm:gap-14"
              style={{ borderColor: "var(--line-soft)" }}
            >
              <div
                className={`flex h-44 items-center justify-center rounded-2xl sm:h-56 ${i % 2 ? "sm:order-2" : ""}`}
                style={{
                  background: `linear-gradient(155deg, var(--accent-dim), transparent 70%), var(--surface)`,
                  border: "1px solid var(--line-soft)",
                }}
              >
                <span
                  className="mono text-5xl font-medium sm:text-6xl"
                  style={{ color: "var(--accent)", opacity: 0.85 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
                  {p.tagline}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm" style={{ color: "var(--ink-soft)" }}>
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="mono rounded-full px-3 py-1 text-[11px]"
                      style={{ border: "1px solid var(--line)", color: "var(--ink-soft)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-5 text-sm font-medium">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="underline">
                    View code
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }} className="underline">
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
