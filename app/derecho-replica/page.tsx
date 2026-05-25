import Link from "next/link";

export const metadata = {
  title: "Derecho de réplica — Índice Cívico PR",
  description: "Cómo un funcionario o su oficina puede responder a un registro.",
};

export default function DerechoReplicaPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <div className="text-[11px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] mb-2">
          Para funcionarios y oficinas
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-3">
          Derecho de réplica
        </h1>
        <p className="text-lg text-[var(--muted-foreground)]">
          Si un registro sobre tu gestión es inexacto, incompleto o sin
          contexto, tu oficina puede responder. La réplica se publica visible
          junto al registro original.
        </p>
      </header>

      <ol className="space-y-4">
        <Paso n={1} titulo="Identifica el registro">
          Localiza la promesa, medida o indicador en tu perfil. Cada elemento
          tiene un identificador (por ejemplo, <code>jgc-energia-01</code>).
        </Paso>
        <Paso n={2} titulo="Prepara tu evidencia">
          Adjunta documentación oficial, enlace a fuente pública, número de
          expediente o cita del Diario de Sesiones que respalde tu posición.
          Solo se aceptan piezas con fuente verificable.
        </Paso>
        <Paso n={3} titulo="Envíanos la solicitud">
          Envíala desde un correo oficial de tu oficina a{" "}
          <code>replica@indicecivicopr.org</code>, citando el identificador
          y describiendo qué cambio o adición solicitas.
        </Paso>
        <Paso n={4} titulo="Revisión en 7 días">
          Un revisor humano evalúa la evidencia. Si procede, actualizamos el
          registro y publicamos tu réplica junto al original. Si no procede,
          recibes una explicación pública.
        </Paso>
        <Paso n={5} titulo="Audit trail">
          Cada cambio queda con timestamp, autor del cambio y fuente. Nadie
          puede borrar evidencia silenciosamente — tampoco nosotros.
        </Paso>
      </ol>

      <div className="card p-5 mt-8 bg-amber-50 border-amber-200">
        <h3 className="font-bold mb-1 text-sm text-amber-900">
          Lo que no aceptamos
        </h3>
        <ul className="text-xs space-y-1 list-disc pl-5 text-amber-800">
          <li>Solicitudes anónimas o desde correos no oficiales.</li>
          <li>Réplicas sin fuente verificable.</li>
          <li>Solicitudes de eliminar evidencia documentada.</li>
          <li>Amenazas, intimidación o solicitudes acompañadas de presión legal sin base.</li>
        </ul>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/como-medimos" className="btn-secondary">
          Metodología
        </Link>
        <Link href="/contribuir" className="btn-secondary">
          Contribuir
        </Link>
      </div>
    </article>
  );
}

function Paso({
  n,
  titulo,
  children,
}: {
  n: number;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <li className="card p-5 flex gap-4">
      <div className="shrink-0 w-9 h-9 rounded-full bg-[var(--foreground)] text-[var(--background)] font-black grid place-items-center text-sm">
        {n}
      </div>
      <div>
        <h3 className="font-bold mb-1">{titulo}</h3>
        <p className="text-sm text-[var(--muted-foreground)]">{children}</p>
      </div>
    </li>
  );
}
