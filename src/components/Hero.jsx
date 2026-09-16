export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pt-16 pb-14">
      <p className="mono text-xs tracking-[0.12em] uppercase" style={{ color: "var(--accent)" }}>
        Backend Developer · Pune, India (GMT+5:30)
      </p>
      <h1 className="mt-4 text-[clamp(32px,5vw,50px)] leading-[1.08] font-semibold">
        Manish Mani Dinkar builds backend systems that hold up{" "}
        <span style={{ color: "var(--ink-soft)" }}>after the demo ends.</span>
      </h1>
      <p className="mt-5 max-w-[62ch] text-[16.5px]" style={{ color: "var(--ink-soft)" }}>
        I'm a freelance backend developer working mainly in Java / Spring Boot,
        with Python and Django for API-heavy projects. Currently building at{" "}
        <span style={{ color: "var(--ink)" }}>Techview365</span>, and taking on
        select freelance backend work on the side.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-lg px-5 py-2.5 text-sm font-semibold"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-lg border px-5 py-2.5 text-sm font-semibold"
          style={{ borderColor: "var(--border)" }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
