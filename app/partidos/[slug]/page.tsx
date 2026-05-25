import Link from "next/link";
import { notFound } from "next/navigation";
import { PARTIDOS, ORDEN_PARTIDOS } from "@/lib/partidos";
import { POLITICOS } from "@/lib/politicos";
import { PoliticoCard } from "@/components/PoliticoCard";

export async function generateStaticParams() {
  return ORDEN_PARTIDOS.map((id) => ({ slug: id.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = slug.toUpperCase() as keyof typeof PARTIDOS;
  const p = PARTIDOS[id];
  return p
    ? { title: `${p.nombre} — Índice Cívico PR` }
    : { title: "Partido no encontrado" };
}

export default async function PartidoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = slug.toUpperCase() as keyof typeof PARTIDOS;
  const partido = PARTIDOS[id];
  if (!partido) notFound();
  const figuras = POLITICOS.filter((p) => p.partido === id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <nav className="text-xs text-[var(--muted-foreground)] mb-6">
        <Link href="/partidos" className="hover:underline">
          ← Todos los partidos
        </Link>
      </nav>
      <header className="mb-8" style={{ borderLeftColor: partido.color, borderLeftWidth: 4, paddingLeft: 16 }}>
        <div className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: partido.color }}>
          {partido.abreviatura}
        </div>
        <h1 className="text-3xl font-bold mb-2">{partido.nombre}</h1>
        <p className="text-[var(--muted-foreground)] max-w-2xl mb-3">
          {partido.descripcion}
        </p>
        {partido.plataforma_url && (
          <a
            href={partido.plataforma_url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            style={{ color: partido.color }}
          >
            📄 {partido.plataforma_nombre ?? "Plataforma oficial"} →
          </a>
        )}
      </header>
      {figuras.length === 0 ? (
        <div className="card p-8 text-center text-sm text-[var(--muted-foreground)]">
          Aún no hay figuras rastreadas para este partido.
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {figuras.map((p) => (
            <PoliticoCard key={p.slug} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
