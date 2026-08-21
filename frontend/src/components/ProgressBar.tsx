interface ProgressBarProps {
  current: number; // 1-indexed
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="max-w-xs mx-auto mt-8 text-center">
      <div className="font-mono text-[12.5px] uppercase tracking-wider opacity-60 mb-2.5">
        Question {current} / {total}
      </div>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => {
          const filled = i < current - 1;
          const isCurrent = i === current - 1;
          return (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                filled ? "bg-brand-red" : isCurrent ? "bg-brand-mustard" : "bg-brand-ink/10"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}