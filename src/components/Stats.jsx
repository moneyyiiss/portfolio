import Reveal from "./Reveal";
import { stats } from "../data/stats";

export default function Stats() {
  return (
    <section className="border-y px-6 py-10" style={{ borderColor: "var(--line-soft)", background: "var(--bg-alt)" }}>
      <Reveal as="div" className="mx-auto grid max-w-6xl grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="tabular text-3xl font-semibold" style={{ fontFamily: "Bricolage Grotesque", color: "var(--accent)" }}>
              {s.value}
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--ink-faint)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
