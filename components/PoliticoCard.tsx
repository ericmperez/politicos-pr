import Link from "next/link";
import type { Politico } from "@/lib/types";
import { PartidoBadge } from "./PartidoBadge";
import { MiniRadar } from "./MiniRadar";

export function PoliticoCard({ p }: { p: Politico }) {
  const evidencias = p.puntajes.reduce((a, x) => a + x.n_evidencias, 0);
  const demo = p.estado_dataset === "demo";

  return (
    <Link href={`/politicos/${p.slug}`} className="block">
      <article className="card card-hover p-4 sm:p-5 h-full flex gap-4">
        <div className="flex-1 min-w-0">
          <header className="flex items-start gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold leading-tight truncate">{p.nombre}</h3>
              <div className="text-xs text-[var(--muted-foreground)] truncate">
                {p.cargo_detalle ?? p.cargo}
              </div>
            </div>
            <PartidoBadge id={p.partido} size="sm" />
          </header>
          <div className="text-xs text-[var(--muted-foreground)] line-clamp-2 mb-3">
            {p.bio}
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-[var(--muted-foreground)]">
              {p.promesas.length} promesa{p.promesas.length === 1 ? "" : "s"}
            </span>
            <span className="text-[var(--muted-foreground)]">·</span>
            <span className="text-[var(--muted-foreground)]">
              {p.medidas.length} medida{p.medidas.length === 1 ? "" : "s"}
            </span>
            <span className="text-[var(--muted-foreground)]">·</span>
            <span className="text-[var(--muted-foreground)]">
              {evidencias} evidencia{evidencias === 1 ? "" : "s"}
            </span>
          </div>
          {demo && (
            <div className="mt-3 inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
              Datos demo · sin verificar
            </div>
          )}
        </div>
        <div className="hidden sm:block shrink-0">
          <MiniRadar puntajes={p.puntajes} size={120} />
        </div>
      </article>
    </Link>
  );
}
