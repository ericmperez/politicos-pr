import Link from "next/link";
import { PARTIDOS, ORDEN_PARTIDOS } from "@/lib/partidos";
import { POLITICOS } from "@/lib/politicos";

export const metadata = {
  title: "Partidos — Índice Cívico PR",
  description: "Partidos políticos y agrupaciones electorales de Puerto Rico.",
};

export default function PartidosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Partidos y agrupaciones</h1>
        <p className="text-[var(--muted-foreground)] max-w-2xl">
          Los cinco partidos electorales reconocidos por la CEE más la Alianza
          de País (PIP-MVC) que compitió en 2024.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {ORDEN_PARTIDOS.map((id) => {
          const p = PARTIDOS[id];
          const n = POLITICOS.filter((x) => x.partido === id).length;
          return (
            <Link key={id} href={`/partidos/${id.toLowerCase()}`}>
              <article
                className="card card-hover p-5"
                style={{ borderLeftColor: p.color, borderLeftWidth: 4 }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h2 className="font-bold text-lg leading-tight">{p.nombre}</h2>
                    <div className="text-xs text-[var(--muted-foreground)]">
                      {p.abreviatura}
                    </div>
                  </div>
                  <span
                    className="chip px-2 py-1 text-xs"
                    style={{ backgroundColor: p.color_fondo, color: p.color }}
                  >
                    {n} {n === 1 ? "figura" : "figuras"}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {p.descripcion}
                </p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
