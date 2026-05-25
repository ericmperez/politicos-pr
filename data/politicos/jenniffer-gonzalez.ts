import type { Politico } from "@/lib/types";

const HOY = "2026-05-25";

export const jennifferGonzalez: Politico = {
  slug: "jenniffer-gonzalez-colon",
  nombre: "Jenniffer González-Colón",
  partido: "PNP",
  cargo: "Gobernador(a)",
  cargo_detalle: "Gobernadora de Puerto Rico",
  inicio_termino: "2025-01-02",
  fin_termino: "2029-01-02",
  bio: "Primera mujer electa por el PNP a la gobernación de Puerto Rico. Tomó posesión el 2 de enero de 2025 tras ganar con 39.54% de los votos en las elecciones de noviembre de 2024. Previamente sirvió como Comisionada Residente en Washington (2017-2025).",
  redes: { web: "https://fortaleza.pr.gov" },
  promesas: [
    {
      id: "jgc-energia-01",
      titulo: "Cancelar el contrato de LUMA Energy en los primeros 100 días",
      descripcion:
        "Como candidata prometió iniciar el proceso de cancelación del contrato de LUMA en los primeros 100 días y crear un 'zar de energía' para documentar incumplimientos.",
      fecha_promesa: "2024-09-15",
      estado: "en_progreso",
      sector: "energia",
      fuentes: [
        {
          titulo: "Repaso de promesas de Jenniffer González (Metro PR)",
          url: "https://www.metro.pr/noticias/2024/11/06/repaso-de-las-promesas-que-jenniffer-gonzalez-asegura-cumplir-en-su-cuatrienio/",
          fecha: "2024-11-06",
          tipo: "prensa",
        },
        {
          titulo: "Gobierno radica demanda para anular contrato de LUMA (Metro)",
          url: "https://www.metro.pr/noticias/2025/12/11/gobierno-radica-demanda-para-que-se-declare-nulo-el-contrato-de-luma/",
          fecha: "2025-12-11",
          tipo: "prensa",
        },
        {
          titulo: "Segunda demanda para anular contrato de LUMA (El Nuevo Día)",
          url: "https://www.elnuevodia.com/noticias/gobierno/notas/jenniffer-gonzalez-acude-al-tribunal-con-segunda-demanda-para-anular-contrato-de-luma-energy/",
          fecha: "2025-12-16",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia:
        "La primera demanda se radicó el 11 de diciembre de 2025 (día 343 de gobierno) y la segunda el 16 de diciembre de 2025. La promesa de 100 días no se cumplió en plazo, pero la acción se inició dentro del primer año. La jueza Laura Taylor Swain paralizó temporalmente las demandas.",
      notas:
        "Promesa rota en plazo, en progreso en sustancia.",
    },
    {
      id: "jgc-energia-02",
      titulo: "Crear la figura del 'Zar de Energía'",
      descripcion:
        "Prometió crear una oficina con un 'zar de energía' para supervisar a LUMA y AEE y coordinar con agencias federales.",
      fecha_promesa: "2024-09-15",
      estado: "cumplida",
      sector: "energia",
      fuentes: [
        {
          titulo: "Nombran al Zar de Energía (Fortaleza)",
          url: "https://www.fortaleza.pr.gov/prensa/nombran-al-zar-de-energia-secretario-de-correccion-y-otros-jefes-de-agencia",
          fecha: "2025-01-08",
          tipo: "oficial",
        },
        {
          titulo: "OE para crear la Oficina del Zar de Energía (Primera Hora)",
          url: "https://www.primerahora.com/noticias/gobierno-politica/notas/jenniffer-gonzalez-firma-orden-ejecutiva-para-crear-la-oficina-del-zar-de-energia/amp/",
          fecha: "2025-01-10",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia:
        "OE de enero 10, 2025 creó la Oficina del Zar de Energía. Josué Colón designado el 8 de enero de 2025.",
    },
    {
      id: "jgc-economia-01",
      titulo: "Reforma contributiva con alivio a la clase trabajadora",
      descripcion:
        "Prometió una reforma contributiva con alivio a la clase trabajadora, incluyendo reducción del IVU.",
      fecha_promesa: "2024-09-15",
      estado: "en_progreso",
      sector: "economia",
      fuentes: [
        {
          titulo: "Jenniffer González asegura que bajará el IVU (Metro)",
          url: "https://www.metro.pr/noticias/2024/09/15/jennifer-gonzalez-asegura-que-bajara-el-ivu/",
          fecha: "2024-09-15",
          tipo: "prensa",
        },
        {
          titulo: "Gobernadora firma cuatro nuevas leyes de la Reforma Contributiva (AAFAF)",
          url: "https://aafaf.pr.gov/aafafinthenews/gobernadora-firma-cuatro-nuevas-leyes-de-la-reforma-contributiva",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
      evidencia:
        "Primera fase firmada en 2025: exención de IVU en medicamentos recetados, cobro municipal del IVU vía SURI, incentivos al ahorro y deducciones por aportaciones a IRA. Reducción general del IVU pendiente.",
      notas: "Parcialmente cumplida. Reducción amplia del IVU sigue sin aprobarse.",
    },
    {
      id: "jgc-economia-02",
      titulo: "Cheque de alivio contributivo",
      descripcion: "Prometió devolver dinero a contribuyentes mediante cheques de alivio.",
      fecha_promesa: "2024-10-01",
      estado: "cumplida",
      sector: "economia",
      fuentes: [
        {
          titulo: "Ya es ley el cheque de alivio contributivo (Microjuris)",
          url: "https://aldia.microjuris.com/2026/02/03/ya-es-ley-el-cheque-de-alivio-contributivo/",
          fecha: "2026-02-03",
          tipo: "prensa",
        },
        {
          titulo: "Cheques de Alivio: requisitos y pagos (Telemundo)",
          url: "https://www.telemundopr.com/noticias/puerto-rico/cheques-de-alivio-conoce-los-requisitos-y-como-seran-los-pagos/2784676/",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia:
        "Resolución Conjunta 6 asignó $554M del Fondo General a Hacienda para cheques. Requisitos: planilla 2025, residencia 2025, ingreso ≤$150,000.",
      notas: "Aprobada por ley; sujeta a aval de la JSF.",
    },
    {
      id: "jgc-permisos-01",
      titulo: "Sistema de permisos ágil y reducción de burocracia",
      descripcion:
        "Plataforma Acción PR: permisos ágiles para reducir trabas a construcción, vivienda y negocios.",
      fecha_promesa: "2024-05-01",
      estado: "en_progreso",
      sector: "infraestructura",
      fuentes: [
        {
          titulo: "Primeras OE atienden permisos (Metro)",
          url: "https://www.metro.pr/noticias/2025/01/03/primeras-ordenes-ejecutivas-de-jenniffer-gonzalez-atienden-la-crisis-energetica-infraestructura-y-permisos/",
          fecha: "2025-01-03",
          tipo: "prensa",
        },
        {
          titulo: "Segundo Mensaje de Situación de Estado (El Nuevo Día)",
          url: "https://www.elnuevodia.com/noticias/gobierno/notas/lee-el-segundo-mensaje-de-situacion-de-estado-de-jenniffer-gonzalez/",
          fecha: "2026-05-21",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia:
        "OE-2025-002 y OE-2025-003 firmadas el 3 de enero. Tiempos de espera reportados bajaron de 82 a 11 días para permisos sencillos y de 97 a 29 días para permisos de construcción (datos del propio ejecutivo, no verificados independientemente).",
    },
    {
      id: "jgc-salud-01",
      titulo: "Fortalecer Plan Vital y asegurar financiamiento federal",
      descripcion:
        "Prometió garantizar financiamiento del Plan Vital, ampliar beneficios y gestionar paridad federal.",
      fecha_promesa: "2024-10-14",
      estado: "en_progreso",
      sector: "salud",
      fuentes: [
        {
          titulo: "Propuesta tarjeta de salud (Metro)",
          url: "https://www.metro.pr/noticias/2024/10/14/jenniffer-gonzalez-presenta-su-propuesta-para-reforzar-la-tarjeta-de-salud/",
          fecha: "2024-10-14",
          tipo: "prensa",
        },
        {
          titulo: "Acciones para cuidadores de adultos mayores (Salud.pr.gov)",
          url: "https://www.salud.pr.gov/CMS/669",
          tipo: "oficial",
        },
      ],
      confianza: "media",
      evidencia:
        "$20M en presupuesto 2026-2027 para Home Health Aides. Gestiones federales en curso. Sin paridad Medicaid federal lograda.",
    },
    {
      id: "jgc-anticorrupcion-01",
      titulo: "Capacitación obligatoria anti-corrupción",
      descripcion:
        "En debate 2024 prometió: 'Voy a hacer capacitación a todos los funcionarios que tengan interés en los recursos públicos'.",
      fecha_promesa: "2024-10-01",
      estado: "por_verificar",
      sector: "transparencia",
      fuentes: [
        {
          titulo: "[Fact-check CPI] Jenniffer González sobre corrupción",
          url: "https://periodismoinvestigativo.com/2024/10/chequeo-jenniffer-gonzalez-corrupcion-capacitacion-funcionarios-publicos/",
          fecha: "2024-10-01",
          tipo: "prensa",
        },
      ],
      confianza: "media",
      evidencia:
        "CPI marcó la promesa como 'engañosa' porque la ley ya exige ese tipo de capacitación. No hay programa nuevo verificable.",
    },
    {
      id: "jgc-transparencia-01",
      titulo: "Mantener la Ley de Transparencia",
      descripcion:
        "Promesa implícita de gobierno transparente. En 2025 promovió enmiendas a la Ley de Transparencia que el CPI calificó como basadas en premisas falsas.",
      fecha_promesa: "2024-10-01",
      estado: "incumplida",
      sector: "transparencia",
      fuentes: [
        {
          titulo: "[Fact-check CPI] False premises Transparency Act",
          url: "https://periodismoinvestigativo.com/2025/12/fact-check-false-premises-transparency/",
          fecha: "2025-12-01",
          tipo: "prensa",
        },
      ],
      confianza: "media",
      evidencia:
        "CPI documentó que la justificación oficial para enmendar la Ley de Transparencia carecía de datos. Tendencia regresiva.",
    },
  ],
  medidas: [
    {
      id: "jgc-oe-01",
      numero: "OE-2025-002",
      titulo: "Grupo de Trabajo para Simplificación de Permisos",
      fecha: "2025-01-03",
      estado: "ley",
      rol: "autor",
      sector: "infraestructura",
      fuentes: [
        {
          titulo: "OE 2025-002 PDF",
          url: "https://docs.pr.gov/files/Estado/OrdenesEjecutivas/2025/OE%202025-002.pdf",
          fecha: "2025-01-03",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "jgc-oe-02",
      numero: "OE-2025-003",
      titulo: "Permisos expeditos para proyectos con fondos federales",
      fecha: "2025-01-03",
      estado: "ley",
      rol: "autor",
      sector: "infraestructura",
      fuentes: [
        {
          titulo: "OE-2025-003 (NotiCel)",
          url: "https://www.noticel.com/gobierno/ahora/20250103/jenniffer-gonzalez-firma-ordenes-ejecutivas-para-agilizar-los-procesos-de-permisos/",
          fecha: "2025-01-03",
          tipo: "prensa",
        },
      ],
    },
    {
      id: "jgc-oe-03",
      numero: "OE-2025-004",
      titulo: "Estado de emergencia por infraestructura vial",
      fecha: "2025-01-03",
      estado: "ley",
      rol: "autor",
      sector: "infraestructura",
      fuentes: [
        {
          titulo: "Primeras OE de Jenniffer González (Metro)",
          url: "https://www.metro.pr/noticias/2025/01/03/primeras-ordenes-ejecutivas-de-jenniffer-gonzalez-atienden-la-crisis-energetica-infraestructura-y-permisos/",
          fecha: "2025-01-03",
          tipo: "prensa",
        },
      ],
    },
    {
      id: "jgc-oe-04",
      numero: "OE-2025-006",
      titulo: "Oficina del Zar de Energía y Comité de Transformación Energética",
      fecha: "2025-01-10",
      estado: "ley",
      rol: "autor",
      sector: "energia",
      fuentes: [
        {
          titulo: "Gobernadora firma órdenes y reúne FEMA (Fortaleza)",
          url: "https://www.fortaleza.pr.gov/prensa/gobernadora-firma-ordenes-ejecutivas-y-reune-a-fema-para-acciones-ante-la-crisis-energetica",
          fecha: "2025-01-10",
          tipo: "oficial",
        },
      ],
    },
    {
      id: "jgc-rc-01",
      numero: "RC 6-2025",
      titulo: "Resolución Conjunta de Cheque de Alivio Contributivo ($554M)",
      fecha: "2025-06-01",
      estado: "ley",
      rol: "autor",
      sector: "economia",
      fuentes: [
        {
          titulo: "Cheque de alivio firmado por gobernadora (El Nuevo Día)",
          url: "https://www.elnuevodia.com/noticias/gobierno/notas/jenniffer-gonzalez-convierte-en-ley-resolucion-de-alivio-contributivo-pero-la-jsf-aun-no-ha-dado-su-aval/",
          tipo: "prensa",
        },
      ],
    },
    {
      id: "jgc-ley-01",
      numero: "Ley 164-2025",
      titulo: "Enmienda Código Municipal: 12 días de licencia para legisladores municipales",
      fecha: "2025-07-09",
      estado: "ley",
      rol: "autor",
      sector: "otros",
      fuentes: [
        {
          titulo: "Doce medidas convertidas en ley (Metro)",
          url: "https://www.metro.pr/noticias/2025/07/09/estas-son-las-doce-medidas-que-la-gobernadora-jenniffer-gonzalez-convirtio-en-ley/",
          fecha: "2025-07-09",
          tipo: "prensa",
        },
      ],
    },
    {
      id: "jgc-veto-01",
      numero: "Veto PC 243",
      titulo: "Veto a Proyecto Cámara 243 (corredor gastronómico)",
      fecha: "2025-07-09",
      estado: "vetada",
      rol: "autor",
      sector: "economia",
      fuentes: [
        {
          titulo: "Medidas y vetos (Metro)",
          url: "https://www.metro.pr/noticias/2025/07/09/estas-son-las-doce-medidas-que-la-gobernadora-jenniffer-gonzalez-convirtio-en-ley/",
          fecha: "2025-07-09",
          tipo: "prensa",
        },
      ],
    },
    {
      id: "jgc-veto-02",
      numero: "Veto PS 471",
      titulo: "Veto a Proyecto Senado 471 (registro trastornos sanguíneos)",
      fecha: "2025-07-09",
      estado: "vetada",
      rol: "autor",
      sector: "salud",
      fuentes: [
        {
          titulo: "Medidas y vetos (Metro)",
          url: "https://www.metro.pr/noticias/2025/07/09/estas-son-las-doce-medidas-que-la-gobernadora-jenniffer-gonzalez-convirtio-en-ley/",
          fecha: "2025-07-09",
          tipo: "prensa",
        },
      ],
    },
  ],
  transparencia: {
    disclosures_a_tiempo: false,
    ultima_disclosure: "2025-05-02",
    participa_datos_abiertos: false,
    casos: [
      {
        id: "jgc-caso-01",
        agencia: "Federal",
        titulo: "Investigación FBI sobre propiedad de familia",
        fecha_apertura: "2025-10-23",
        estado: "abierto",
        resumen:
          "Orden judicial revela investigación del FBI sobre propiedad de la familia de la gobernadora. La Fiscalía federal aclaró que la gobernadora no es objeto de la investigación.",
        fuentes: [
          {
            titulo: "Orden judicial revela investigación FBI (El Nuevo Día)",
            url: "https://www.elnuevodia.com/noticias/tribunales/notas/orden-judicial-revela-investigacion-del-fbi-sobre-propiedad-de-familia-de-jenniffer-gonzalez/",
            fecha: "2025-10-23",
            tipo: "prensa",
          },
        ],
      },
      {
        id: "jgc-caso-02",
        agencia: "Federal",
        titulo: "Esquema de drogas por votos en cárceles (investigación ProPublica)",
        fecha_apertura: "2024-01-01",
        estado: "abierto",
        resumen:
          "ProPublica reportó que fiscales federales investigaron un esquema en el que una ganga supuestamente entregaba drogas a confinados a cambio de votos a favor de Jenniffer González. La gobernadora no ha sido acusada.",
        fuentes: [
          {
            titulo: "Drogas por votos en cárceles (Wapa.tv / ProPublica)",
            url: "https://wapa.tv/noticias/locales/fiscales-investigaron-esquema-de-drogas-por-votos-en-c-rceles-de-puerto-rico/article_b93efd8b-f5f3-49f8-87a9-4385bf6480b4.html",
            tipo: "prensa",
          },
        ],
      },
      {
        id: "jgc-caso-03",
        agencia: "OEG",
        titulo: "Prórroga para radicación de informe financiero",
        fecha_apertura: "2025-04-11",
        estado: "cerrado_sin_hallazgo",
        resumen:
          "Solicitó prórroga a la OEG (junto a Secretaria de Estado y Secretario de la Gobernación) para radicar informe financiero al tomar posesión. Plazo extendido al 2 de mayo de 2025.",
        fuentes: [
          {
            titulo: "Prórroga OEG (Metro)",
            url: "https://www.metro.pr/noticias/2025/04/11/jenniffer-gonzalez-estoy-con-una-prorroga-de-la-oficina-de-etica-gubernamental/",
            fecha: "2025-04-11",
            tipo: "prensa",
          },
        ],
      },
      {
        id: "jgc-caso-04",
        agencia: "Justicia",
        titulo: "FEI recomendado contra Ciary Pérez Peña (ex-Secretaria de Vivienda nombrada por JGC)",
        fecha_apertura: "2025-06-01",
        estado: "abierto",
        resumen:
          "El Departamento de Justicia recomendó la asignación de un Fiscal Especial Independiente para investigar a Ciary Pérez Peña, secretaria de Vivienda confirmada y luego separada del cargo.",
        fuentes: [
          {
            titulo: "Justicia recomienda FEI para Ciary Pérez Peña (El Nuevo Día)",
            url: "https://www.elnuevodia.com/noticias/locales/notas/justicia-recomienda-asignar-fei-para-ciary-perez-pena/",
            tipo: "prensa",
          },
        ],
      },
      {
        id: "jgc-caso-05",
        agencia: "OEG",
        titulo: "Conflictos éticos del Director Ejecutivo de COR3",
        fecha_apertura: "2025-04-01",
        estado: "abierto",
        resumen:
          "CPI documentó posibles conflictos éticos del Director Ejecutivo de COR3 bajo la administración González.",
        fuentes: [
          {
            titulo: "Se juega maromas éticas Director COR3 (CPI)",
            url: "https://periodismoinvestigativo.com/2025/04/conflictos-eticos-director-ejecutivo-cor3/",
            fecha: "2025-04-01",
            tipo: "prensa",
          },
        ],
      },
    ],
    fuentes: [
      { titulo: "OEG - registro público", tipo: "oficial" },
    ],
  },
  fiscal: {
    periodo: "FY 2025-2026",
    fuentes: [{ titulo: "OGP - Presupuesto Recomendado", tipo: "oficial" }],
  },
  servicio: {
    notas: "Datos por confirmar con la oficina del ejecutivo.",
    fuentes: [{ titulo: "Fortaleza - prensa", tipo: "prensa" }],
  },
  impactos: [],
  coherencia: [],
  puntajes: [
    {
      eje: "promesas",
      valor: 0.34,
      confianza: "media",
      n_evidencias: 9,
      ultima_actualizacion: HOY,
      nota: "2 cumplidas, 4 en progreso, 1 incumplida, 1 por verificar, 1 confianza media.",
    },
    {
      eje: "productividad",
      valor: null,
      confianza: "media",
      n_evidencias: 8,
      ultima_actualizacion: HOY,
      nota: "8 acciones documentadas: 6 OE/leyes + 2 vetos. Falta normalizar contra base ejecutiva.",
    },
    {
      eje: "asistencia",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
      nota: "No aplica al ejecutivo.",
    },
    {
      eje: "transparencia",
      valor: 0.3,
      confianza: "media",
      n_evidencias: 5,
      ultima_actualizacion: HOY,
      nota: "5 casos en agencias (1 cerrado, 4 abiertos). Penalizada por enmiendas a Ley de Transparencia.",
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
      nota: "Métricas autorreportadas pendientes de verificación independiente.",
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
