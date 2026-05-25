import type { Politico } from "@/lib/types";

const HOY = "2026-05-25";

export const juanDalmau: Politico = {
  slug: "juan-dalmau-ramirez",
  nombre: "Juan Dalmau Ramírez",
  partido: "PIP",
  cargo: "Otro",
  cargo_detalle: "Secretario General del PIP · Comisionado Electoral del PIP ante la CEE",
  bio: "Abogado y Secretario General del Partido Independentista Puertorriqueño. Candidato a la gobernación en 2012, 2020 y 2024. En 2024, bajo la Alianza PIP-MVC, obtuvo 370,808 votos (32.69%) — el mejor resultado histórico de una candidatura independentista — quedando segundo ante Jenniffer González (PNP). En 2025 NO ocupa escaño legislativo; ejerce liderazgo extra-parlamentario del PIP.",
  promesas: [
    {
      id: "jdr-energia-01",
      titulo: "Cancelar contratos de LUMA y Genera PR desde el día 1",
      descripcion:
        "Promesa de campaña como candidato a gobernador (Alianza PIP-MVC, Patria Nueva): emitir orden ejecutiva el primer día estableciendo política pública para cancelar LUMA y Genera PR y rescatar el control de la AEE.",
      fecha_promesa: "2024-09-18",
      estado: "incumplida",
      sector: "energia",
      fuentes: [
        {
          titulo: "Alianza PIP-MVC presenta programa de gobierno (Metro)",
          url: "https://www.metro.pr/noticias/2024/09/18/alianza-pip-mvc-presenta-su-futuro-programa-de-gobierno/",
          fecha: "2024-09-18",
          tipo: "prensa",
        },
        {
          titulo: "Nueva Energía Eléctrica - Patria Nueva 2024 (oficial)",
          url: "https://www.patrianuevapr.com/nueva-energ%C3%ADa-el%C3%A9ctrica",
          fecha: "2024-09-18",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
      evidencia:
        "Promesa no implementable directamente por Dalmau (no ganó gobernación). Los senadores PIP intentaron viabilizarla con P. del S. 695 (ago 2025), colgado por descargue en menos de dos días.",
      notas:
        "Marcado como 'incumplida' por motivos electorales — no asumió cargo ejecutivo. Sigue siendo agenda activa del PIP.",
    },
    {
      id: "jdr-estatus-01",
      titulo: "Convocar Asamblea Constitucional de Estatus",
      descripcion:
        "Convocar una Asamblea Constitucional de Estatus como mecanismo procesal para que el pueblo ejerza su derecho a la libre determinación.",
      fecha_promesa: "2024-09-18",
      estado: "incumplida",
      sector: "otros",
      fuentes: [
        {
          titulo: "10 objetivos de la Alianza (La Perla)",
          url: "https://www.periodicolaperla.com/elecciones-2024/alianza-de-pais-presenta-plan-de-gobierno-con-10-objetivos/",
          fecha: "2024-09-18",
          tipo: "prensa",
        },
        {
          titulo: "10 temas prioritarios PIP-MVC (Ey Boricua)",
          url: "https://eyboricua.com/noticias/puerto-rico/politica/los-10-temas-prioritarios-de-la-alianza-pip-mvc/",
          fecha: "2024-09-18",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      notas: "Eje central de Patria Nueva. Marcada incumplida por derrota electoral.",
    },
    {
      id: "jdr-salud-01",
      titulo: "Sistema Universal de Salud fuera del control de aseguradoras",
      descripcion:
        "Sistema Universal de Salud efectivo y equitativo, fuera del control de aseguradoras, con énfasis en prevención.",
      fecha_promesa: "2024-09-18",
      estado: "incumplida",
      sector: "salud",
      fuentes: [
        {
          titulo: "Alianza presenta programa (Metro)",
          url: "https://www.metro.pr/noticias/2024/09/18/alianza-pip-mvc-presenta-su-futuro-programa-de-gobierno/",
          fecha: "2024-09-18",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
    },
    {
      id: "jdr-jsf-01",
      titulo: "Eliminación de la Junta de Supervisión Fiscal",
      descripcion:
        "Buscar apoyo transversal para ir al Congreso y exigir la eliminación de la JSF.",
      fecha_promesa: "2024-10-10",
      estado: "incumplida",
      sector: "economia",
      fuentes: [
        {
          titulo: "Dalmau sobre Junta Fiscal (Primera Hora)",
          url: "https://www.primerahora.com/noticias/gobierno-politica/notas/vamos-a-ver-si-el-gas-pela-dice-dalmau-sobre-junta-fiscal/",
          tipo: "prensa",
        },
        {
          titulo: "Dalmau puede cumplir propuestas (Metro)",
          url: "https://www.metro.pr/noticias/2024/10/10/juan-dalmau-asegura-puede-cumplir-sus-propuestas/",
          fecha: "2024-10-10",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
    },
    {
      id: "jdr-ambiente-01",
      titulo: "Moratoria de construcción en zonas costeras y nueva Ley de Costas",
      descripcion:
        "Moratoria a construcción/reconstrucción en zonas costeras hasta aprobar nueva Ley de Costas que designe claramente dominio público.",
      fecha_promesa: "2024-06-24",
      estado: "incumplida",
      sector: "ambiente",
      fuentes: [
        {
          titulo: "Propuestas ambientales Dalmau (NotiCel)",
          url: "https://www.noticel.com/elecciones/20240624/juan-dalmau-presenta-sus-propuestas-ambientales/",
          fecha: "2024-06-24",
          tipo: "prensa",
        },
        {
          titulo: "Programa ambiental Dalmau (El Vocero)",
          url: "https://www.elvocero.com/gobierno/juan-dalmau-presenta-programa-ambiental/article_a1bbf9aa-327b-11ef-be5c-037c56f8b089.html",
          fecha: "2024-06-24",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
      evidencia: "Programa ambiental con ~220 acciones. Ley de Costas radicada 4 veces previamente por PIP.",
    },
    {
      id: "jdr-anticorr-01",
      titulo: "Panel de Justicia y Verdad sobre deuda y quiebra",
      descripcion:
        "Crear 'Panel de Justicia y Verdad' para examinar responsabilidad por deuda pública y quiebra del gobierno.",
      fecha_promesa: "2024-09-05",
      estado: "incumplida",
      sector: "transparencia",
      fuentes: [
        {
          titulo: "Propuesta romper espinazo corrupción (WIPR)",
          url: "https://wipr.pr/juan-dalmau-presenta-propuesta-para-combatir-la-corrupcion-y-transformar-el-gobierno/",
          fecha: "2024-09-05",
          tipo: "prensa",
        },
        {
          titulo: "Propuesta corrupción (PatriaNueva oficial)",
          url: "https://www.patrianuevapr.com/post/propuesta-para-romper-el-espinazo-a-la-corrupci%C3%B3n-y-transformar-el-gobierno",
          fecha: "2024-09-05",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
    },
    {
      id: "jdr-reforma-01",
      titulo: "Legislatura unicameral con representación proporcional",
      descripcion:
        "Cumplir el mandato del referéndum 2005 por una legislatura unicameral con representación proporcional.",
      fecha_promesa: "2024-09-05",
      estado: "incumplida",
      sector: "transparencia",
      fuentes: [
        {
          titulo: "Propuesta unicameralidad (WIPR)",
          url: "https://wipr.pr/juan-dalmau-presenta-propuesta-para-combatir-la-corrupcion-y-transformar-el-gobierno/",
          fecha: "2024-09-05",
          tipo: "prensa",
        },
      ],
      confianza: "alta",
    },
    {
      id: "jdr-pensiones-01",
      titulo: "Aumento de 10% a pensiones de empleados públicos",
      descripcion:
        "Impulsar ley para aumentar las pensiones de 160,000 retirados un 10% el primer año.",
      fecha_promesa: "2024-09-05",
      estado: "incumplida",
      sector: "social",
      fuentes: [
        {
          titulo: "Propuesta pensiones (PatriaNueva oficial)",
          url: "https://www.patrianuevapr.com/post/propuesta-para-romper-el-espinazo-a-la-corrupci%C3%B3n-y-transformar-el-gobierno",
          fecha: "2024-09-05",
          tipo: "oficial",
        },
      ],
      confianza: "alta",
    },
  ],
  medidas: [],
  transparencia: {
    disclosures_a_tiempo: true,
    participa_datos_abiertos: false,
    casos: [],
    fuentes: [{ titulo: "OEG - registro público", tipo: "oficial" }],
  },
  impactos: [],
  coherencia: [],
  puntajes: [
    {
      eje: "promesas",
      valor: 0.0,
      confianza: "alta",
      n_evidencias: 8,
      ultima_actualizacion: HOY,
      nota: "Promesas del programa Patria Nueva — no ejecutables al no ganar gobernación. Se mantienen como compromisos políticos del PIP.",
    },
    {
      eje: "productividad",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
      nota: "No ocupa cargo electo. Liderazgo extra-parlamentario.",
    },
    {
      eje: "asistencia",
      valor: null,
      confianza: "no_verificado",
      n_evidencias: 0,
      ultima_actualizacion: HOY,
      nota: "No aplica.",
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
