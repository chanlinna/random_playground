import type { Country } from "../types/country";

// index 0's text is pinned to a fixed light color for the same reason noted
// in Button/ExperimentCard — it sits on the constant brand-red.
const THEMES = [
  "bg-brand-red text-[#FBF6EC] rotate-[-1.6deg]",
  "bg-brand-mustard text-brand-mustard-ink rotate-[1.2deg]",
  "bg-brand-teal text-brand-teal-ink rotate-[-0.8deg]",
  "bg-brand-cream text-brand-ink rotate-[1.6deg]",
];

interface WeirdLawsProps {
  country: Country;
}

export function WeirdLaws({ country }: WeirdLawsProps) {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="font-display text-[clamp(21px,3vw,28px)] mb-1.5">
          {country.emblem} {country.name}'s laws
        </h2>
        <p className="font-mono text-[12.5px] text-brand-ink/60">on the books, allegedly enforced</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {country.laws.map((law, i) => (
          <div
            key={i}
            className={`rounded-2xl px-4 py-5 text-[14px] leading-relaxed shadow-[0_8px_18px_rgba(28,42,40,0.18)] transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:rotate-0 hover:-translate-y-1 ${THEMES[i % THEMES.length]}`}
          >
            {law}
          </div>
        ))}
      </div>
    </section>
  );
}