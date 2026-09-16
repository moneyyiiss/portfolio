export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-40 pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: "var(--accent)", opacity: 0.14 }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
          Backend Developer &middot; Pune, India &middot; Open to freelance work
        </p>
        <h1 className="mt-6 text-[clamp(40px,7vw,84px)] leading-[0.98] font-semibold">
          Manish Mani
          <br />
          Dinkar<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p className="mt-8 max-w-[56ch] text-lg" style={{ color: "var(--ink-soft)" }}>
          I design and build backend systems — APIs, databases, and the
          plumbing between them — for startups and small teams who need
          software that keeps working after launch day. Java &amp; Spring Boot
          by trade, Python &amp; Django when the project calls for it.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full px-6 py-3 text-sm font-semibold"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            View selected work
          </a>
          <a
            href="https://github.com/moneyyiiss"
            target="_blank"
            rel="noreferrer"
            className="mono rounded-full border px-6 py-3 text-sm"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            github.com/moneyyiiss
          </a>
        </div>
      </div>
    </section>
  );
}
