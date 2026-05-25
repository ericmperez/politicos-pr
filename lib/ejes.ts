import type { Eje, EjeId } from "./types";

export const EJES: Record<EjeId, Eje> = {
  promesas: {
    id: "promesas",
    nombre: "Cumplimiento de promesas",
    descripcion:
      "Porcentaje de promesas de campaña con evidencia de cumplimiento o avance demostrable.",
    tipo: "objetivo",
    como_se_mide:
      "Cada promesa documentada se rastrea con estado (cumplida / en progreso / incumplida / sin iniciar / rota). El puntaje pondera cumplidas (1.0), en progreso (0.5), sin iniciar (0.1) e incumplidas (0).",
  },
  productividad: {
    id: "productividad",
    nombre: "Productividad legislativa o ejecutiva",
    descripcion:
      "Volumen y calidad de medidas radicadas, aprobadas, órdenes ejecutivas emitidas y programas lanzados.",
    tipo: "objetivo",
    como_se_mide:
      "Recuento ponderado: ley firmada (4 pts), aprobada cámara o senado (2 pts), radicada como autor (1 pt), co-autor (0.25 pts). Ajustado por sustantividad temática.",
  },
  asistencia: {
    id: "asistencia",
    nombre: "Asistencia y participación",
    descripcion:
      "Asistencia a votaciones, sesiones y comisiones; participación en vistas públicas.",
    tipo: "objetivo",
    como_se_mide:
      "Porcentaje simple sobre el total registrado en los Diarios de Sesiones. Solo aplica a legisladores y miembros de juntas/comisiones.",
  },
  transparencia: {
    id: "transparencia",
    nombre: "Transparencia y ética",
    descripcion:
      "Cumplimiento con disclosures financieros, datos abiertos, casos ante OEG, Contralor u OPF.",
    tipo: "objetivo",
    como_se_mide:
      "Penaliza disclosures tardíos, casos cerrados con hallazgo, y opacidad de información pública. Bonifica participación voluntaria en datos abiertos.",
  },
  fiscal: {
    id: "fiscal",
    nombre: "Eficiencia fiscal",
    descripcion:
      "Ejecución del presupuesto bajo control del funcionario y hallazgos de auditorías.",
    tipo: "objetivo",
    como_se_mide:
      "Combina razón de ejecución presupuestaria con número y severidad de hallazgos del Contralor y OCAM por el periodo medido.",
  },
  constituyente: {
    id: "constituyente",
    nombre: "Atención al constituyente",
    descripcion:
      "Tiempo de respuesta, accesibilidad de la oficina y frecuencia de espacios públicos con la ciudadanía.",
    tipo: "objetivo",
    como_se_mide:
      "Mide tiempo promedio de respuesta a solicitudes, town halls celebrados últimos 12 meses, y un índice de accesibilidad (horario, ubicación, contacto efectivo).",
  },
  impacto: {
    id: "impacto",
    nombre: "Impacto comunitario verificado",
    descripcion:
      "Resultados medibles vinculados a sus acciones: obras completadas, métricas mejoradas, beneficiarios.",
    tipo: "objetivo",
    como_se_mide:
      "Cada indicador requiere métrica antes/después y vínculo a una acción específica del funcionario. Se descuentan claims sin evidencia independiente.",
  },
  coherencia: {
    id: "coherencia",
    nombre: "Coherencia",
    descripcion:
      "Consistencia entre posiciones públicas declaradas y votos o acciones posteriores.",
    tipo: "objetivo",
    como_se_mide:
      "Compara pares de declaraciones públicas y los clasifica como consistentes, matiz, evolución justificada o contradicción. Penaliza solo contradicciones sin explicación.",
  },
  sentimiento: {
    id: "sentimiento",
    nombre: "Sentimiento ciudadano cualificado",
    descripcion:
      "Aprobación medida en panel ciudadano verificado más escucha social ponderada por autenticidad.",
    tipo: "cualificado",
    como_se_mide:
      "Panel ciudadano estratificado por municipio, edad y género (n≈3,000). RRSS filtradas por señales de autenticidad. Siempre se reporta separado de los ejes objetivos.",
  },
};

export const ORDEN_EJES: EjeId[] = [
  "promesas",
  "productividad",
  "asistencia",
  "transparencia",
  "fiscal",
  "constituyente",
  "impacto",
  "coherencia",
  "sentimiento",
];
