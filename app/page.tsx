import Link from "next/link";
import { POLITICOS } from "@/lib/politicos";
import { PARTIDOS, ORDEN_PARTIDOS } from "@/lib/partidos";
import { ORDEN_EJES, EJES } from "@/lib/ejes";
import { PoliticoCard } from "@/components/PoliticoCard";

export default function Home() {
  const destacados = POLITICOS.slice(0, 6);
  const conteoPorPartido = ORDEN_PARTIDOS.map((id) => ({
    id,
    n: POLITICOS.filter((p) => p.partido === id).length,
  }));
  const totalPromesas = POLITICOS.reduce((a, p) => a + p.promesas.length, 0);

  return (
    <>
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--muted)] to-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Observatorio cívico independiente · Versión beta
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Mide a los políticos de Puerto Rico con evidencia, no con
              opiniones.
            </h1>
            <p className="text-base sm:text-lg text-[var(--muted-foreground)] mb-6 max-w-2xl">
              <span className="font-semibold text-[var(--foreground)]">
                Índice Cívico PR
              </span>{" "}
              rastrea promesas, productividad, transparencia, eficiencia
              fiscal e impacto comunitario de cada funcionario electo del
              país. Verificable, neutral y asistido por inteligencia
              artificial bajo supervisión humana.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/politicos" className="btn-primary">
                Ver todos los políticos →
              </Link>
              <Link href="/como-medimos" className="btn-secondary">
                Cómo medimos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-4 gap-3 border-b border-[var(--border)]">
        <Stat label="Políticos rastreados" value={POLITICOS.length.toString()} />
        <Stat label="Promesas en seguimiento" value={totalPromesas.toString()} />
        <Stat label="Ejes de medición" value="9" />
        <Stat label="Partidos cubiertos" value={conteoPorPartido.filter(c => c.n > 0).length.toString()} />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <header className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Destacados</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Liderazgo de los poderes ejecutivo, legislativo y municipal.
            </p>
          </div>
          <Link
            href="/politicos"
            className="text-sm font-semibold hover:underline"
          >
            Ver todos →
          </Link>
        </header>
        <div className="grid gap-3 sm:grid-cols-2">
          {destacados.map((p) => (
            <PoliticoCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--muted)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <header className="mb-6 max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">Los 9 ejes de medición</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              No hay un solo número. Cada político se mide en nueve
              dimensiones independientes y se muestra el grado de evidencia
              detrás de cada una.
            </p>
          </header>
          <ul className="grid gap-3 sm:grid-cols-3">
            {ORDEN_EJES.map((id, i) => {
              const e = EJES[id];
              return (
                <li
                  key={id}
                  className="card p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[var(--muted-foreground)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="chip px-2 py-0.5 text-[10px]"
                      style={{
                        backgroundColor: e.tipo === "objetivo" ? "#dbeafe" : "#fef3c7",
                        color: e.tipo === "objetivo" ? "#1d4ed8" : "#a16207",
                      }}
                    >
                      {e.tipo === "objetivo" ? "objetivo" : "cualificado"}
                    </span>
                  </div>
                  <h3 className="font-bold mb-1">{e.nombre}</h3>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {e.descripcion}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 text-center">
            <Link href="/como-medimos" className="btn-secondary">
              Leer metodología completa →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-bold mb-2">Datos abiertos y verificables</h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Cada afirmación va con su fuente. Versionado público y código
            abierto. Cuando un dato no llega al estándar de evidencia, se
            marca como{" "}
            <span className="font-semibold">sin verificar</span>.
          </p>
          <Link href="/como-medimos" className="text-sm font-semibold hover:underline">
            Ver metodología →
          </Link>
        </div>
        <div className="card p-6">
          <h3 className="font-bold mb-2">Derecho de réplica</h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Funcionarios y sus equipos pueden someter evidencia o correcciones.
            Cualquier ciudadano puede contribuir reportes verificables del
            campo.
          </p>
          <div className="flex gap-2">
            <Link href="/contribuir" className="btn-secondary text-xs">
              Contribuir
            </Link>
            <Link href="/derecho-replica" className="btn-secondary text-xs">
              Derecho de réplica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-3xl font-black tracking-tight">{value}</div>
      <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-semibold mt-1">
        {label}
      </div>
    </div>
  );
}
