import Reveal from "./Reveal";

const LINKS = [
  { label: "GitHub", href: "https://github.com/moneyyiiss" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moneyyiiss/" },
  { label: "Email", href: "mailto:manish.dinkar13@gmail.com" },
];

export default function Contact() {
  return (
    <footer id="contact" className="px-6 py-28">
      <Reveal as="div" className="mx-auto max-w-6xl">
        <p className="mono text-xs tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
          Get in touch
        </p>
        <h2 className="mt-4 max-w-[16ch] text-[clamp(32px,6vw,64px)] leading-[1.02] font-semibold">
          Let's build the backend your product needs.
        </h2>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="mono text-sm underline underline-offset-4"
              style={{ color: "var(--ink-soft)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs" style={{ borderColor: "var(--line-soft)", color: "var(--ink-faint)" }}>
          <span>Pune, India — GMT+5:30</span>
          <span>© {new Date().getFullYear()} Manish Mani Dinkar</span>
        </div>
      </Reveal>
    </footer>
  );
}
