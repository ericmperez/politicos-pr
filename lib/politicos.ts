import type { Politico } from "./types";
import { jennifferGonzalez } from "@/data/politicos/jenniffer-gonzalez";
import { pabloJoseHernandez } from "@/data/politicos/pablo-jose-hernandez";
import { juanDalmau } from "@/data/politicos/juan-dalmau";
import { jesusManuelOrtiz } from "@/data/politicos/jesus-manuel-ortiz";
import { luisJavierHernandez } from "@/data/politicos/luis-javier-hernandez";
import { manuelNatal } from "@/data/politicos/manuel-natal";
import {
  thomasRiveraSchatz,
  carlosMendez,
  miguelRomero,
} from "@/data/politicos/otros";

export const POLITICOS: Politico[] = [
  jennifferGonzalez,
  pabloJoseHernandez,
  thomasRiveraSchatz,
  carlosMendez,
  jesusManuelOrtiz,
  juanDalmau,
  manuelNatal,
  miguelRomero,
  luisJavierHernandez,
];

export function getPolitico(slug: string): Politico | undefined {
  return POLITICOS.find((p) => p.slug === slug);
}

export function getPoliticosPorPartido(partido: string): Politico[] {
  return POLITICOS.filter((p) => p.partido === partido);
}

export function getPoliticosPorCargo(cargo: string): Politico[] {
  return POLITICOS.filter((p) => p.cargo === cargo);
}
