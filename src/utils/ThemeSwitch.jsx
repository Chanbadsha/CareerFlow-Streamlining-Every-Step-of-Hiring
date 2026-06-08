"use client";

import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      defaultSelected
      size="lg"
      className="border border-[var(--border)] bg-[var(--surface)] p-1 rounded-full shadow-sm transition-all"
    >
      {({ isSelected }) => (
        <Switch.Control className="bg-transparent">
          <Switch.Thumb className="flex items-center justify-center transition-all duration-300">
            <Switch.Icon>
              {isSelected ? (
                <Moon className="text-blue-500" size={16} />
              ) : (
                <Sun className="text-yellow-500" size={16} />
              )}
            </Switch.Icon>
          </Switch.Thumb>
        </Switch.Control>
      )}
    </Switch>
  );
}
