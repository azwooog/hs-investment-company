import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/hs-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sectors", label: "Sectors" },
  { to: "/projects", label: "Projects" },
  { to: "/news", label: "Insights" },
  { to: "/investors", label: "Investors" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass" : "bg-transparent"}`}>
      <div className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative h-10 w-10 rounded-md bg-sand/95 p-1.5 transition-transform group-hover:scale-105">
            <img src={logo} alt="HS Investment" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-widest">HS INVESTMENT</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Group</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:ember-glow hover:scale-[1.02]"
          >
            Invest With Us <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button onClick={() => setOpen((o) => !o)} className="lg:hidden rounded-md border border-border p-2" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="container-px mx-auto flex max-w-7xl flex-col py-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 text-sm hover:text-primary [&.active]:text-primary border-b border-border/40 last:border-0">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
