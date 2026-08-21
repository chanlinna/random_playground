import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-bold text-[15.5px] px-7 py-4 transition-transform duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)]";
  // text-[#FBF6EC] is intentionally a fixed color, not text-brand-cream — it
  // sits on the constant brand-red, which never flips in dark mode, so this
  // must stay light regardless of theme.
  const styles =
    variant === "primary"
      ? "bg-brand-red text-[#FBF6EC] shadow-[0_6px_0_#4A120C] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[0_3px_0_#4A120C]"
      : "bg-transparent text-brand-ink border-2 border-brand-ink hover:bg-brand-ink hover:text-brand-paper";

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}