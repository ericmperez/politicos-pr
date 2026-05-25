import type { EstadoPromesa } from "@/lib/types";

const LABELS: Record<EstadoPromesa, { label: string; bg: string; fg: string }> = {
  cumplida: { label: "Cumplida", bg: "#dcfce7", fg: "#15803d" },
  en_progreso: { label: "En progreso", bg: "#dbeafe", fg: "#1d4ed8" },
  sin_iniciar: { label: "Sin iniciar", bg: "#f5f5f4", fg: "#57534e" },
  por_verificar: { label: "Por verificar", bg: "#fef9c3", fg: "#a16207" },
  incumplida: { label: "Incumplida", bg: "#fee2e2", fg: "#b91c1c" },
  rota: { label: "Rota / abandonada", bg: "#fecaca", fg: "#7f1d1d" },
};

export function EstadoPromesaBadge({ estado }: { estado: EstadoPromesa }) {
  const l = LABELS[estado];
  return (
    <span
      className="chip px-2.5 py-1 text-xs"
      style={{ backgroundColor: l.bg, color: l.fg }}
    >
      {l.label}
    </span>
  );
}
