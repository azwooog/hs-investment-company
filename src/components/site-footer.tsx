import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/hs-logo.png";

const offices = [
  { c: "UAE", a: "606, EREC building, Al Falah St., Zone 1, Al Danah, Abu Dhabi", p: "+971 2 650 7741" },
  { c: "Canada", a: "3280 Donald Mackay St, Oakville, Ontario, L6M 5K2", p: "+1 (902) 292 9222" },
  { c: "China", a: "Unit B, 13/F, Shing Lee Commercial Bldg, Wing Cut St, Central, Hong Kong", p: "" },
  { c: "Turkey", a: "Yakuplu Mah, Hurriyet Bul, SkyPort Residence, Beylikdüzü, Istanbul", p: "" },
  { c: "Egypt", a: "Villa 313D, South Academy, 5th Settlement, New Cairo", p: "+20 114 6157855" },
  { c: "Yemen", a: "Bldg. 1, Bader Roundabout, Khormaksar, Aden", p: "+967 2 237 793" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface-2/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-md bg-sand p-2"><img src={logo} alt="HS" className="h-full w-full object-contain" /></div>
              <div>
                <div className="text-base font-bold tracking-widest">HS INVESTMENT</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Group</div>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Connecting capital with capability to unlock opportunity across UAE, China, Turkey, Egypt, Yemen and Canada.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:info@hsinvestment.group" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary transition" aria-label="Email"><Mail className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Explore</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Sectors", "Projects", "Investors", "Careers"].map((l) => (
                <li key={l}><Link to={`/${l.toLowerCase()}`} className="text-foreground/80 hover:text-primary transition">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Investors</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/investors" className="hover:text-primary transition">Request Investment Brief</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Book a Meeting</Link></li>
              <li><Link to="/investors" className="hover:text-primary transition">Download Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Submit Interest</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">UAE Headquarters</h4>
            <p className="text-sm text-muted-foreground flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />606, EREC Bldg, Al Falah St., Abu Dhabi, UAE</p>
            <p className="mt-2 text-sm text-muted-foreground flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />+971 2 650 7741</p>
            <p className="mt-2 text-sm text-muted-foreground flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />info@hsinvestment.group</p>
          </div>
        </div>

        <div className="mt-14">
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Global Offices</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div key={o.c} className="rounded-lg border border-border bg-surface/60 p-4 hover:border-primary/60 transition">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{o.c}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{o.a}</p>
                {o.p && <p className="mt-1 text-xs text-primary">{o.p}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} HS Investment Group. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Headquartered in the UAE · Operating across MENA & emerging global markets</p>
        </div>
      </div>
    </footer>
  );
}
