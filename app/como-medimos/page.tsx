import Link from "next/link";
import { ORDEN_EJES, EJES } from "@/lib/ejes";

export const metadata = {
  title: "Metodología — Índice Cívico PR",
  description:
    "Marco analítico, fuentes, salvaguardas de neutralidad y rol de la inteligencia artificial en Índice Cívico PR.",
};

export default function ComoMedimosPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 prose-sm">
      <header className="mb-10">
        <div className="text-[11px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] mb-2">
          Marco analítico v0.1
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-3">
          Cómo medimos
        </h1>
        <p className="text-lg text-[var(--muted-foreground)]">
          Un observatorio cívico es tan creíble como su metodología. Esta es la
          nuestra — abierta, versionada y revisable por la ciudadanía.
        </p>
      </header>

      <Section title="Premisa">
        <p>
          Ningún sistema actual mide a los políticos de Puerto Rico de forma
          comprehensiva, multidimensional, en tiempo real y verificable. Índice
          Cívico PR busca ser el primer observatorio cívico aumentado con
          inteligencia artificial dedicado al país.
        </p>
      </Section>

      <Section title="Principios de diseño">
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Multidimensional.</strong> Nunca un solo "score" de
            bueno/malo. Nueve ejes separados que el ciudadano combina según
            sus valores.
          </li>
          <li>
            <strong>Evidencia o no existe.</strong> Toda afirmación lleva al
            menos dos fuentes (oficial + secundaria), enlazables y versionadas.
          </li>
          <li>
            <strong>Neutralidad estructural.</strong> Metodología pública,
            pesos abiertos, junta de revisión multipartidista (PNP, PPD, PIP,
            MVC, PD) + academia + sociedad civil.
          </li>
          <li>
            <strong>Derecho de réplica.</strong> El funcionario o su oficina
            puede someter evidencia; queda marcada y visible junto al registro
            original.
          </li>
          <li>
            <strong>IA con supervisión humana.</strong> Los modelos extraen,
            indexan y comparan; todo cambio queda con audit trail y revisor
            humano.
          </li>
          <li>
            <strong>Co-creado con la ciudadanía.</strong> Reportes verificados,
            no scraping crudo de redes.
          </li>
        </ol>
      </Section>

      <Section title="Los 9 ejes de medición">
        <div className="grid gap-3 not-prose">
          {ORDEN_EJES.map((id, i) => {
            const e = EJES[id];
            return (
              <div key={id} className="card p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-base">
                    {String(i + 1).padStart(2, "0")} · {e.nombre}
                  </h3>
                  <span
                    className="chip px-2 py-0.5 text-[10px]"
                    style={{
                      backgroundColor:
                        e.tipo === "objetivo" ? "#dbeafe" : "#fef3c7",
                      color: e.tipo === "objetivo" ? "#1d4ed8" : "#a16207",
                    }}
                  >
                    {e.tipo}
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] mb-2">
                  {e.descripcion}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Cómo se mide:</span>{" "}
                  {e.como_se_mide}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Componentes de inteligencia artificial">
        <p>
          La IA acelera la curaduría humana pero nunca la reemplaza. Cada
          modelo produce sugerencias que pasan por revisión antes de
          publicarse.
        </p>
        <ol className="list-decimal pl-5 space-y-2 mt-4">
          <li>
            <strong>Extractor de Promesas.</strong> Ingesta de plataformas,
            debates, entrevistas y posts oficiales. Extrae cada promesa como
            registro estructurado.
          </li>
          <li>
            <strong>Enlazador de Evidencia.</strong> RAG sobre Cámara, Senado,
            OGP, AAFAF, prensa. Vincula cada promesa con acciones concretas y
            citas.
          </li>
          <li>
            <strong>Verificador de Declaraciones.</strong> Contrasta
            declaraciones públicas con documentos oficiales en tiempo casi
            real.
          </li>
          <li>
            <strong>Triaje de Reportes Ciudadanos.</strong> Deduplica,
            geolocaliza y cruza reportes con permisos y data pública.
          </li>
          <li>
            <strong>Rastreador de Coherencia.</strong> Compara declaraciones
            del mismo funcionario en el tiempo; señala contradicciones con
            cita.
          </li>
          <li>
            <strong>Muestreador de Sentimiento.</strong> Panel ciudadano
            estratificado (n≈3,000) + ponderación de RRSS por señales de
            autenticidad.
          </li>
          <li>
            <strong>Enlazador de Resultados.</strong> Vincula partida →
            programa → métrica de outcome verificable.
          </li>
          <li>
            <strong>Resumen Personalizado.</strong> El ciudadano pide
            "resúmeme cómo va el alcalde de X en transparencia" y el sistema
            responde solo con datos verificados.
          </li>
        </ol>
      </Section>

      <Section title="Estándar de evidencia">
        <p>
          Una afirmación se publica con confianza{" "}
          <strong>alta</strong> solo si cumple:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>≥2 fuentes independientes</li>
          <li>Al menos una fuente oficial (Senado, Cámara, agencia, OGP, Contralor, OEG)</li>
          <li>Revisión humana documentada</li>
          <li>El funcionario tuvo oportunidad de derecho de réplica</li>
        </ul>
        <p className="mt-3">
          Si falta cualquiera, se marca como{" "}
          <strong>confianza media, baja o sin verificar</strong> y se reporta
          honestamente al lector.
        </p>
      </Section>

      <Section title="Salvaguardas anti-sesgo">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Sin ranking general en la portada. Cards muestran los nueve ejes
            como mini-radar, no número único.
          </li>
          <li>
            Pesos abiertos: el usuario puede ajustar cuánto le importa cada
            eje y ver cómo cambia su propio ranking.
          </li>
          <li>
            Diff público: cada cambio a un perfil queda visible (quién, cuándo,
            fuente).
          </li>
          <li>
            Junta de revisión trimestral con representación de los cinco
            partidos electorales + academia.
          </li>
          <li>
            Derecho de réplica marcado pero visible junto al registro original.
          </li>
          <li>
            Modo "evidencia mínima": el usuario puede esconder afirmaciones
            que no llegan al estándar de dos fuentes.
          </li>
        </ul>
      </Section>

      <Section title="Fuentes primarias">
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>SUTRA — Senado y Cámara de Representantes de PR</li>
          <li>Diarios de Sesiones (Senado y Cámara)</li>
          <li>Oficina de Gerencia y Presupuesto (OGP)</li>
          <li>AAFAF — Autoridad de Asesoría Financiera y Agencia Fiscal</li>
          <li>Contralor de Puerto Rico</li>
          <li>OCAM — Oficina del Comisionado de Asuntos Municipales</li>
          <li>OEG — Oficina de Ética Gubernamental</li>
          <li>CEE / OCNE — registros electorales y financiamiento</li>
          <li>
            Prensa: El Nuevo Día, Primera Hora, El Vocero, Centro de Periodismo
            Investigativo (CPI), Microjuris
          </li>
          <li>Municipios — portales oficiales y planillas trimestrales</li>
          <li>House Ethics Committee (Comisionado Residente)</li>
        </ul>
      </Section>

      <Section title="Modelo de gobernanza">
        <p>
          Organización sin fines de lucro independiente. <strong>Nunca</strong>{" "}
          aceptará dinero de partidos, campañas, contratistas del gobierno o
          intereses regulados por el gobierno de PR. Código abierto. Junta
          revisora con paridad de partidos, 3 académicos y 2 representantes
          de sociedad civil.
        </p>
      </Section>

      <Section title="Versiones y cambios">
        <p>
          Esta metodología está versionada. La versión actual es{" "}
          <strong>v0.1</strong> (mayo 2026). Cualquier cambio significativo
          requiere período público de comentarios de 30 días y aprobación de
          dos tercios de la junta revisora.
        </p>
      </Section>

      <div className="border-t border-[var(--border)] mt-12 pt-8 flex flex-wrap gap-3">
        <Link href="/contribuir" className="btn-primary">
          Contribuir evidencia →
        </Link>
        <Link href="/derecho-replica" className="btn-secondary">
          Derecho de réplica
        </Link>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-3 tracking-tight">{title}</h2>
      <div className="text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
