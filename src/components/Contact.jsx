const LINKS = [
  { label: "GitHub", href: "https://github.com/moneyyiiss" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moneyyiiss/" },
  { label: "Email", href: "mailto:manish.dinkar13@gmail.com" },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-[color:var(--border-soft)] py-14">
      <div
        className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 rounded-xl px-5 py-8 sm:px-8"
        style={{ background: "var(--accent-tint)" }}
      >
        <div>
          <h2 className="text-2xl font-semibold">Have a backend that needs building?</h2>
          <p className="mt-2 max-w-[50ch] text-sm" style={{ color: "var(--ink-soft)" }}>
            Open to freelance backend work — APIs, integrations, and systems
            that need to hold up in production. Reply within a day.
          </p>
        </div>
        <div className="mono flex flex-wrap gap-5 text-sm">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="underline">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-5xl px-5 text-xs" style={{ color: "var(--ink-faint)" }}>
        © {new Date().getFullYear()} Manish Mani Dinkar
      </p>
    </footer>
  );
}
