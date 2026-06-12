import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { sectors } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Investment Sectors — HS Investment Group" },
      { name: "description", content: "Trading, food, real estate, infrastructure, telecom, energy, mining, cement, fishing and aquaculture — explore our investment sectors." },
    ],
  }),
  component: Sectors,
});

function Sectors() {
  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-24 pb-12">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Investment Sectors</span>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">Eight sectors. <span className="text-gradient-ember">One platform</span>.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">A diversified portfolio spanning the value chains that drive emerging-market growth — from sourcing and processing to delivery and infrastructure.</p>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 grid gap-8">
        {sectors.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <Link
              to="/sectors/$sector" params={{ sector: s.slug }}
              className={`group grid overflow-hidden rounded-3xl border border-border bg-surface transition hover:border-primary/60 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-primary">0{i + 1} · {s.title}</div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.tagline}</h2>
                <p className="mt-4 text-muted-foreground">{s.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{b}</li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore sector <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
