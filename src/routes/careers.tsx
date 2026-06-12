import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Briefcase, Send } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — HS Investment Group" },
      { name: "description", content: "Join a passionate team that brings integrity, expertise and purpose to investment across MENA and emerging markets." },
    ],
  }),
  component: Careers,
});

const positions = [
  { t: "Investment Associate", l: "Abu Dhabi, UAE", d: "Portfolio analysis, deal screening and execution support." },
  { t: "Project Manager — Energy", l: "Cairo, Egypt", d: "Lead solar EPC delivery across the Upper Egypt platform." },
  { t: "Supply Chain Lead", l: "Hong Kong", d: "Manage the China–MENA sourcing corridor." },
  { t: "Financial Controller", l: "Abu Dhabi, UAE", d: "Group consolidation, reporting and treasury." },
  { t: "Real Estate Development Manager", l: "Abu Dhabi, UAE", d: "Mixed-use development pipeline and partner coordination." },
];

function Careers() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received", { description: "Our team will be in touch shortly." });
    setForm({ name: "", email: "", role: "", message: "" });
  };

  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-24 pb-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Careers</span>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">Build a <span className="text-gradient-ember">lasting legacy</span> with us.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Our greatest asset is our people — a passionate, committed team bringing integrity, expertise and purpose to every project.</p>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12">
        <h2 className="text-3xl font-bold">Open positions</h2>
        <div className="mt-8 space-y-3">
          {positions.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.03}>
              <div className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 hover:border-primary/60 transition">
                <div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground"><Briefcase className="h-4 w-4 text-primary" /> Full-time</div>
                  <h3 className="mt-2 text-xl font-semibold">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />{p.l}</span>
                  <a href="#apply" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:ember-glow transition">Apply</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="apply" className="container-px mx-auto max-w-3xl py-16">
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
          <h2 className="text-3xl font-bold">Application form</h2>
          <p className="mt-2 text-muted-foreground">Tell us about yourself — we review every application.</p>
          <form onSubmit={submit} className="mt-8 grid gap-4">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="Role you're applying for" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="A short note about your experience and motivation" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition">
              Submit application <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
