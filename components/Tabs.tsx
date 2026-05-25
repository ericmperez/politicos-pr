"use client";

import { useState, type ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  badge?: number;
  content: ReactNode;
}

export function Tabs({ tabs, initial }: { tabs: Tab[]; initial?: string }) {
  const [active, setActive] = useState(initial ?? tabs[0]?.id);
  const current = tabs.find((t) => t.id === active);

  return (
    <div>
      <div
        className="flex gap-1 overflow-x-auto border-b border-[var(--border)] mb-6 -mx-4 sm:mx-0 px-4 sm:px-0"
        role="tablist"
      >
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.id)}
              className={`shrink-0 px-3 py-2 text-sm font-semibold border-b-2 transition-colors ${
                isActive
                  ? "border-[var(--foreground)] text-[var(--foreground)]"
                  : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {t.label}
              {typeof t.badge === "number" && (
                <span
                  className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                  }`}
                >
                  {t.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div role="tabpanel">{current?.content}</div>
    </div>
  );
}
