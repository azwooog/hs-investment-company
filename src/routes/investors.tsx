import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Download, FileText, Handshake, TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors Hub — HS Investment Group" },
      { name: "description", content: "Why invest in HS Group: track record, case studies, downloadable pitch deck and investment models (JV / Equity / PPP)." },
    ],
  }),
  component: Investors,
});

function Investors() {
  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-24 pb-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Investors Hub</span>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">Long-term exposure to <span className="text-gradient-ember">high-growth markets</span>.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">A disciplined, execution-led platform that pairs capital with operational leadership across MENA and emerging global markets.</p>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { i: TrendingUp, t: "Proven track record", d: "15+ years of execution across complex and emerging markets." },
          { i: Handshake, t: "Active ownership", d: "Hands-on governance and operational leadership." },
          { i: FileText, t: "Investor-grade reporting", d: "Transparent disclosures aligned to international standards." },
          { i: Download, t: "Multiple investment models", d: "Joint ventures, equity participation and public-private partnerships." },
        ].map((x, i) => (
          <Reveal key={x.t} delay={i * 0.05}>
            <div className="rounded-2xl border border-border bg-surface p-6 h-full hover:border-primary/60 hover:-translate-y-1 transition duration-300">
              <x.i className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 grid gap-6 md:grid-cols-2">
        {[
          { t: "Download Portfolio Profile", d: "The 2026 Profile — group overview, sectors, geography, ESG and growth strategy.", b: "Download PDF" },
          { t: "Request Pitch Deck", d: "Detailed investor pitch deck with financial highlights and project pipeline.", b: "Request access" },
          { t: "Book a Meeting", d: "Schedule an introductory call with our investor relations team.", b: "Book now" },
          { t: "Submit Interest", d: "Tell us about your investment thesis and we'll match you to opportunities.", b: "Submit" },
        ].map((x, i) => (
          <Reveal key={x.t} delay={i * 0.05}>
            <div className="rounded-2xl border border-border bg-surface p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold">{x.t}</h3>
              <p className="mt-3 text-muted-foreground flex-1">{x.d}</p>
              <Link to="/contact" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:ember-glow transition">
                {x.b} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">Investment models</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: "Joint Ventures", d: "Strategic JV structures with aligned governance and shared upside." },
            { t: "Equity Participation", d: "Direct equity in operating companies with active board representation." },
            { t: "Public-Private Partnerships", d: "PPP frameworks for infrastructure and essential services." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-surface p-7">
              <h3 className="text-lg font-semibold text-primary">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
