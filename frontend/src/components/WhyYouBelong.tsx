interface WhyYouBelongProps {
  reasons: string[];
}

export function WhyYouBelong({ reasons }: WhyYouBelongProps) {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="font-display text-[clamp(21px,3vw,28px)] mb-1.5">Why you belong here</h2>
        <p className="font-mono text-[12.5px] text-brand-ink/60">based on absolutely rigorous methodology</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {reasons.map((reason, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 70}ms` }}
            className="bg-brand-cream rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-[0_6px_14px_rgba(28,42,40,0.18)] text-[14.5px] opacity-0 animate-fade-up [animation-fill-mode:forwards]"
          >
            <span className="text-brand-teal font-display text-[15px] flex-shrink-0">✓</span>
            <span>{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
}