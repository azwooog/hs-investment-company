import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { ArrowLeft, MapPin, Calendar, TrendingUp, Users, Layers, Star } from "lucide-react";

export const Route = createFileRoute("/projects/$project")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.project);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — HS Investment` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.name },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [{ title: "Project — HS Investment" }],
  }),
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-32 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-flex text-primary">Back to projects</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-px mx-auto max-w-3xl py-32 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Try again</button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const p = Route.useLoaderData();
  const stats = [
    { i: MapPin, l: "Location", v: p.location },
    { i: Star, l: "Status", v: p.status },
    { i: TrendingUp, l: "Investment Size", v: p.size },
    { i: Layers, l: "ROI", v: p.roi },
    { i: Calendar, l: "Timeline", v: p.timeline },
    { i: Users, l: "Partners", v: p.partners },
  ];
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img src={p.image} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="container-px mx-auto max-w-7xl pt-28 pb-24">
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All projects</Link>
          <Reveal>
            <span className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-primary">{p.sector} · {p.status}</span>
            <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">{p.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary"><s.i className="h-4 w-4" />{s.l}</div>
              <div className="mt-2 text-lg font-semibold">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-foreground/90">
          <h2 className="text-3xl font-bold">Strategic importance</h2>
          <p className="text-muted-foreground">{p.importance}</p>
          <p className="text-muted-foreground">This project reflects HS Investment Group's active-ownership model: capital paired with operational leadership and governance to deliver durable, long-term returns alongside measurable economic impact.</p>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-surface p-8">
          <h3 className="text-xl font-semibold">Want the full data room?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Qualified investors can request the detailed pitch deck and financial model.</p>
          <Link to="/contact" className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:ember-glow transition">Request access</Link>
        </div>
      </section>
    </div>
  );
}
