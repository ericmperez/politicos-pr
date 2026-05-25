"use client";

import { useState, useMemo } from "react";
import { PoliticoCard } from "./PoliticoCard";
import { ORDEN_PARTIDOS } from "@/lib/partidos";
import { PARTIDOS } from "@/lib/partidos";
import type { Politico, PartidoId, Cargo } from "@/lib/types";

const CARGOS: Cargo[] = [
  "Gobernador(a)",
  "Comisionado(a) Residente",
  "Senador(a)",
  "Representante",
  "Alcalde(sa)",
];

export function FiltrosPoliticos({ politicos }: { politicos: Politico[] }) {
  const [q, setQ] = useState("");
  const [partido, setPartido] = useState<PartidoId | "">("");
  const [cargo, setCargo] = useState<Cargo | "">("");

  const filtrados = useMemo(() => {
    return politicos.filter((p) => {
      if (partido && p.partido !== partido) return false;
      if (cargo && p.cargo !== cargo) return false;
      if (q) {
        const t = q.toLowerCase();
        const blob = `${p.nombre} ${p.cargo_detalle ?? ""} ${p.region ?? ""}`.toLowerCase();
        if (!blob.includes(t)) return false;
      }
      return true;
    });
  }, [politicos, q, partido, cargo]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 items-center">
        <input
          type="search"
          placeholder="Buscar por nombre o cargo…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="flex-1 min-w-[200px] px-3 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-sm"
        />
        <select
          value={partido}
          onChange={(e) => setPartido(e.target.value as PartidoId | "")}
          className="px-3 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-sm"
        >
          <option value="">Todos los partidos</option>
          {ORDEN_PARTIDOS.map((id) => (
            <option key={id} value={id}>
              {PARTIDOS[id].nombre}
            </option>
          ))}
        </select>
        <select
          value={cargo}
          onChange={(e) => setCargo(e.target.value as Cargo | "")}
          className="px-3 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-sm"
        >
          <option value="">Todos los cargos</option>
          {CARGOS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="text-xs text-[var(--muted-foreground)]">
        Mostrando {filtrados.length} de {politicos.length}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {filtrados.map((p) => (
          <PoliticoCard key={p.slug} p={p} />
        ))}
        {filtrados.length === 0 && (
          <div className="col-span-full text-center text-sm text-[var(--muted-foreground)] py-12">
            No hay resultados con esos filtros.
          </div>
        )}
      </div>
    </div>
  );
}
