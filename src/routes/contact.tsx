import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HS Investment Group" },
      { name: "description", content: "Get in touch with HS Investment Group. Offices in UAE, Canada, China, Turkey, Egypt and Yemen." },
    ],
  }),
  component: Contact,
});

const offices = [
  { c: "UAE — Headquarters", a: "606, EREC Building, Al Falah St., Zone 1, Al Danah, Abu Dhabi", p: "+971 2 650 7741", f: "+971 2 650 7742" },
  { c: "Canada", a: "3280 Donald Mackay St, Oakville, Ontario, L6M 5K2", p: "+1 (902) 292 9222" },
  { c: "China", a: "Unit B, 13/F, Shing Lee Commercial Building, Wing Cut St, Central, Hong Kong" },
  { c: "Turkey", a: "Yakuplu Mah, Hurriyet Bul, SkyPort Residence No.1, Beylikdüzü, Istanbul" },
  { c: "Egypt", a: "Villa 313D, South Academy, 5th Settlement, New Cairo", p: "+20 114 6157855" },
  { c: "Yemen", a: "Bldg. 1, Bader Roundabout, P.O. Box 70116 Khormaksar, Aden", p: "+967 2 237 793" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "Investment", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent", { description: "Our team will respond within 2 business days." });
    setForm({ name: "", email: "", company: "", interest: "Investment", message: "" });
  };

  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-24 pb-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Contact</span>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl max-w-4xl">Let's <span className="text-gradient-ember">connect</span>.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Reach out for investment briefs, partnership discussions or general inquiries — our team responds within two business days.</p>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={submit} className="rounded-3xl border border-border bg-surface p-8 md:p-10 grid gap-4">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company / Organization" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
              {["Investment", "Partnership", "Media", "Careers", "General Inquiry"].map((o) => <option key={o}>{o}</option>)}
            </select>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:ember-glow transition">
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><span className="font-semibold">Email</span></div>
              <a href="mailto:info@hsinvestment.group" className="mt-2 block text-muted-foreground hover:text-primary">info@hsinvestment.group</a>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><span className="font-semibold">Phone (UAE HQ)</span></div>
              <a href="tel:+97126507741" className="mt-2 block text-muted-foreground hover:text-primary">+971 2 650 7741</a>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-surface to-surface-2 p-6">
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><span className="font-semibold">Headquarters</span></div>
              <p className="mt-2 text-muted-foreground">606, EREC Building, Al Falah St., Zone 1, Al Danah, Abu Dhabi, UAE</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <h2 className="text-3xl font-bold">Global offices</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((o, i) => (
            <Reveal key={o.c} delay={i * 0.04}>
              <div className="group rounded-2xl border border-border bg-surface p-6 h-full hover:border-primary/60 transition">
                <h3 className="text-lg font-semibold text-primary">{o.c}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.a}</p>
                {o.p && <p className="mt-2 text-sm">📞 {o.p}</p>}
                {o.f && <p className="text-sm text-muted-foreground">Fax: {o.f}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
