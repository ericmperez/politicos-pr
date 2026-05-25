import type { Politico } from "@/lib/types";

const HOY = "2026-05-25";

export const jesusManuelOrtiz: Politico = {
  slug: "jesus-manuel-ortiz-gonzalez",
  nombre: "Jesús Manuel Ortiz González",
  partido: "PPD",
  cargo: "Representante",
  cargo_detalle: "Representante por Acumulación",
  inicio_termino: "2017-01-02",
  bio: "Representante por Acumulación del PPD desde 2017. Fue presidente del Partido Popular Democrático (2023–enero 2025), tras vencer a Luis Javier Hernández. Candidato a la gobernación del PPD en 2024 con su programa 'Plan Fuerza de Futuro'. Renunció a la presidencia del PPD el 20 de enero de 2025; le sucedió Pablo José Hernández.",
  promesas: [
    {
      id: "jmo-energia-01",
      titulo: "Cancelar el contrato de LUMA Energy",
      descripcion:
        "Plan Fuerza de Futuro: cancelación inmediata del contrato de LUMA, control transicional, nuevo operador regionalizado y despolitizado.",
      fecha_promesa: "2024-09-01",
      estado: "incumplida",
      sector: "energia",
      fuentes: [
        {
          titulo: "Junta PPD avala plan de Ortiz para cancelar LUMA (El Vocero)",
          url: "https://www.elvocero.com/gobierno/junta-de-gobierno-del-ppd-avala-plan-de-jes-s-manuel-ortiz-para-cancelar-contrato/article_5d491a88-697a-11ef-a4ec-2371365bdc92.html",
          fecha: "2024-09-01",
          tipo: "prensa",
        },
        {
          titulo: "Plan Fuerza de Futuro (PPD oficial)",
          url: "https://www.ppdpr.net/plan-fuerza-de-futuro",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
      notas: "Marcada incumplida por derrota electoral. Promesa sigue activa como agenda PPD.",
    },
    {
      id: "jmo-salud-01",
      titulo: "Programa de cuidadores formales para 25,000 familias",
      descripcion:
        "Expansión del piloto actual de $9M a un programa anual de $225M para impactar 25,000 familias con cuidadores trabajando 4-5 días/semana.",
      fecha_promesa: "2024-09-01",
      estado: "incumplida",
      sector: "salud",
      fuentes: [
        {
          titulo: "Programa cuidadores 25,000 familias (El Nuevo Día)",
          url: "https://www.elnuevodia.com/noticias/politica/notas/candidato-a-la-gobernacion-del-ppd-propone-ampliar-el-programa-de-cuidadores-para-impactar-hasta-25000-familias/",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
    },
    {
      id: "jmo-anticorr-01",
      titulo: "Tolerancia Cero a la Corrupción",
      descripcion:
        "Sistema unificado anticorrupción y nuevo código que unifique las leyes para ejecución más efectiva. Plan presentado con Héctor Ferrer.",
      fecha_promesa: "2024-09-24",
      estado: "incumplida",
      sector: "transparencia",
      fuentes: [
        {
          titulo: "Plan anticorrupción Ortiz-Ferrer (oficial)",
          url: "https://jesusmanuelortiz.com/2024/09/24/jesus-manuel-ortiz-y-hector-ferrer-presentan-plan-anticorrupcion/",
          fecha: "2024-09-24",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
    },
    {
      id: "jmo-economia-01",
      titulo: "Permisos expeditos al momento del pedido",
      descripcion:
        "Permisos expeditos al momento del pedido para negocios en zonas calificadas. Reenfocar Código de Incentivos hacia vivienda, salud y manufactura.",
      fecha_promesa: "2024-09-01",
      estado: "incumplida",
      sector: "economia",
      fuentes: [
        {
          titulo: "Propuestas desarrollo económico (oficial)",
          url: "https://jesusmanuelortiz.com/propuestas/desarrollo-economico/",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
    },
  ],
  medidas: [],
  asistencia: {
    periodo: "Sesión 2025",
    votos_totales: 0,
    votos_presentes: 0,
    comisiones_totales: 0,
    comisiones_presentes: 0,
    fuentes: [
      { titulo: "Diario de Sesiones - Cámara PR", tipo: "oficial" },
    ],
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
  estado_dataset: "parcial",
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
