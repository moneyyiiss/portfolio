import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { ICONS } from "./icons";

export default function ServiceModal({ service, onClose }) {
  const closeRef = useRef(null);
  const Icon = ICONS[service.icon];
  const exampleProject = projects.find((p) => p.name === service.example);

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
        aria-labelledby="service-modal-title"
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl p-7 sm:p-9"
        style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <Icon style={{ color: "var(--accent)", flexShrink: 0, marginTop: 4 }} />
            <h3 id="service-modal-title" className="text-2xl font-semibold">
              {service.title}
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

        <p className="mt-6 text-sm" style={{ color: "var(--ink-soft)" }}>
          {service.description}
        </p>

        <p className="mono mt-6 text-xs tracking-[0.1em] uppercase" style={{ color: "var(--ink-faint)" }}>
          What's included
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {service.includes.map((f) => (
            <li key={f} className="flex gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
              <span style={{ color: "var(--accent)" }}>—</span>
              {f}
            </li>
          ))}
        </ul>

        {exampleProject && (
          <a
            href="#work"
            onClick={onClose}
            className="mt-7 flex w-full items-center justify-between rounded-xl px-5 py-4 text-left"
            style={{ background: "var(--bg-alt)", border: "1px solid var(--line-soft)" }}
          >
            <span>
              <span className="mono block text-[11px]" style={{ color: "var(--ink-faint)" }}>
                Example
              </span>
              <span className="mt-0.5 block text-sm font-semibold">{exampleProject.name}</span>
            </span>
            <span className="mono text-xs" style={{ color: "var(--accent)" }}>
              See in Work →
            </span>
          </a>
        )}

        <div className="mt-7 border-t pt-6 text-sm" style={{ borderColor: "var(--line-soft)" }}>
          <a href="#contact" onClick={onClose} className="font-medium underline">
            Ask about this →
          </a>
        </div>
      </div>
    </div>
  );
}
