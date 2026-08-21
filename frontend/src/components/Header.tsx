import { useLocation, useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const inGame = location.pathname.startsWith("/find-your-country");
  const { isDark, toggle } = useDarkMode();

  return (
    <header className="pt-6">
      <div className="flex items-center justify-between gap-4">
        <button onClick={() => navigate("/")} className="font-display text-[22px] tracking-wide flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block" />
          IDLE HANDS
          {inGame && (
            <small className="font-mono text-[11px] opacity-55 ml-0.5 uppercase tracking-wider">
              · find your country
            </small>
          )}
        </button>
        <nav className="font-mono text-[13px] uppercase tracking-wider flex items-center gap-5">
          {inGame ? (
            <button
              onClick={() => navigate("/")}
              className="border-b-2 border-transparent hover:border-brand-ink pb-0.5"
            >
              ← Playground
            </button>
          ) : (
            <a href="#grid" className="border-b-2 border-transparent hover:border-brand-ink pb-0.5">
              Everything
            </a>
          )}
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full border-2 border-brand-ink flex items-center justify-center text-sm normal-case hover:bg-brand-ink hover:text-brand-paper transition-colors"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}