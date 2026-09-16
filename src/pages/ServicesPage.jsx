import Services from "../components/Services";
import Contact from "../components/Contact";

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-40 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full blur-[120px]"
          style={{ background: "var(--accent)", opacity: 0.14 }}
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
            What I offer
          </p>
          <h1 className="mt-4 text-[clamp(32px,5.5vw,56px)] leading-[1.02] font-semibold">
            Backend work, scoped to what
            <br />
            your project actually needs.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg" style={{ color: "var(--ink-soft)" }}>
            No bundled packages — pick a service below to see exactly what's
            included and a real project it's grounded in.
          </p>
        </div>
      </section>
      <Services />
      <Contact />
    </>
  );
}
