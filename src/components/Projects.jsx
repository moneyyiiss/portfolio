import { useState } from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

function TerminalPreview({ snippet }) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl px-5 py-4 text-[13px]"
      style={{ background: "#171a1c" }}
    >
      {snippet.map((line, i) =>
        line.in ? (
          <p key={i} className="mono">
            <span style={{ color: "var(--accent)" }}>❯ </span>
            <span style={{ color: "#e8e6e1" }}>{line.in}</span>
          </p>
        ) : (
          <p key={i} className="mono" style={{ color: "rgba(255,255,255,0.45)" }}>
            {line.out}
          </p>
        )
      )}
    </div>
  );
}

function FeaturedProject({ project, onOpen }) {
  return (
    <Reveal
      as="article"
      className="grid grid-cols-1 gap-8 rounded-2xl p-8 sm:grid-cols-[1.1fr_0.9fr] sm:gap-12 sm:p-12"
      style={{ background: "var(--surface)", border: "1px solid var(--line-soft)" }}
    >
      <div>
        <div className="flex items-center gap-2">
          <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
            {project.tagline}
          </p>
          {project.demo && (
            <span className="mono flex items-center gap-1.5 text-[10.5px]" style={{ color: "var(--accent)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              Live
            </span>
          )}
        </div>
        <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{project.name}</h3>
        <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--ink-soft)" }}>
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="mono rounded-full px-3 py-1 text-[11px]"
              style={{ border: "1px solid var(--line)", color: "var(--ink-soft)" }}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-5 text-sm font-medium">
          <button onClick={onOpen} className="underline" style={{ color: "var(--accent)" }}>
            View full details →
          </button>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="underline">
              Visit site
            </a>
          )}
        </div>
      </div>
      <TerminalPreview snippet={project.snippet} />
    </Reveal>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const featured = projects.length === 1;

  return (
    <section id="work" className="px-6 py-28" style={{ background: "var(--bg-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal as="div" className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {projects.length === 1 ? "1 client project" : `${projects.length} projects`}, out of 70+ repos
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

        {featured ? (
          <div className="mt-12">
            <FeaturedProject project={projects[0]} onOpen={() => setActive(projects[0])} />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                <button
                  onClick={() => setActive(p)}
                  className="flex h-full w-full flex-col items-start gap-3 rounded-xl p-6 text-left transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--surface)", border: "1px solid var(--line-soft)" }}
                >
                  <div className="flex w-full items-center justify-between gap-2">
                    <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
                      {p.tagline}
                    </p>
                    {p.demo && (
                      <span className="mono flex items-center gap-1.5 text-[10.5px]" style={{ color: "var(--accent)" }}>
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="line-clamp-3 text-sm" style={{ color: "var(--ink-soft)" }}>
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="mono rounded-full px-2.5 py-1 text-[10.5px]"
                        style={{ border: "1px solid var(--line)", color: "var(--ink-soft)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="mono mt-2 text-xs font-medium" style={{ color: "var(--accent)" }}>
                    View details →
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
