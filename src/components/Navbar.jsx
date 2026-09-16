const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--border-soft)] bg-[color:var(--bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-semibold" style={{ fontFamily: "Sora" }}>
          Manish<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <nav className="hidden gap-7 text-sm sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[color:var(--ink-soft)] transition-colors hover:text-[color:var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/moneyyiiss"
          target="_blank"
          rel="noreferrer"
          className="mono rounded-full border border-[color:var(--border)] px-4 py-1.5 text-xs text-[color:var(--ink-soft)] transition-colors hover:text-[color:var(--ink)]"
        >
          @moneyyiiss
        </a>
      </div>
    </header>
  );
}
