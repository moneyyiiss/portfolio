import { useState } from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

function hostFromUrl(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function StatusBadge({ status }) {
  if (status === "live") {
    return (
      <span className="mono flex items-center gap-1.5 text-[10.5px]" style={{ color: "var(--accent)" }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
        Live
      </span>
    );
  }
  if (status === "staging") {
    return (
      <span className="mono flex items-center gap-1.5 text-[10.5px]" style={{ color: "var(--ink-faint)" }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ink-faint)" }} />
        Staging
      </span>
    );
  }
  return null;
}

function BrowserPreview({ project, height = 420 }) {
  return (
    <div style={{ background: "#171a1c" }}>
      <div className="flex items-center gap-1.5 border-b px-4 py-2.5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
        <span className="mono ml-3 truncate text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
          {project.demo ? hostFromUrl(project.demo) : project.name}
        </span>
      </div>
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        style={{ height, minHeight: height }}
        className="w-full object-cover object-top"
      />
    </div>
  );
}

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
      className="overflow-hidden rounded-2xl"
      style={{ background: "var(--surface)", border: "1px solid var(--line-soft)" }}
    >
      {project.image && <BrowserPreview project={project} />}
      <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-[1.1fr_0.9fr] sm:gap-12 sm:p-12">
        <div>
          <div className="flex items-center gap-2">
            <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
              {project.tagline}
            </p>
            <StatusBadge status={project.status} />
          </div>
          <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{project.name}</h3>
          <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--ink-soft)" }}>
            {project.description}
          </p>
          {project.languages && (
            <p className="mono mt-3 text-xs" style={{ color: "var(--ink-faint)" }}>
              Site language: {project.languages.join(", ")}
            </p>
          )}
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
                {project.status === "staging" ? "Preview" : "Visit site"}
              </a>
            )}
          </div>
        </div>
        {!project.image && <TerminalPreview snippet={project.snippet} />}
      </div>
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
              {projects.length} client project{projects.length === 1 ? "" : "s"}, out of 70+ repos
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
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                <button
                  onClick={() => setActive(p)}
                  className="flex h-full w-full flex-col items-start overflow-hidden rounded-xl text-left transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--surface)", border: "1px solid var(--line-soft)" }}
                >
                  {p.image && <BrowserPreview project={p} height={180} />}
                  <div className="flex w-full flex-1 flex-col items-start gap-3 p-6">
                    <div className="flex w-full items-center justify-between gap-2">
                      <p className="mono text-xs" style={{ color: "var(--ink-faint)" }}>
                        {p.tagline}
                      </p>
                      <StatusBadge status={p.status} />
                    </div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="line-clamp-3 text-sm" style={{ color: "var(--ink-soft)" }}>
                      {p.description}
                    </p>
                    {p.languages && (
                      <p className="mono text-[10.5px]" style={{ color: "var(--ink-faint)" }}>
                        Site language: {p.languages.join(", ")}
                      </p>
                    )}
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
                  </div>
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
