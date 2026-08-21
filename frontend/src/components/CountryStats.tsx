import type { Country } from "../types/country";

interface CountryStatsProps {
  country: Country;
}

export function CountryStats({ country }: CountryStatsProps) {
  const stats = [
    { k: "Population", v: country.population?.toLocaleString() ?? "—" },
    { k: "Currency", v: country.currency ?? "—" },
    { k: "Founded", v: country.foundedYear ? String(country.foundedYear) : "—" },
    { k: "Government", v: country.governmentType ?? "—" },
    { k: "National Food", v: country.nationalFood ?? "—" },
    { k: "Most Popular Profession", v: country.mostPopularProfession ?? "—" },
    { k: "Most Common Hobby", v: country.mostCommonHobby ?? "—" },
  ];

  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="font-display text-[clamp(21px,3vw,28px)] mb-1.5">The numbers</h2>
        <p className="font-mono text-[12.5px] text-brand-ink/60">everything you never asked to know</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-4">
        {stats.map((s) => (
          <div key={s.k} className="bg-brand-cream rounded-2xl px-4 py-4 shadow-[0_6px_14px_rgba(28,42,40,0.18)]">
            <div className="font-mono text-[10.5px] uppercase tracking-wider opacity-60 mb-1">{s.k}</div>
            <div className="font-display text-[15px] leading-snug">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}