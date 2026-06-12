import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Quote, Target, Heart, Shield, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-skyline.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HS Investment Group" },
      { name: "description", content: "Vision, mission, leadership and values of HS Investment Group — a multi-sector holding company headquartered in the UAE." },
    ],
  }),
  component: About,
});

const values = [
  { i: Target, t: "Discipline", d: "We invest with strategic oversight, capital discipline and operational involvement." },
  { i: Shield, t: "Integrity", d: "Governance and compliance aligned with UAE and international best practices." },
  { i: Heart, t: "People", d: "Our greatest asset is a passionate team that brings expertise and purpose to every project." },
  { i: Sparkles, t: "Impact", d: "Thoughtful innovation and responsible investment that build lasting legacies." },
];

function About() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="container-px mx-auto max-w-7xl py-28 md:py-40">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">About the Group</span>
            <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">A vision rooted in <span className="text-gradient-ember">meaningful impact</span>.</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              HS Investment Group is a UAE-headquartered multi-sector holding company that connects sourcing, processing and high-growth markets through disciplined, execution-led investment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container-px mx-auto max-w-7xl py-24 grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-8 h-full">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Vision</span>
            <h2 className="mt-3 text-3xl font-bold">A gateway to MENA & emerging global markets.</h2>
            <p className="mt-4 text-muted-foreground">To be the most trusted execution-led investment platform connecting global capital with regional opportunity across the corridors that matter most.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-8 h-full">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Mission</span>
            <h2 className="mt-3 text-3xl font-bold">Connect capital with capability to unlock opportunity.</h2>
            <p className="mt-4 text-muted-foreground">We invest with control, accountability and long-term commitment — working closely with our subsidiaries to drive growth, efficiency and sustainability.</p>
          </div>
        </Reveal>
      </section>

      {/* Chairman message */}
      <section className="border-y border-border bg-surface-2/40">
        <div className="container-px mx-auto max-w-5xl py-24">
          <Reveal>
            <Quote className="h-12 w-12 text-primary" />
            <blockquote className="mt-6 text-2xl leading-relaxed md:text-3xl">
              "Founding HS Investment Group was more than just starting a company — it was the realization of a vision rooted in our belief that we could create meaningful impact and leave a lasting legacy. Our focus is simple: <span className="text-primary">connect capital with capability to unlock opportunity</span>."
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/20 ring-1 ring-primary" />
              <div>
                <div className="font-semibold">Chairman</div>
                <div className="text-sm text-muted-foreground">HS Investment Group</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Core Values</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">What guides every decision.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6 h-full hover:border-primary/60 hover:-translate-y-1 transition duration-300">
                <v.i className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Business model */}
      <section className="border-y border-border bg-surface-2/40">
        <div className="container-px mx-auto max-w-7xl py-24 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Business Model</span>
            <h2 className="mt-3 text-4xl font-bold">Centralized strategy. Decentralized execution.</h2>
            <p className="mt-4 text-muted-foreground">A centralized strategy, governance and capital allocation model with execution carried out by sector-focused subsidiaries.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-primary">Group-Level</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>Group strategy and portfolio direction</li>
                  <li>Capital allocation and investment decisions</li>
                  <li>Risk, compliance and governance</li>
                  <li>Shared services: legal, finance, HR, IT, marketing</li>
                  <li>Investor relations and strategic partnerships</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-primary">Subsidiary-Level</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>Day-to-day operations</li>
                  <li>Sector-specific execution and growth</li>
                  <li>Revenue generation and market expansion</li>
                  <li>Client, supplier and government engagement</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Leadership & Governance</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Stability, experience & control.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { t: "Governance Framework", d: "UAE-based holding structure with centralized risk management, transparent reporting and internal controls." },
            { t: "Operating Leadership", d: "Industry-specific CEOs for each subsidiary with local execution teams across operating countries." },
            { t: "Board Oversight", d: "Senior executives and sector specialists with deep experience across investment, engineering, trade and operations." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-7 h-full hover:border-primary/60 transition">
                <h3 className="text-lg font-semibold">{x.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition">
              Speak to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
