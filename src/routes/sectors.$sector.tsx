import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { sectors, projects } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sectors/$sector")({
  loader: ({ params }) => {
    const s = sectors.find((x) => x.slug === params.sector);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — HS Investment Group` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} — HS Investment Group` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [{ title: "Sector — HS Investment Group" }],
  }),
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-32 text-center">
      <h1 className="text-4xl font-bold">Sector not found</h1>
      <Link to="/sectors" className="mt-6 inline-flex items-center gap-2 text-primary">Back to sectors</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-px mx-auto max-w-3xl py-32 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Try again</button>
    </div>
  ),
  component: SectorDetail,
});

function SectorDetail() {
  const s = Route.useLoaderData();
  const related = projects.filter((p) => p.sector.toLowerCase().includes(s.title.split(" ")[0].toLowerCase()));
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img src={s.image} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="container-px mx-auto max-w-7xl pt-28 pb-24">
          <Link to="/sectors" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All sectors</Link>
          <Reveal>
            <span className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-primary">{s.title}</span>
            <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">{s.tagline}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{s.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="text-3xl font-bold">Strategy & strengths</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-4">
            {s.bullets.map((b: string, i: number) => (
              <li key={b} className="flex gap-4 rounded-xl border border-border bg-surface p-5">
                <span className="text-primary font-bold">0{i + 1}</span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="container-px mx-auto max-w-7xl py-12 border-t border-border">
          <h2 className="text-3xl font-bold">Related projects</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to="/projects/$project" params={{ project: p.slug }} className="group block overflow-hidden rounded-2xl border border-border bg-surface hover:border-primary/60 transition">
                <div className="aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest text-primary">{p.location}</div>
                  <h3 className="mt-2 font-semibold">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container-px mx-auto max-w-7xl py-20 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition">
          Discuss this sector <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
