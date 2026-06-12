import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { newsPosts } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Insights & News — HS Investment Group" },
      { name: "description", content: "Latest news, market insights and reports from HS Investment Group." },
    ],
  }),
  component: News,
});

function News() {
  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-24 pb-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Insights</span>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">News, insights & <span className="text-gradient-ember">market reports</span>.</h1>
        </Reveal>
      </section>
      <section className="container-px mx-auto max-w-5xl py-12 space-y-5">
        {newsPosts.map((n, i) => (
          <Reveal key={n.slug} delay={i * 0.05}>
            <article className="group flex flex-col md:flex-row md:items-center gap-6 rounded-2xl border border-border bg-surface p-6 hover:border-primary/60 transition">
              <div className="md:w-40 shrink-0">
                <div className="text-xs uppercase tracking-widest text-primary">{n.category}</div>
                <div className="mt-1 text-sm text-muted-foreground">{n.date}</div>
              </div>
              <div>
                <h2 className="text-xl font-semibold group-hover:text-primary transition">{n.title}</h2>
                <p className="mt-2 text-muted-foreground">{n.excerpt}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
