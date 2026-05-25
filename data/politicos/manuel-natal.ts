import type { Politico } from "@/lib/types";

const HOY = "2026-05-25";

export const manuelNatal: Politico = {
  slug: "manuel-natal-albelo",
  nombre: "Manuel Natal Albelo",
  partido: "MVC",
  cargo: "Otro",
  cargo_detalle: "Líder del Movimiento Victoria Ciudadana",
  bio: "Abogado y figura prominente del Movimiento Victoria Ciudadana. Ex-Representante por Acumulación (2017–2021). Candidato a Alcalde de San Juan en 2020 y 2024; perdió ambas contiendas. En 2025 no ocupa cargo electo y ejerce liderazgo del MVC.",
  promesas: [],
  medidas: [],
  transparencia: {
    disclosures_a_tiempo: true,
    participa_datos_abiertos: false,
    casos: [],
    fuentes: [{ titulo: "OEG", tipo: "oficial" }],
  },
  impactos: [],
  coherencia: [],
  puntajes: defaultPuntajes(HOY),
  ultima_actualizacion: HOY,
  estado_dataset: "demo",
};

function defaultPuntajes(fecha: string): Politico["puntajes"] {
  return (
    [
      "promesas",
      "productividad",
      "asistencia",
      "transparencia",
      "fiscal",
      "constituyente",
      "impacto",
      "coherencia",
      "sentimiento",
    ] as const
  ).map((eje) => ({
    eje,
    valor: null,
    confianza: "no_verificado" as const,
    n_evidencias: 0,
    ultima_actualizacion: fecha,
  }));
}
