
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    localStorage.setItem("atelier-theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[color:var(--bg-secondary)/0.75] text-[var(--text-primary)] backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
    >
      <span className="sr-only">Switch theme</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        {isDark ? (
          <path
            d="M12 3v2.5M12 18.5V21M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M3 12h2.5M18.5 12H21M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77M15.5 12A3.5 3.5 0 1 1 8.5 12a3.5 3.5 0 0 1 7 0Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        ) : (
          <path
            d="M20 14.2A7.8 7.8 0 1 1 9.8 4 6.4 6.4 0 0 0 20 14.2Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        )}
      </svg>
    </button>
  );
}
