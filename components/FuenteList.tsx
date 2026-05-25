import type { Fuente } from "@/lib/types";

const TIPOS: Record<Fuente["tipo"], { label: string; bg: string; fg: string }> = {
  oficial: { label: "Oficial", bg: "#dbeafe", fg: "#1d4ed8" },
  prensa: { label: "Prensa", bg: "#f5f5f4", fg: "#57534e" },
  academica: { label: "Académica", bg: "#ede9fe", fg: "#6d28d9" },
  ciudadana: { label: "Ciudadana", bg: "#dcfce7", fg: "#15803d" },
  rrss: { label: "Redes sociales", bg: "#fef9c3", fg: "#a16207" },
  ia: { label: "Generada por IA", bg: "#fee2e2", fg: "#b91c1c" },
};

export function FuenteList({ fuentes }: { fuentes: Fuente[] }) {
  if (fuentes.length === 0) {
    return (
      <div className="text-xs text-[var(--muted-foreground)] italic">
        Sin fuentes registradas. Esta afirmación no cumple el estándar de evidencia mínima.
      </div>
    );
  }
  return (
    <ul className="space-y-1.5">
      {fuentes.map((f, i) => {
        const t = TIPOS[f.tipo];
        const inner = (
          <>
            <span
              className="chip px-1.5 py-0.5 text-[9px] shrink-0"
              style={{ backgroundColor: t.bg, color: t.fg }}
            >
              {t.label}
            </span>
            <span className="text-xs">{f.titulo}</span>
            {f.fecha && (
              <span className="text-[10px] text-[var(--muted-foreground)] ml-auto shrink-0">
                {f.fecha}
              </span>
            )}
          </>
        );
        return (
          <li key={i} className="flex items-center gap-2">
            {f.url ? (
              <a
                href={f.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 w-full hover:underline"
              >
                {inner}
              </a>
            ) : (
              <div className="flex items-center gap-2 w-full">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
