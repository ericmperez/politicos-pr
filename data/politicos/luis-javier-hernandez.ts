import type { Politico } from "@/lib/types";

const HOY = "2026-05-25";

export const luisJavierHernandez: Politico = {
  slug: "luis-javier-hernandez-ortiz",
  nombre: "Luis Javier Hernández Ortiz",
  partido: "PPD",
  cargo: "Senador(a)",
  cargo_detalle: "Senador por Acumulación",
  inicio_termino: "2025-01-02",
  bio: "Senador por Acumulación del PPD desde enero de 2025 — fue el candidato a senador más votado de la papeleta popular. Anteriormente alcalde de Villalba (2013–2025). En 2023 fue candidato a la presidencia del PPD bajo el lema 'Nueva Ruta', perdiendo ante Jesús Manuel Ortiz.",
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
