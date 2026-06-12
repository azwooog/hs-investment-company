import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, sectors } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — HS Investment Group" },
      { name: "description", content: "Flagship and ongoing investment projects across UAE, Egypt, Yemen and the China–MENA corridor." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const sectorNames = useMemo(() => ["All", ...new Set(projects.map((p) => p.sector))], []);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.sector === filter);

  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-24 pb-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Projects</span>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">Where <span className="text-gradient-ember">capital</span> meets capability.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">A growing portfolio of operating and development projects across our six countries and eight sectors.</p>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl py-6">
        <div className="flex flex-wrap gap-2">
          {sectorNames.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition ${
                filter === s ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link to="/projects/$project" params={{ project: p.slug }} className="group block overflow-hidden rounded-2xl border border-border bg-surface hover:-translate-y-1 hover:border-primary/60 transition duration-300 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest">{p.status}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">{p.sector}</div>
                  <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{p.location}</span>
                    <span className="text-primary font-semibold">{p.size}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-muted-foreground">Looking for deeper data on a specific project?</p>
          <Link to="/contact" className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition">Request the data room</Link>
        </div>
      </section>
    </div>
  );
}
