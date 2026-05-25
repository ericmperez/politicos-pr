import Link from "next/link";

export const metadata = {
  title: "Contribuir — Índice Cívico PR",
  description: "Cómo someter evidencia, reportes ciudadanos o correcciones.",
};

export default function ContribuirPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <div className="text-[11px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] mb-2">
          Participa
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-3">
          Contribuir al observatorio
        </h1>
        <p className="text-lg text-[var(--muted-foreground)]">
          Tres formas de hacer del Índice Cívico PR un proyecto del país.
        </p>
      </header>

      <div className="grid gap-4">
        <Bloque
          titulo="1 · Someter evidencia"
          desc="Encontraste una nota oficial, un acta, una orden ejecutiva o una resolución que respalde o refute una promesa, una medida o un indicador. Súbela con la cita exacta y el enlace verificable."
          cta="Próximamente: formulario de evidencia"
        />
        <Bloque
          titulo="2 · Reporte ciudadano"
          desc="Eres residente y quieres reportar el estado de una obra, un servicio municipal o una promesa incumplida en tu comunidad. Tu reporte se cruza con datos públicos y requiere ≥3 corroboraciones independientes antes de publicarse."
          cta="Próximamente: formulario de reporte"
        />
        <Bloque
          titulo="3 · Curaduría comunitaria"
          desc="¿Eres periodista, académico o estudiante? Puedes adoptar a un funcionario y mantener actualizado su perfil con evidencia verificable. Reconocemos a cada curador en su trabajo."
          cta="Escríbenos a contribuir@indicecivicopr.org"
        />
        <Bloque
          titulo="4 · Código abierto"
          desc="El proyecto es de código abierto. Diseñadoras, ingenieras, científicas de datos, lingüistas y especialistas en políticas pueden contribuir directamente al repositorio."
          cta="GitHub: próximamente"
        />
      </div>

      <div className="card p-5 mt-8 bg-[var(--muted)]">
        <h3 className="font-bold mb-1 text-sm">Reglas básicas</h3>
        <ul className="text-xs space-y-1 list-disc pl-5 text-[var(--muted-foreground)]">
          <li>Toda evidencia debe ser pública o verificable.</li>
          <li>No publicamos rumores, ataques personales ni material sin fuente.</li>
          <li>El funcionario tendrá derecho de réplica antes de publicar contenido sensible.</li>
          <li>Anonimato del informante se protege salvo orden judicial.</li>
        </ul>
      </div>

      <div className="mt-8">
        <Link href="/como-medimos" className="btn-secondary">
          ← Ver metodología
        </Link>
      </div>
    </article>
  );
}

function Bloque({
  titulo,
  desc,
  cta,
}: {
  titulo: string;
  desc: string;
  cta: string;
}) {
  return (
    <div className="card p-5">
      <h3 className="font-bold mb-2">{titulo}</h3>
      <p className="text-sm text-[var(--muted-foreground)] mb-3">{desc}</p>
      <div className="text-xs font-semibold inline-block px-2.5 py-1 rounded bg-[var(--muted)] text-[var(--muted-foreground)]">
        {cta}
      </div>
    </div>
  );
}
