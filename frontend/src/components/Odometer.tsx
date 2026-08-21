import { useEffect, useState } from "react";

const STATS: [string, string][] = [
  ["1,204", "fictional citizenships issued so far."],
  ["61%", "of people hit 'accept' before finishing reading the question."],
  ["$14.02", "the average gap between a price guess and reality. we don't know why we track that."],
  ["9,131", "elevator-waiting hours logged by a calculator that doesn't exist yet."],
  ["0", "of these experiments have anything to do with each other."],
  ["3.4 sec", "average time before someone clicks something without reading it."],
];

export function Odometer() {
  const [i, setI] = useState(0);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSwap(true);
      setTimeout(() => {
        setI((p) => (p + 1) % STATS.length);
        setSwap(false);
      }, 260);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const [num, caption] = STATS[i];

  return (
    <div className="relative bg-brand-teal text-brand-teal-ink rounded-[22px] px-8 py-9 rotate-2 shadow-[0_18px_0_rgba(15,107,92,0.18),0_24px_40px_rgba(28,42,40,0.18)]">
      <div className="absolute -top-2.5 left-6 w-6 h-5 bg-brand-mustard [clip-path:polygon(0_0,100%_0,50%_100%)]" />
      <div className="font-mono text-xs uppercase tracking-widest opacity-75 mb-2.5">right now, somewhere</div>
      <div className={`font-display text-[clamp(40px,6vw,56px)] leading-none transition-all duration-250 ${swap ? "opacity-0 translate-y-1.5" : "opacity-100"}`}>
        {num}
      </div>
      <div className={`font-mono text-[13px] mt-3 opacity-85 min-h-[2.6em] transition-all duration-250 ${swap ? "opacity-0 translate-y-1.5" : "opacity-100"}`}>
        {caption}
      </div>
    </div>
  );
}