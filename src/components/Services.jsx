import { useState } from "react";
import Reveal from "./Reveal";
import ServiceModal from "./ServiceModal";
import { services } from "../data/services";
import { ICONS } from "./icons";

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal as="div" className="max-w-[46ch]">
          <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
            What I offer
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Services</h2>
          <p className="mt-4 text-sm" style={{ color: "var(--ink-soft)" }}>
            Scoped backend engagements — pick what your project actually
            needs, not a bundled package. Click one for what's included.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} style={{ transitionDelay: `${i * 60}ms` }}>
                <button
                  onClick={() => setActive(s)}
                  className="flex h-full w-full flex-col items-start gap-1 rounded-xl p-8 text-left transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--surface)", border: "1px solid var(--line-soft)" }}
                >
                  <Icon style={{ color: "var(--accent)" }} />
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                    {s.description}
                  </p>
                  <span className="mono mt-4 text-xs font-medium" style={{ color: "var(--accent)" }}>
                    What's included →
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  );
}
