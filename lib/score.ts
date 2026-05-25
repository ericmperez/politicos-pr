import type { EstadoPromesa, Politico, PuntajeEje } from "./types";

const PESO_PROMESA: Record<EstadoPromesa, number> = {
  cumplida: 1.0,
  en_progreso: 0.5,
  sin_iniciar: 0.1,
  por_verificar: 0.0,
  incumplida: 0.0,
  rota: -0.25,
};

export function puntajePromesas(p: Politico): number | null {
  const verificadas = p.promesas.filter((pr) => pr.estado !== "por_verificar");
  if (verificadas.length === 0) return null;
  const suma = verificadas.reduce(
    (acc, pr) => acc + (PESO_PROMESA[pr.estado] ?? 0),
    0,
  );
  return Math.max(0, Math.min(1, suma / verificadas.length));
}

export function porcentajePromesasPorEstado(
  p: Politico,
): Record<EstadoPromesa, number> {
  const base: Record<EstadoPromesa, number> = {
    cumplida: 0,
    en_progreso: 0,
    sin_iniciar: 0,
    por_verificar: 0,
    incumplida: 0,
    rota: 0,
  };
  for (const pr of p.promesas) base[pr.estado]++;
  return base;
}

export function getPuntaje(p: Politico, ejeId: PuntajeEje["eje"]): PuntajeEje | undefined {
  return p.puntajes.find((pe) => pe.eje === ejeId);
}

export function evidenciasTotales(p: Politico): number {
  return p.puntajes.reduce((acc, pe) => acc + pe.n_evidencias, 0);
}
