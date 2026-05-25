import { PARTIDOS } from "@/lib/partidos";
import type { PartidoId } from "@/lib/types";

export function PartidoBadge({ id, size = "md" }: { id: PartidoId; size?: "sm" | "md" }) {
  const p = PARTIDOS[id];
  const pad = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs";
  return (
    <span
      className={`chip ${pad}`}
      style={{
        color: p.color,
        backgroundColor: p.color_fondo,
        borderColor: p.color,
      }}
      title={p.nombre}
    >
      {p.abreviatura}
    </span>
  );
}
