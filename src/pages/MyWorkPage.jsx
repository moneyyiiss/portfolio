import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function MyWorkPage() {
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
            Portfolio
          </p>
          <h1 className="mt-4 text-[clamp(32px,5.5vw,56px)] leading-[1.02] font-semibold">
            My Work
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg" style={{ color: "var(--ink-soft)" }}>
            Real projects, pulled straight from my GitHub — click any card
            for the full details. Projects marked{" "}
            <span className="mono" style={{ color: "var(--accent)" }}>
              ● Live
            </span>{" "}
            have a working deployment you can open right now.
          </p>
        </div>
      </section>
      <Projects />
      <Contact />
    </>
  );
}
