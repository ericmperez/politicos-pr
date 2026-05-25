import type { Politico } from "@/lib/types";

const HOY = "2026-05-25";

export const pabloJoseHernandez: Politico = {
  slug: "pablo-jose-hernandez-rivera",
  nombre: "Pablo José Hernández Rivera",
  partido: "PPD",
  cargo: "Comisionado(a) Residente",
  cargo_detalle: "Comisionado Residente en Washington · Presidente del PPD",
  inicio_termino: "2025-01-03",
  fin_termino: "2029-01-03",
  bio: "Comisionado Residente de Puerto Rico en Washington desde el 3 de enero de 2025 por el PPD (caucus demócrata, New Democrat Coalition y Congressional Hispanic Caucus). Es el más joven en ocupar el cargo. En febrero de 2025 asumió la presidencia del PPD tras la renuncia de Jesús Manuel Ortiz.",
  redes: { web: "https://hernandez.house.gov" },
  promesas: [
    {
      id: "pjh-salud-01",
      titulo: "Buscar paridad de Medicaid y Medicare con los estados",
      descripcion:
        "Prioridad central de campaña: igualar Medicare, Medicaid, SNAP y SSI con los estados. 'Antes tenemos que atender la disparidad de Medicaid'.",
      fecha_promesa: "2024-10-07",
      estado: "en_progreso",
      sector: "salud",
      fuentes: [
        {
          titulo: "Debate de comisionado residente (El Vocero)",
          url: "https://www.elvocero.com/decision_2024/as-transcurri-el-debate-de-los-candidatos-a-la-comisar-a-residente/article_ee4813d8-8697-11ef-9dce-7bc4da33f4ed.html",
          fecha: "2024-10-07",
          tipo: "prensa",
        },
        {
          titulo: "Propuestas - sitio oficial de campaña",
          url: "https://pablojosehr.com/propuestas/",
          fecha: "2024-09-01",
          tipo: "oficial",
        },
        {
          titulo: "Hernández reclama transparencia Medicaid (El Nuevo Día)",
          url: "https://www.elnuevodia.com/corresponsalias/washington-dc/notas/pablo-jose-hernandez-reclama-transparencia-sobre-medicaid-y-presiona-en-torno-a-medicare-advantage/",
          fecha: "2025-11-29",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia:
        "Radicó H.R. 6031 (Medicare Advantage Integrity Act) con María Elvira Salazar el 14 nov 2025; aseguró que la 'Big Beautiful Bill' no incluyó cortes a Medicaid PR.",
      notas: "Paridad SNAP avanza vía H.R. 5168; paridad Medicaid sigue pendiente.",
    },
    {
      id: "pjh-estatus-01",
      titulo: "Poner el debate de estatus a un lado en Washington",
      descripcion:
        "Prometió no priorizar plebiscitos en Washington y dedicar su tiempo a temas económicos, costo de vida, reconstrucción y red eléctrica.",
      fecha_promesa: "2024-11-26",
      estado: "cumplida",
      sector: "otros",
      fuentes: [
        {
          titulo: "Columna en The Hill: 'we should put statehood aside'",
          url: "https://thehill.com/opinion/congress-blog/5005753-pablo-hernandez-rivera-puerto-rico/",
          fecha: "2024-11-26",
          tipo: "oficial",
        },
        {
          titulo: "Hernández insiste discusiones de estatus son estériles (NotiCel)",
          url: "https://www.noticel.com/ahora/20250725/pablo-jose-hernandez-insiste-las-discusiones-del-estatus-son-esteriles/",
          fecha: "2025-07-25",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia:
        "Columna pública en The Hill y declaraciones reiteradas en 2025. Ha rechazado liderar gestión por estadidad pese a presión del PNP.",
      notas: "Posición polémica internamente.",
    },
    {
      id: "pjh-social-01",
      titulo: "Transición de PAN a SNAP para Puerto Rico",
      descripcion:
        "Prometió mejorar el PAN y trabajar la transición a SNAP para aumentar fondos federales.",
      fecha_promesa: "2024-09-01",
      estado: "en_progreso",
      sector: "social",
      fuentes: [
        {
          titulo: "Comisionado lidera esfuerzo bipartita por SNAP (oficial)",
          url: "https://hernandez.house.gov/media/press-releases/comisionado-residente-lidera-esfuerzo-bipartita-por-snap-para-puerto-rico",
          fecha: "2025-09-08",
          tipo: "oficial",
        },
        {
          titulo: "Resident Commissioner pushes SNAP transition (News is My Business)",
          url: "https://newsismybusiness.com/resident-commissioner-pushes-snap-transition-in-puerto-rico/",
          fecha: "2025-09-09",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia:
        "Radicó H.R. 5168 (Puerto Rico Nutrition Assistance Fairness Act) el 8 sep 2025 con +20 co-auspiciadores bipartitas. Carta del 22 ene 2026 pidiendo inclusión en Farm Bill.",
    },
    {
      id: "pjh-economia-01",
      titulo: "Reducir el costo de vida",
      descripcion:
        "Plataforma centrada en bajar costo de vida: incentivos solares, net metering, vivienda asequible, reducción de aranceles.",
      fecha_promesa: "2024-09-01",
      estado: "en_progreso",
      sector: "economia",
      fuentes: [
        {
          titulo: "Propuestas - sitio oficial",
          url: "https://pablojosehr.com/propuestas/",
          fecha: "2024-09-01",
          tipo: "oficial",
        },
        {
          titulo: "Comisionado lidera esfuerzo demócrata costo de vida (oficial)",
          url: "https://hernandez.house.gov/media/press-releases/comisionado-residente-lidera-esfuerzo-democrata-para-reducir-el-costo-de-vida",
          fecha: "2026-03-01",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
      evidencia:
        "Lideró conferencia New Democrat Coalition 'Affordability Agenda'. Radicó H.R. 1696 (Low-Income Housing).",
    },
    {
      id: "pjh-energia-01",
      titulo: "Acelerar reconstrucción post-María/Fiona y salida de LUMA",
      descripcion:
        "Prometió apoyar la salida de LUMA y acelerar desembolso de fondos federales de recuperación.",
      fecha_promesa: "2024-10-07",
      estado: "en_progreso",
      sector: "energia",
      fuentes: [
        {
          titulo: "Debate comisionado residente (El Vocero)",
          url: "https://www.elvocero.com/decision_2024/as-transcurri-el-debate-de-los-candidatos-a-la-comisar-a-residente/article_ee4813d8-8697-11ef-9dce-7bc4da33f4ed.html",
          fecha: "2024-10-07",
          tipo: "prensa",
        },
        {
          titulo: "PR Energy Generation Crisis Task Force Act (oficial)",
          url: "https://hernandez.house.gov/media/press-releases/hernandez-introduces-puerto-rico-energy-generation-crisis-task-force-act",
          fecha: "2025-04-08",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
      evidencia:
        "Radicó H.R. 2714 (Task Force) y H.R. 5432 (LUMA/Genera Oversight). Anunció obligaciones FEMA por $29.6M, $32.9M, $39M.",
    },
    {
      id: "pjh-educacion-01",
      titulo: "Aliviar deuda estudiantil y abaratar educación superior",
      descripcion:
        "Aumentar Beca Pell ajustada por inflación, calificación automática vía Medicaid, extender de 12 a 18 semestres, reducir PSLF de 120 a 96 meses.",
      fecha_promesa: "2024-08-04",
      estado: "sin_iniciar",
      sector: "educacion",
      fuentes: [
        {
          titulo: "Propuestas deuda estudiantil (NotiCel)",
          url: "https://www.noticel.com/elecciones/economia/politica/20240804/pablo-jose-hernandez-presenta-propuestas-para-abordar-la-deuda-estudiantil-en-puerto-rico/",
          fecha: "2024-08-04",
          tipo: "prensa",
        },
        {
          titulo: "Propuestas - sitio oficial",
          url: "https://pablojosehr.com/propuestas/",
          tipo: "oficial",
        },
      ],
      confianza: "media",
      evidencia:
        "No se identificó proyecto de ley radicado específicamente para estas propuestas educativas al cierre de mayo 2026.",
    },
  ],
  medidas: [
    {
      id: "pjh-hr-2261",
      numero: "H.R. 2261",
      titulo: "Strengthening Oversight of DHS Intelligence Act",
      fecha: "2025-03-21",
      estado: "aprobada_camara",
      rol: "autor",
      sector: "seguridad",
      fuentes: [
        {
          titulo: "H.R. 2261 (Congress.gov)",
          url: "https://www.congress.gov/bill/119th-congress/house-bill/2261",
          fecha: "2025-03-21",
          tipo: "oficial",
        },
        {
          titulo: "Primera medida aprobada en Comisión (oficial)",
          url: "https://hernandez.house.gov/media/press-releases/rep-hernandez-secures-first-committee-passage-legislation-congress",
          fecha: "2025-05-01",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-2714",
      numero: "H.R. 2714",
      titulo: "Puerto Rico Energy Generation Crisis Task Force Act",
      fecha: "2025-04-08",
      estado: "radicada",
      rol: "autor",
      sector: "energia",
      fuentes: [
        {
          titulo: "H.R. 2714 (Congress.gov)",
          url: "https://www.congress.gov/bill/119th-congress/house-bill/2714/text",
          fecha: "2025-04-08",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-5432",
      numero: "H.R. 5432",
      titulo: "Puerto Rico Energy Oversight and Accountability Act (estudio GAO sobre LUMA y Genera PR)",
      fecha: "2025-09-17",
      estado: "radicada",
      rol: "autor",
      sector: "energia",
      fuentes: [
        {
          titulo: "H.R. 5432 (Congress.gov)",
          url: "https://www.congress.gov/bill/119th-congress/house-bill/5432/text",
          fecha: "2025-09-17",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-5168",
      numero: "H.R. 5168",
      titulo: "Puerto Rico Nutrition Assistance Fairness Act (PAN → SNAP)",
      fecha: "2025-09-08",
      estado: "radicada",
      rol: "autor",
      sector: "social",
      fuentes: [
        {
          titulo: "H.R. 5168 (Congress.gov)",
          url: "https://www.congress.gov/bill/119th-congress/house-bill/5168",
          fecha: "2025-09-08",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-1696",
      numero: "H.R. 1696",
      titulo: "Puerto Rico Low-Income Housing Support Act",
      fecha: "2025-02-27",
      estado: "radicada",
      rol: "autor",
      sector: "vivienda",
      fuentes: [
        {
          titulo: "H.R. 1696 (Congress.gov)",
          url: "https://www.congress.gov/bill/119th-congress/house-bill/1696/text",
          fecha: "2025-02-27",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-3814",
      numero: "H.R. 3814",
      titulo: "Puerto Rico BEACHES Act (estudio GAO sobre erosión costera)",
      fecha: "2025-06-06",
      estado: "radicada",
      rol: "autor",
      sector: "ambiente",
      fuentes: [
        {
          titulo: "H.R. 3814 (Congress.gov)",
          url: "https://www.congress.gov/bill/119th-congress/house-bill/3814/text",
          fecha: "2025-06-06",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-6031",
      numero: "H.R. 6031",
      titulo: "Medicare Advantage Integrity Act (igualar pagos MA Puerto Rico vs. estados)",
      fecha: "2025-11-14",
      estado: "radicada",
      rol: "autor",
      sector: "salud",
      fuentes: [
        {
          titulo: "Proyecto Medicare Advantage (oficial)",
          url: "https://hernandez.house.gov/media/press-releases/comisionado-resdiente-presenta-proyecto-para-mejorar-medicare-advantage",
          fecha: "2025-11-14",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-7397",
      numero: "H.R. 7397",
      titulo: "Puerto Rico Water Infrastructure Resilience Act",
      fecha: "2026-02-05",
      estado: "radicada",
      rol: "autor",
      sector: "infraestructura",
      fuentes: [
        {
          titulo: "H.R. 7397 (Congress.gov)",
          url: "https://www.congress.gov/bill/119th-congress/house-bill/7397/text",
          fecha: "2026-02-05",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-hr-6441",
      numero: "H.R. 6441",
      titulo: "Puerto Rico Postal Equity Act of 2025",
      fecha: "2025-12-04",
      estado: "radicada",
      rol: "autor",
      sector: "infraestructura",
      fuentes: [
        {
          titulo: "Perfil Pablo Hernández (Congress.gov)",
          url: "https://www.congress.gov/member/pablo-hernandez/H001103",
          fecha: "2025-12-04",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "pjh-rum-coverover",
      numero: "Rum Cover-Over (enmienda en H.R. 1)",
      titulo: "Inclusión permanente del rebate de arbitrios al ron ($13.50/galón) para PR y USVI",
      fecha: "2025-07-03",
      estado: "ley",
      rol: "co_autor",
      sector: "economia",
      fuentes: [
        {
          titulo: "Statement on Senate Approval of Rum Cover-Over (oficial)",
          url: "https://hernandez.house.gov/media/press-releases/statement-resident-commissioner-pablo-jose-hernandez-senate-approval-permanent",
          fecha: "2025-07-01",
          tipo: "oficial",
        },
      ],
    },
  ],
  transparencia: {
    disclosures_a_tiempo: true,
    participa_datos_abiertos: false,
    casos: [],
    fuentes: [
      { titulo: "House Ethics Committee", tipo: "oficial" },
    ],
  },
  impactos: [],
  coherencia: [],
  puntajes: [
    {
      eje: "promesas",
      valor: 0.6,
      confianza: "alta",
      n_evidencias: 6,
      ultima_actualizacion: HOY,
      nota: "1 cumplida, 4 en progreso, 1 sin iniciar.",
    },
    {
      eje: "productividad",
      valor: null,
      confianza: "alta",
      n_evidencias: 10,
      ultima_actualizacion: HOY,
      nota: "10 medidas autoría/co-autoría con citas oficiales de Congress.gov.",
    },
    {
      eje: "asistencia",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
      nota: "El Comisionado Residente no vota en pleno, sólo en comisiones.",
    },
    {
      eje: "transparencia",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
    },
    {
      eje: "fiscal",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
    },
    {
      eje: "constituyente",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
    },
    {
      eje: "impacto",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
    },
    {
      eje: "coherencia",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
    },
    {
      eje: "sentimiento",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
    },
  ],
  ultima_actualizacion: HOY,
  estado_dataset: "parcial",
};
