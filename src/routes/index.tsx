import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Globe2, Shield, Target, TrendingUp, Layers, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-skyline.jpg";
import worldMap from "@/assets/world-map.jpg";
import { sectors, projects, kpis, countries, newsPosts } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HS Investment Group — Connecting Capital, Capability & Opportunity" },
      { name: "description", content: "Multi-sector holding group operating across UAE, China, Turkey, Egypt and Yemen — investing in trade, food, infrastructure, telecom and energy." },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative isolate overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </motion.div>

        <div className="container-px mx-auto max-w-7xl pt-28 pb-32 md:pt-40 md:pb-44">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3 w-3" /> HS Investment Group · Profile 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-5xl text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl"
          >
            Connecting <span className="text-gradient-ember">capital</span>, capability &amp; opportunity across MENA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            A disciplined, execution-led holding group operating across UAE, China, Turkey, Egypt and Yemen — investing in the sectors that form the backbone of economic development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link to="/investors" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition">
              Invest With Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/sectors" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition">
              Explore Sectors
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-muted-foreground hover:text-primary transition">
              About the Group <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
          >
            {kpis.map((k) => (
              <div key={k.label} className="bg-surface/80 p-6 backdrop-blur">
                <div className="text-3xl font-bold text-primary md:text-4xl">{k.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{k.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COUNTRY MARQUEE */}
      <section className="border-y border-border bg-surface-2/40 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5">
          {[...countries, ...countries, ...countries].map((c, i) => (
            <div key={i} className="mx-8 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-semibold text-foreground">{c.code}</span>
              <span className="text-foreground/30">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Group Overview</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A holding group that operates, not just observes.</h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-5 text-muted-foreground">
            <p className="text-lg">
              HS Investment Group was established to lead investments across sectors that form the backbone of economic development — trade, food security, infrastructure, connectivity and energy.
            </p>
            <p>
              Unlike traditional holding companies, we don't function as a passive portfolio owner. We invest with <span className="text-primary font-medium">control, accountability and long-term commitment</span>, working closely with our subsidiaries to drive growth, efficiency and sustainability.
            </p>
            <p>
              Through a diversified portfolio of operating companies, the Group connects sourcing markets such as China and Turkey, processing and logistics hubs in Egypt, and origin-based and high-growth markets such as Yemen — all governed and financed through the UAE.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group">
              Read our story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="border-y border-border bg-surface-2/30">
        <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-primary">Investment Sectors</span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl max-w-2xl">Eight sectors. One disciplined platform.</h2>
            </Reveal>
            <Link to="/sectors" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group">
              All sectors <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  to="/sectors/$sector"
                  params={{ sector: s.slug }}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-primary/60 hover:-translate-y-1 duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-primary opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Why HS Investment Group</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl max-w-3xl">Active ownership. Frontier expertise. End-to-end control.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Target, t: "Active ownership model", d: "Hands-on investment combining capital, governance and operational execution to drive performance." },
            { i: Globe2, t: "Integrated regional platform", d: "Strategic footprint across UAE, China, Turkey, Egypt and Yemen — seamless sourcing to delivery." },
            { i: Layers, t: "End-to-end value chain", d: "Control across procurement, logistics, operations and delivery for resilience and efficiency." },
            { i: TrendingUp, t: "Scalable multi-sector model", d: "A platform-based structure designed for replication and growth in essential sectors." },
            { i: Shield, t: "Governance excellence", d: "A robust framework aligned with international standards — transparent, disciplined, investor-grade." },
            { i: Sparkles, t: "Frontier market expertise", d: "Proven capability to structure, operate and scale businesses in complex environments." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.05}>
              <div className="group relative h-full rounded-2xl border border-border bg-surface p-7 transition hover:border-primary/60 hover:-translate-y-1 duration-300">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all group-hover:via-primary" />
                <x.i className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-lg font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GEOGRAPHIC */}
      <section className="relative overflow-hidden border-y border-border bg-surface-2/40">
        <div className="absolute inset-0 opacity-30">
          <img src={worldMap} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="container-px mx-auto relative max-w-7xl py-24 md:py-32">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Geographic Footprint</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl max-w-2xl">A strategic multi-country platform.</h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Deliberately structured to balance governance, sourcing power, operational efficiency and market access.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.05}>
                <div className="glass rounded-xl p-5 transition hover:border-primary">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold tracking-wide">{c.code}</h3>
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Featured Projects</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Where capital meets capability.</h2>
          </Reveal>
          <Link to="/projects" className="text-sm font-semibold text-primary inline-flex items-center gap-2 group">
            All projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to="/projects/$project" params={{ project: p.slug }}
                className="group block overflow-hidden rounded-2xl border border-border bg-surface hover:-translate-y-1 hover:border-primary/60 transition duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest">
                    {p.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">{p.sector}</div>
                  <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{p.location}</span>
                    <span className="text-primary font-semibold">{p.size}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="border-y border-border bg-surface-2/30">
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-primary">Insights & News</span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">From the Group.</h2>
            </Reveal>
            <Link to="/news" className="text-sm font-semibold text-primary inline-flex items-center gap-2 group">
              All insights <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {newsPosts.slice(0, 4).map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.05}>
                <Link to="/news" className="group block rounded-2xl border border-border bg-surface p-6 hover:border-primary/60 transition">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-primary">{n.category}</span><span>·</span><span>{n.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold group-hover:text-primary transition">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface to-surface-2 p-10 md:p-16">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
            <div className="relative max-w-3xl">
              <span className="text-xs uppercase tracking-[0.25em] text-primary">Partnerships & Opportunities</span>
              <h3 className="mt-4 text-4xl font-bold md:text-5xl">Build the next chapter with us.</h3>
              <p className="mt-5 text-lg text-muted-foreground">
                We partner with institutional and strategic investors, sovereign and development funds, technology providers and operators seeking long-term exposure to high-growth markets through a disciplined platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition">
                  Request Investment Brief <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition">
                  Book a Meeting
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
