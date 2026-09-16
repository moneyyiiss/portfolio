import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { href: "/work", label: "My Work" },
  { href: "/services", label: "Services" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

function NavLinks({ className, linkClassName, onNavigate, style }) {
  return (
    <nav className={className} style={style}>
      {LINKS.map((l) =>
        l.href.startsWith("/#") ? (
          <Link key={l.href} to={l.href} onClick={onNavigate} className={linkClassName} style={{ color: "var(--ink-soft)" }}>
            {l.label}
          </Link>
        ) : (
          <NavLink
            key={l.href}
            to={l.href}
            onClick={onNavigate}
            className={linkClassName}
            style={({ isActive }) => ({ color: isActive ? "var(--accent)" : "var(--ink-soft)" })}
          >
            {l.label}
          </NavLink>
        )
      )}
    </nav>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 z-30 w-full border-b" style={{ borderColor: "var(--line-soft)", background: "rgba(245,244,239,0.9)", backdropFilter: "blur(10px)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold" style={{ fontFamily: "Bricolage Grotesque" }}>
          MMD<span style={{ color: "var(--accent)" }}>.</span>
        </Link>
        <NavLinks className="mono hidden gap-8 text-xs tracking-wide uppercase sm:flex" />
        <div className="flex items-center gap-3">
          <Link
            to="/#contact"
            className="mono rounded-full px-4 py-1.5 text-xs font-medium"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            Hire me
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded-full border sm:hidden"
            style={{ borderColor: "var(--line)" }}
          >
            <span
              className="block h-[1.5px] w-4 transition-transform"
              style={{ background: "var(--ink)", transform: open ? "translateY(3px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-[1.5px] w-4 transition-transform"
              style={{ background: "var(--ink)", transform: open ? "translateY(-3px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </div>
      {open && (
        <NavLinks
          className="mono flex flex-col gap-1 border-t px-6 py-4 text-sm uppercase sm:hidden"
          linkClassName="py-2.5"
          onNavigate={() => setOpen(false)}
          style={{ borderColor: "var(--line-soft)" }}
        />
      )}
    </header>
  );
}
