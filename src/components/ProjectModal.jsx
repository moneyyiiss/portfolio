import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(20,22,20,0.55)" }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl p-7 sm:p-9"
        style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
      >
        <div className="flex items-start justify-between gap-4">
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
            <h3 id="project-modal-title" className="mt-1 text-2xl font-semibold">
              {project.name}
            </h3>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="mono shrink-0 rounded-full border px-3 py-1.5 text-xs"
            style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
          >
            Esc ✕
          </button>
        </div>

        <div
          className="mono mt-6 flex flex-col gap-2 rounded-xl px-5 py-4 text-[13px]"
          style={{ background: "#171a1c" }}
        >
          {project.snippet.map((line, i) =>
            line.in ? (
              <p key={i}>
                <span style={{ color: "var(--accent)" }}>❯ </span>
                <span style={{ color: "#e8e6e1" }}>{line.in}</span>
              </p>
            ) : (
              <p key={i} style={{ color: "rgba(255,255,255,0.45)" }}>
                {line.out}
              </p>
            )
          )}
        </div>

        <p className="mt-6 text-sm" style={{ color: "var(--ink-soft)" }}>
          {project.description}
        </p>

        <ul className="mt-5 flex flex-col gap-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
              <span style={{ color: "var(--accent)" }}>—</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
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

        <div className="mt-7 flex gap-5 border-t pt-6 text-sm font-medium" style={{ borderColor: "var(--line-soft)" }}>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="underline">
              View code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }} className="underline">
              Visit site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
