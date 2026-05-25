import { POLITICOS } from "@/lib/politicos";
import { FiltrosPoliticos } from "@/components/Filtros";

export const metadata = {
  title: "Políticos — Índice Cívico PR",
  description:
    "Directorio de políticos electos de Puerto Rico. Filtra por partido, cargo o región.",
};

export default function PoliticosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Directorio de políticos</h1>
        <p className="text-[var(--muted-foreground)] max-w-2xl">
          Funcionarios electos del Gobierno de Puerto Rico, sus municipios y la
          delegación congresional. Filtra por partido, cargo o búsqueda libre.
        </p>
      </header>
      <FiltrosPoliticos politicos={POLITICOS} />
    </div>
  );
}
