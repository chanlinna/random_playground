import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ExperimentCard } from "../components/ExperimentCard";
import { Odometer } from "../components/Odometer";
import { CATEGORIES, EXPERIMENTS, type Experiment } from "../data/experiments";

export function HomePage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => EXPERIMENTS.filter((e) => activeCategory === "all" || e.category === activeCategory),
    [activeCategory]
  );

  function showToast(msg: string) {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2400);
  }

  function openExperiment(exp: Experiment) {
    if (exp.available && exp.path) navigate(exp.path);
    else showToast("🔒 Coming soon — check back later.");
  }

  function surpriseMe() {
    const pick = visible[Math.floor(Math.random() * visible.length)];
    document.getElementById(`card-${pick.title}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => openExperiment(pick), 500);
  }

  return (
    <div className="pb-10">
      <section className="py-16 md:py-20 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <span className="font-mono text-[13px] uppercase tracking-wider bg-brand-red/10 dark:bg-brand-red/20 text-brand-red-ink dark:text-brand-red px-3.5 py-1 rounded-full mb-4 inline-block">
            no login. no point. just click.
          </span>
          <h1 className="font-display text-[clamp(38px,5.4vw,66px)] leading-[1.04] mb-5">
            You were bored.
            <br />
            We made <span className="text-brand-red">this.</span>
          </h1>
          <p className="text-lg leading-relaxed text-brand-ink/70 max-w-[46ch] mb-7">
            A pile of unrelated interactive things. <strong>Find Your Country</strong> is live and ready to play —
            the rest are still brewing. Click one and find out what it does.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Button onClick={surpriseMe}>🎲 Surprise me</Button>
            <Button variant="ghost" onClick={() => gridRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Browse everything
            </Button>
          </div>
        </div>
        <Odometer />
      </section>

      <div ref={gridRef} id="grid" className="flex flex-wrap items-end justify-between gap-4 mt-10 mb-6">
        <div>
          <h2 className="font-display text-[clamp(24px,3vw,34px)]">Pick something →</h2>
          <p className="font-mono text-[13px] text-brand-ink/60 mt-1.5">17 experiments · 1 ready to play, 16 brewing</p>
        </div>
        <div className="font-mono text-xs bg-brand-cream rounded-full px-5 py-2.5 shadow-[0_6px_14px_rgba(28,42,40,0.18)] whitespace-nowrap">
          <span><b className="text-brand-red-ink">1</b> playable</span>
          <span className="opacity-30 mx-1.5">·</span>
          <span><b className="text-brand-red-ink">16</b> coming soon</span>
          <span className="opacity-30 mx-1.5">·</span>
          <span><b className="text-brand-red-ink">∞</b> more ideas</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-7">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`font-mono text-[12.5px] uppercase tracking-wide px-4 py-2 rounded-full border-2 border-brand-ink transition-colors ${
              activeCategory === c.id ? "bg-brand-ink text-brand-paper" : "hover:bg-brand-ink/5"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(230px,1fr))] pb-6">
        {visible.map((exp) => (
          <div id={`card-${exp.title}`} key={exp.title}>
            <ExperimentCard exp={exp} onClick={() => openExperiment(exp)} />
          </div>
        ))}
      </div>

      <footer className="mt-20 border-t-2 border-dashed border-brand-ink/25 pt-11 flex justify-between items-end flex-wrap gap-5">
        <p className="font-display text-[clamp(20px,2.6vw,30px)] leading-snug max-w-[16ch]">
          You don't need a reason to be here. You're here because you're curious.
        </p>
        <p className="font-mono text-[13px] text-brand-ink/60">
          idlehands.example — updated whenever someone thinks
          <br />
          "wouldn't it be funny if—"
        </p>
      </footer>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-brand-ink text-brand-cream font-mono text-sm px-5 py-3 rounded-full shadow-lg z-50">
          {toast}
        </div>
      )}
    </div>
  );
}