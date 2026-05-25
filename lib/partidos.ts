import type { Partido, PartidoId } from "./types";

export const PARTIDOS: Record<PartidoId, Partido> = {
  PNP: {
    id: "PNP",
    nombre: "Partido Nuevo Progresista",
    abreviatura: "PNP",
    color: "#1d4ed8",
    color_fondo: "#dbeafe",
    descripcion: "Partido que favorece la estadidad para Puerto Rico.",
  },
  PPD: {
    id: "PPD",
    nombre: "Partido Popular Democrático",
    abreviatura: "PPD",
    color: "#dc2626",
    color_fondo: "#fee2e2",
    descripcion:
      "Partido que defiende el Estado Libre Asociado con desarrollo del autogobierno.",
  },
  PIP: {
    id: "PIP",
    nombre: "Partido Independentista Puertorriqueño",
    abreviatura: "PIP",
    color: "#15803d",
    color_fondo: "#dcfce7",
    descripcion: "Partido que favorece la independencia para Puerto Rico.",
  },
  MVC: {
    id: "MVC",
    nombre: "Movimiento Victoria Ciudadana",
    abreviatura: "MVC",
    color: "#7c3aed",
    color_fondo: "#ede9fe",
    descripcion: "Movimiento que propone una asamblea de estatus.",
  },
  PD: {
    id: "PD",
    nombre: "Proyecto Dignidad",
    abreviatura: "PD",
    color: "#0f766e",
    color_fondo: "#ccfbf1",
    descripcion: "Partido conservador centrado en valores tradicionales.",
  },
  ALIANZA: {
    id: "ALIANZA",
    nombre: "Alianza de País",
    abreviatura: "ALIANZA",
    color: "#9333ea",
    color_fondo: "#f3e8ff",
    descripcion: "Alianza electoral PIP-MVC para las elecciones de 2024.",
  },
  IND: {
    id: "IND",
    nombre: "Independiente",
    abreviatura: "IND",
    color: "#525252",
    color_fondo: "#f5f5f5",
    descripcion: "Candidatura sin afiliación partidista.",
  },
};

export const ORDEN_PARTIDOS: PartidoId[] = [
  "PNP",
  "PPD",
  "ALIANZA",
  "PIP",
  "MVC",
  "PD",
  "IND",
];
