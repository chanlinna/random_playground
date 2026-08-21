import { useState } from "react";
import type { Experiment } from "../data/experiments";

// text-[#FBF6EC] on the red theme is pinned for the same reason as Button's
// primary variant — brand-red is constant, so its text must stay constant too.
const THEME_CLASSES: Record<Experiment["theme"], string> = {
  "": "bg-brand-cream text-brand-ink",
  red: "bg-brand-red text-[#FBF6EC]",
  mustard: "bg-brand-mustard text-brand-mustard-ink",
  teal: "bg-brand-teal text-brand-teal-ink",
};

interface ExperimentCardProps {
  exp: Experiment;
  onClick: () => void;
}

export function ExperimentCard({ exp, onClick }: ExperimentCardProps) {
  const [shake, setShake] = useState(false);

  function handleClick() {
    if (!exp.available) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      className={`relative rounded-2xl px-5 py-6 min-h-[210px] w-full flex flex-col justify-between text-left shadow-[0_10px_22px_rgba(28,42,40,0.18)] transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 hover:scale-[1.02] ${
        THEME_CLASSES[exp.theme]
      } ${shake ? "animate-shake" : ""}`}
    >
      {!exp.available && (
        <span className="absolute top-3.5 right-3.5 font-mono text-[9px] uppercase tracking-wide px-2 py-1 rounded-full bg-black/10">
          soon
        </span>
      )}
      <div>
        <span className="text-3xl inline-block -rotate-6 mb-3.5">{exp.icon}</span>
        <div className="font-mono text-[11px] uppercase tracking-wide opacity-65 mb-1.5">{exp.label}</div>
        <h3 className="font-display text-[18px] leading-snug mb-2.5">{exp.title}</h3>
        <p className="text-sm leading-snug opacity-85 mb-4">{exp.desc}</p>
      </div>
      {exp.available ? (
        <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-bold bg-brand-ink text-brand-cream px-4 py-2 rounded-full self-start">
          ▶ Play
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-bold border-2 border-dashed border-current opacity-65 px-3.5 py-2 rounded-full self-start">
          🔒 Coming soon
        </span>
      )}
    </button>
  );
}