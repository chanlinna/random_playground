import { Button } from "../components/Button";

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 animate-fade-up">
      <span className="font-mono text-[13px] uppercase tracking-wider bg-brand-red/10 dark:bg-brand-red/20 text-brand-red-ink dark:text-brand-red px-3.5 py-1 rounded-full mb-5 inline-block">
        🌎 find your country
      </span>
      <h1 className="font-display text-[clamp(30px,5vw,48px)] leading-tight mb-4">
        Let's find out
        <br />
        where you <span className="text-brand-red">belong.</span>
      </h1>
      <p className="text-[17px] leading-relaxed text-brand-ink/70 max-w-[38ch] mx-auto mb-8">
        You'll answer 30 completely reasonable questions. Probably. 5 fictional countries are waiting — which one
        feels most like you?
      </p>
      <Button onClick={onStart}>Start →</Button>
    </div>
  );
}