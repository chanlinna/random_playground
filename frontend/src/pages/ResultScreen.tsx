import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountryReveal } from "../components/CountryReveal";
import { WhyYouBelong } from "../components/WhyYouBelong";
import { WeirdLaws } from "../components/WeirdLaws";
import { CountryStats } from "../components/CountryStats";
import { Button } from "../components/Button";
import type { Country } from "../types/country";

interface ResultScreenProps {
  country: Country;
  reasons: string[];
  onPlayAgain: () => void;
}

export function ResultScreen({ country, reasons, onPlayAgain }: ResultScreenProps) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const text = `I got ${country.name} on Find Your Country! Population: ${country.population?.toLocaleString()}, capital: ${country.capital}, national animal: ${country.nationalAnimal}.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Clipboard API unavailable — sharing is a nice-to-have, fail silently.
    }
  }

  return (
    <div className="pb-16">
      <CountryReveal country={country} />
      <WhyYouBelong reasons={reasons} />
      <WeirdLaws country={country} />
      <CountryStats country={country} />
      <div className="mt-16 text-center border-t-2 border-dashed border-brand-ink/25 pt-10">
        <div className="flex gap-3.5 justify-center flex-wrap mb-5">
          <Button onClick={onPlayAgain}>🔁 Play Again</Button>
          <Button variant="ghost" onClick={handleShare}>
            {copied ? "Copied!" : "Share My Country"}
          </Button>
          <Button variant="ghost" onClick={() => navigate("/")}>
            ← Back to Playground
          </Button>
        </div>
        <p className="font-mono text-[13px] text-brand-ink/60">
          Only <span className="font-bold text-brand-ink">{country.population?.toLocaleString()}</span> people live
          here. You're officially one of them.
        </p>
      </div>
    </div>
  );
}