export type PartidoId =
  | "PNP"
  | "PPD"
  | "PIP"
  | "MVC"
  | "PD"
  | "ALIANZA"
  | "IND";

export type Cargo =
  | "Gobernador(a)"
  | "Comisionado(a) Residente"
  | "Senador(a)"
  | "Representante"
  | "Alcalde(sa)"
  | "Secretario(a)"
  | "Otro";

export type Sector =
  | "energia"
  | "salud"
  | "educacion"
  | "economia"
  | "infraestructura"
  | "seguridad"
  | "vivienda"
  | "transparencia"
  | "ambiente"
  | "transporte"
  | "social"
  | "otros";

export type EjeId =
  | "promesas"
  | "productividad"
  | "asistencia"
  | "transparencia"
  | "fiscal"
  | "constituyente"
  | "impacto"
  | "coherencia"
  | "sentimiento";

export interface Eje {
  id: EjeId;
  nombre: string;
  descripcion: string;
  tipo: "objetivo" | "cualificado";
  como_se_mide: string;
}

export type NivelConfianza = "alta" | "media" | "baja" | "no_verificado";

export interface Fuente {
  titulo: string;
  url?: string;
  fecha?: string;
  tipo: "oficial" | "prensa" | "academica" | "ciudadana" | "rrss" | "ia";
}

export type EstadoPromesa =
  | "cumplida"
  | "en_progreso"
  | "incumplida"
  | "sin_iniciar"
  | "rota"
  | "por_verificar";

export interface Promesa {
  id: string;
  titulo: string;
  descripcion: string;
  fecha_promesa: string;
  fecha_limite?: string;
  estado: EstadoPromesa;
  sector: Sector;
  fuentes: Fuente[];
  evidencia?: string;
  confianza: NivelConfianza;
  notas?: string;
}

export type EstadoMedida =
  | "radicada"
  | "co_autor"
  | "aprobada_camara"
  | "aprobada_senado"
  | "ley"
  | "vetada"
  | "engavetada";

export interface Medida {
  id: string;
  numero: string;
  titulo: string;
  fecha: string;
  estado: EstadoMedida;
  rol: "autor" | "co_autor" | "presidente_comision";
  sector: Sector;
  fuentes: Fuente[];
}

export interface Asistencia {
  votos_totales: number;
  votos_presentes: number;
  comisiones_totales: number;
  comisiones_presentes: number;
  periodo: string;
  fuentes: Fuente[];
}

export interface CasoEtico {
  id: string;
  agencia: "OEG" | "OPF" | "Contralor" | "OCAM" | "Justicia" | "Federal";
  numero?: string;
  titulo: string;
  fecha_apertura: string;
  estado:
    | "abierto"
    | "cerrado_sin_hallazgo"
    | "cerrado_con_hallazgo"
    | "en_apelacion";
  resumen: string;
  fuentes: Fuente[];
}

export interface Transparencia {
  disclosures_a_tiempo: boolean;
  ultima_disclosure?: string;
  participa_datos_abiertos: boolean;
  casos: CasoEtico[];
  fuentes: Fuente[];
}

export interface IndicadorFiscal {
  presupuesto_asignado?: number;
  presupuesto_ejecutado?: number;
  hallazgos_auditoria?: number;
  periodo: string;
  fuentes: Fuente[];
}

export interface ServicioConstituyente {
  tiempo_respuesta_dias?: number;
  town_halls_ultimos_12m?: number;
  oficina_accesible?: boolean;
  notas?: string;
  fuentes: Fuente[];
}

export interface IndicadorImpacto {
  id: string;
  titulo: string;
  descripcion: string;
  metrica: string;
  valor_antes?: string;
  valor_despues?: string;
  fecha?: string;
  vinculo_promesa_id?: string;
  fuentes: Fuente[];
  confianza: NivelConfianza;
}

export interface CheckCoherencia {
  id: string;
  tema: string;
  posicion_a: { texto: string; fecha: string; fuente: Fuente };
  posicion_b: { texto: string; fecha: string; fuente: Fuente };
  evaluacion: "contradiccion" | "evolucion" | "matiz" | "consistente";
  nota?: string;
}

export interface Sentimiento {
  panel_aprobacion?: number;
  panel_n?: number;
  panel_fecha?: string;
  rrss_positivo?: number;
  rrss_neutral?: number;
  rrss_negativo?: number;
  metodologia: string;
  fuentes: Fuente[];
}

export interface PuntajeEje {
  eje: EjeId;
  valor: number | null;
  confianza: NivelConfianza;
  n_evidencias: number;
  ultima_actualizacion: string;
  nota?: string;
}

export interface RedesSociales {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  web?: string;
}

export interface Politico {
  slug: string;
  nombre: string;
  partido: PartidoId;
  cargo: Cargo;
  cargo_detalle?: string;
  distrito?: string;
  region?: string;
  inicio_termino?: string;
  fin_termino?: string;
  foto?: string;
  bio: string;
  redes?: RedesSociales;
  promesas: Promesa[];
  medidas: Medida[];
  asistencia?: Asistencia;
  transparencia?: Transparencia;
  fiscal?: IndicadorFiscal;
  servicio?: ServicioConstituyente;
  impactos: IndicadorImpacto[];
  coherencia: CheckCoherencia[];
  sentimiento?: Sentimiento;
  puntajes: PuntajeEje[];
  ultima_actualizacion: string;
  estado_dataset: "demo" | "parcial" | "completo";
}

export interface Partido {
  id: PartidoId;
  nombre: string;
  abreviatura: string;
  color: string;
  color_fondo: string;
  descripcion: string;
  plataforma_nombre?: string;
  plataforma_url?: string;
}
