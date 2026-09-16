import Reveal from "./Reveal";
import { services } from "../data/services";
import { ICONS } from "./icons";

export default function Services() {
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
            needs, not a bundled package.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2" style={{ background: "var(--line-soft)" }}>
          {services.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal
                as="div"
                key={s.title}
                className="p-8"
                style={{ background: "var(--bg)", transitionDelay: `${i * 60}ms` }}
              >
                <Icon style={{ color: "var(--accent)" }} />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                  {s.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
