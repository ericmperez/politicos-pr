import type { Politico } from "@/lib/types";

const HOY = "2026-05-25";

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

export const thomasRiveraSchatz: Politico = {
  slug: "thomas-rivera-schatz",
  nombre: "Thomas Rivera Schatz",
  partido: "PNP",
  cargo: "Senador(a)",
  cargo_detalle: "Presidente del Senado",
  inicio_termino: "2025-01-02",
  bio: "Abogado. Presidente del Senado de Puerto Rico desde enero de 2025, cargo que también ocupó en cuatrienios anteriores.",
  promesas: [],
  medidas: [],
  asistencia: {
    periodo: "Sesión 2025",
    votos_totales: 0,
    votos_presentes: 0,
    comisiones_totales: 0,
    comisiones_presentes: 0,
    fuentes: [{ titulo: "Diario de Sesiones - Senado PR", tipo: "oficial" }],
  },
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

export const carlosMendez: Politico = {
  slug: "carlos-johnny-mendez-nunez",
  nombre: 'Carlos "Johnny" Méndez Núñez',
  partido: "PNP",
  cargo: "Representante",
  cargo_detalle: "Presidente de la Cámara de Representantes",
  inicio_termino: "2025-01-02",
  bio: "Abogado. Presidente de la Cámara de Representantes de Puerto Rico desde enero de 2025; también ocupó el cargo en el cuatrienio 2017-2021.",
  promesas: [],
  medidas: [],
  asistencia: {
    periodo: "Sesión 2025",
    votos_totales: 0,
    votos_presentes: 0,
    comisiones_totales: 0,
    comisiones_presentes: 0,
    fuentes: [{ titulo: "Diario de Sesiones - Cámara PR", tipo: "oficial" }],
  },
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

export const miguelRomero: Politico = {
  slug: "miguel-romero-lugo",
  nombre: "Miguel Romero Lugo",
  partido: "PNP",
  cargo: "Alcalde(sa)",
  cargo_detalle: "Alcalde de San Juan",
  region: "Región Capital",
  inicio_termino: "2021-01-11",
  bio: "Abogado. Alcalde de San Juan desde enero de 2021. Reelecto en 2024 frente a Manuel Natal (MVC).",
  promesas: [],
  medidas: [],
  transparencia: {
    disclosures_a_tiempo: true,
    participa_datos_abiertos: false,
    casos: [],
    fuentes: [{ titulo: "OEG", tipo: "oficial" }],
  },
  fiscal: {
    periodo: "FY 2025-2026",
    fuentes: [{ titulo: "OCAM", tipo: "oficial" }],
  },
  servicio: {
    notas: "Por verificar con la Oficina del Alcalde.",
    fuentes: [{ titulo: "Municipio de San Juan", tipo: "oficial" }],
  },
  impactos: [],
  coherencia: [],
  puntajes: defaultPuntajes(HOY),
  ultima_actualizacion: HOY,
  estado_dataset: "demo",
};
