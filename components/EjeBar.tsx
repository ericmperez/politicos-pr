import { EJES } from "@/lib/ejes";
import type { PuntajeEje } from "@/lib/types";
import { ConfianzaBadge } from "./ConfianzaBadge";

export function EjeBar({ puntaje }: { puntaje: PuntajeEje }) {
  const eje = EJES[puntaje.eje];
  const pct = puntaje.valor != null ? Math.round(puntaje.valor * 100) : null;
  return (
    <div className="py-3">
      <div className="flex items-center justify-between mb-1.5 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm font-semibold truncate">{eje.nombre}</span>
          <ConfianzaBadge nivel={puntaje.confianza} />
        </div>
        <span className="text-sm font-mono font-bold tabular-nums shrink-0">
          {pct == null ? "—" : `${pct}%`}
        </span>
      </div>
      <div className="eje-bar">
        <div
          className="eje-bar-fill"
          style={{ width: pct == null ? "4%" : `${pct}%`, opacity: pct == null ? 0.3 : 1 }}
        />
      </div>
      {puntaje.nota && (
        <div className="mt-1.5 text-xs text-[var(--muted-foreground)]">
          {puntaje.nota}
        </div>
      )}
    </div>
  );
}
