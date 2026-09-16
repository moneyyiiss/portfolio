const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-30 w-full border-b" style={{ borderColor: "var(--line-soft)", background: "rgba(245,244,239,0.8)", backdropFilter: "blur(10px)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold" style={{ fontFamily: "Bricolage Grotesque" }}>
          MMD<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <nav className="mono hidden gap-8 text-xs tracking-wide uppercase sm:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors" style={{ color: "var(--ink-soft)" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="mono rounded-full px-4 py-1.5 text-xs font-medium"
          style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
