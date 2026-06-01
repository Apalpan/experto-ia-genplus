import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  theme: "dark" | "light";
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button className="icon-button" type="button" onClick={onToggle} aria-label="Cambiar tema">
      <Icon size={18} />
    </button>
  );
}
