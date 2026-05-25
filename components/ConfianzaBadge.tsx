import type { NivelConfianza } from "@/lib/types";

const LABELS: Record<NivelConfianza, { label: string; bg: string; fg: string }> = {
  alta: { label: "Alta confianza", bg: "#dcfce7", fg: "#15803d" },
  media: { label: "Confianza media", bg: "#fef9c3", fg: "#a16207" },
  baja: { label: "Baja confianza", bg: "#fee2e2", fg: "#b91c1c" },
  no_verificado: { label: "Sin verificar", bg: "#f5f5f4", fg: "#57534e" },
};

export function ConfianzaBadge({ nivel }: { nivel: NivelConfianza }) {
  const l = LABELS[nivel];
  return (
    <span
      className="chip px-2 py-0.5 text-[10px]"
      style={{ backgroundColor: l.bg, color: l.fg }}
    >
      {l.label}
    </span>
  );
}
