import type { Country } from "../types/country";

interface CountryRevealProps {
  country: Country;
}

export function CountryReveal({ country }: CountryRevealProps) {
  const stats = [
    { k: "Population", v: country.population?.toLocaleString() ?? "—" },
    { k: "Capital", v: country.capital ?? "—" },
    { k: "Currency", v: country.currency ?? "—" },
    { k: "National Animal", v: country.nationalAnimal ?? "—" },
  ];

  return (
    <div className="text-center pt-12 pb-8">
      <span className="font-mono text-[13px] uppercase tracking-wider bg-brand-red/10 dark:bg-brand-red/20 text-brand-red-ink dark:text-brand-red px-3.5 py-1 rounded-full inline-block mb-5">
        you belong to...
      </span>
      <div className="w-[110px] h-[110px] rounded-[28px] mx-auto mb-5 flex items-center justify-center text-[48px] bg-brand-teal/10 border-4 border-brand-teal animate-flag-pop">
        {country.emblem}
      </div>
      <h1 className="font-display text-[clamp(30px,6vw,50px)] leading-tight mb-3">{country.name.toUpperCase()}</h1>
      <p className="font-mono text-[13px] text-brand-ink/60 mb-3">{country.identity}</p>
      <p className="text-[16.5px] text-brand-ink/70 max-w-[40ch] mx-auto mb-7 leading-relaxed">
        {country.description}
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        {stats.map((item) => (
          <div key={item.k} className="bg-brand-cream rounded-2xl px-5 py-3.5 min-w-[120px] shadow-[0_8px_18px_rgba(28,42,40,0.18)]">
            <div className="font-mono text-[10.5px] uppercase tracking-wider opacity-60 mb-1">{item.k}</div>
            <div className="font-display text-[15px]">{item.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}