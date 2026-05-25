import { notFound } from "next/navigation";
import Link from "next/link";
import { POLITICOS, getPolitico } from "@/lib/politicos";
import { PARTIDOS } from "@/lib/partidos";
import { ORDEN_EJES, EJES } from "@/lib/ejes";
import { porcentajePromesasPorEstado } from "@/lib/score";
import { PartidoBadge } from "@/components/PartidoBadge";
import { MiniRadar } from "@/components/MiniRadar";
import { EjeBar } from "@/components/EjeBar";
import { EstadoPromesaBadge } from "@/components/EstadoPromesaBadge";
import { ConfianzaBadge } from "@/components/ConfianzaBadge";
import { FuenteList } from "@/components/FuenteList";
import { Tabs } from "@/components/Tabs";

export async function generateStaticParams() {
  return POLITICOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPolitico(slug);
  if (!p) return { title: "Político no encontrado" };
  return {
    title: `${p.nombre} — Índice Cívico PR`,
    description: `Métricas, promesas, productividad y transparencia de ${p.nombre}. ${p.cargo_detalle ?? p.cargo}.`,
  };
}

export default async function PoliticoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPolitico(slug);
  if (!p) notFound();

  const partido = PARTIDOS[p.partido];
  const conteoEstados = porcentajePromesasPorEstado(p);

  const tabs = [
    {
      id: "resumen",
      label: "Resumen",
      content: (
        <div className="space-y-6">
          <div className="card p-4 sm:p-5">
            <h2 className="font-bold mb-3">Puntaje por eje</h2>
            <div className="divide-y divide-[var(--border)]">
              {p.puntajes.map((pe) => (
                <EjeBar key={pe.eje} puntaje={pe} />
              ))}
            </div>
            <div className="mt-4 text-xs text-[var(--muted-foreground)]">
              El sentimiento ciudadano se reporta separado de los ejes objetivos. Última actualización: {p.ultima_actualizacion}.
            </div>
          </div>
          {p.estado_dataset === "demo" && (
            <div className="card p-4 sm:p-5 bg-amber-50 border-amber-200">
              <h3 className="font-bold text-amber-900 mb-1 text-sm">
                Dataset en modo demostración
              </h3>
              <p className="text-xs text-amber-800">
                Los datos para este político son ilustrativos y no han sido verificados. Antes de salir de modo demo, cada afirmación debe llegar al estándar mínimo de evidencia (≥2 fuentes independientes, al menos una oficial).
              </p>
            </div>
          )}
        </div>
      ),
    },
    {
      id: "promesas",
      label: "Promesas",
      badge: p.promesas.length,
      content: p.promesas.length === 0 ? (
        <EmptyEje
          eje="Promesas"
          desc="Aún no hay promesas documentadas para este funcionario."
        />
      ) : (
        <div className="space-y-3">
          <div className="card p-4 grid grid-cols-3 sm:grid-cols-6 gap-3 text-center">
            {(["cumplida", "en_progreso", "sin_iniciar", "por_verificar", "incumplida", "rota"] as const).map((e) => (
              <div key={e}>
                <div className="text-2xl font-black tabular-nums">{conteoEstados[e]}</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)]">
                  {e.replace("_", " ")}
                </div>
              </div>
            ))}
          </div>
          {p.promesas.map((pr) => (
            <article key={pr.id} className="card p-4 sm:p-5">
              <header className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-bold">{pr.titulo}</h3>
                  <div className="text-[11px] text-[var(--muted-foreground)] mt-1">
                    Prometida {pr.fecha_promesa} · sector {pr.sector}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <EstadoPromesaBadge estado={pr.estado} />
                  <ConfianzaBadge nivel={pr.confianza} />
                </div>
              </header>
              <p className="text-sm text-[var(--muted-foreground)] mb-3">
                {pr.descripcion}
              </p>
              {pr.evidencia && (
                <div className="text-xs bg-[var(--muted)] rounded-md p-3 mb-3">
                  <div className="font-semibold mb-1">Evidencia</div>
                  {pr.evidencia}
                </div>
              )}
              <div className="border-t border-[var(--border)] pt-3">
                <div className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] mb-1.5">
                  Fuentes
                </div>
                <FuenteList fuentes={pr.fuentes} />
              </div>
            </article>
          ))}
        </div>
      ),
    },
    {
      id: "productividad",
      label: "Productividad",
      badge: p.medidas.length,
      content: p.medidas.length === 0 ? (
        <EmptyEje
          eje="Productividad"
          desc="Aún no hay medidas legislativas u órdenes ejecutivas registradas para este funcionario."
        />
      ) : (
        <div className="space-y-2">
          {p.medidas.map((m) => (
            <article key={m.id} className="card p-4">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="font-bold text-sm">
                  {m.numero} · {m.titulo}
                </div>
                <span className="chip px-2 py-0.5 text-[10px] bg-[var(--muted)] text-[var(--muted-foreground)]">
                  {m.estado.replace("_", " ")}
                </span>
              </div>
              <div className="text-[11px] text-[var(--muted-foreground)]">
                {m.rol.replace("_", " ")} · sector {m.sector} · {m.fecha}
              </div>
            </article>
          ))}
        </div>
      ),
    },
    {
      id: "asistencia",
      label: "Asistencia",
      content: p.asistencia ? (
        <div className="card p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-4">
            <Metric
              label="Votos roll-call"
              valor={
                p.asistencia.votos_totales > 0
                  ? `${p.asistencia.votos_presentes}/${p.asistencia.votos_totales}`
                  : "—"
              }
            />
            <Metric
              label="Comisiones"
              valor={
                p.asistencia.comisiones_totales > 0
                  ? `${p.asistencia.comisiones_presentes}/${p.asistencia.comisiones_totales}`
                  : "—"
              }
            />
          </div>
          <div className="text-[11px] text-[var(--muted-foreground)] mt-3">
            Periodo: {p.asistencia.periodo}
          </div>
          <div className="border-t border-[var(--border)] pt-3 mt-3">
            <FuenteList fuentes={p.asistencia.fuentes} />
          </div>
        </div>
      ) : (
        <EmptyEje
          eje="Asistencia"
          desc="Este funcionario no es legislador, o aún no hay datos de asistencia."
        />
      ),
    },
    {
      id: "transparencia",
      label: "Transparencia",
      content: p.transparencia ? (
        <div className="space-y-3">
          <div className="card p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-4">
              <Metric
                label="Disclosures a tiempo"
                valor={p.transparencia.disclosures_a_tiempo ? "Sí" : "No"}
              />
              <Metric
                label="Datos abiertos voluntarios"
                valor={p.transparencia.participa_datos_abiertos ? "Sí" : "No"}
              />
            </div>
            <div className="border-t border-[var(--border)] pt-3 mt-3">
              <FuenteList fuentes={p.transparencia.fuentes} />
            </div>
          </div>
          {p.transparencia.casos.length > 0 && (
            <div className="card p-4">
              <h3 className="font-bold mb-3 text-sm">
                Casos ante agencias ({p.transparencia.casos.length})
              </h3>
              <ul className="space-y-2">
                {p.transparencia.casos.map((c) => (
                  <li key={c.id} className="border-l-2 border-[var(--border)] pl-3">
                    <div className="text-sm font-semibold">{c.titulo}</div>
                    <div className="text-[11px] text-[var(--muted-foreground)]">
                      {c.agencia} · {c.fecha_apertura} · {c.estado.replace("_", " ")}
                    </div>
                    <div className="text-xs mt-1">{c.resumen}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <EmptyEje
          eje="Transparencia"
          desc="Aún no hay datos de disclosures o casos disponibles para este funcionario."
        />
      ),
    },
    {
      id: "fiscal",
      label: "Fiscal",
      content: p.fiscal ? (
        <div className="card p-4 sm:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Metric
              label="Presupuesto asignado"
              valor={p.fiscal.presupuesto_asignado ? `$${p.fiscal.presupuesto_asignado.toLocaleString()}` : "—"}
            />
            <Metric
              label="Ejecutado"
              valor={p.fiscal.presupuesto_ejecutado ? `$${p.fiscal.presupuesto_ejecutado.toLocaleString()}` : "—"}
            />
            <Metric
              label="Hallazgos auditoría"
              valor={p.fiscal.hallazgos_auditoria?.toString() ?? "—"}
            />
          </div>
          <div className="text-[11px] text-[var(--muted-foreground)] mt-3">
            Periodo: {p.fiscal.periodo}
          </div>
          <div className="border-t border-[var(--border)] pt-3 mt-3">
            <FuenteList fuentes={p.fiscal.fuentes} />
          </div>
        </div>
      ) : (
        <EmptyEje eje="Fiscal" desc="Aún no hay datos fiscales para este funcionario." />
      ),
    },
    {
      id: "constituyente",
      label: "Constituyente",
      content: p.servicio ? (
        <div className="card p-4 sm:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Metric
              label="Tiempo de respuesta"
              valor={p.servicio.tiempo_respuesta_dias != null ? `${p.servicio.tiempo_respuesta_dias} días` : "—"}
            />
            <Metric
              label="Town halls (12m)"
              valor={p.servicio.town_halls_ultimos_12m?.toString() ?? "—"}
            />
            <Metric
              label="Oficina accesible"
              valor={p.servicio.oficina_accesible == null ? "—" : p.servicio.oficina_accesible ? "Sí" : "No"}
            />
          </div>
          {p.servicio.notas && (
            <div className="text-xs text-[var(--muted-foreground)] mt-3">
              {p.servicio.notas}
            </div>
          )}
          <div className="border-t border-[var(--border)] pt-3 mt-3">
            <FuenteList fuentes={p.servicio.fuentes} />
          </div>
        </div>
      ) : (
        <EmptyEje eje="Constituyente" desc="Aún no hay datos de servicio al constituyente." />
      ),
    },
    {
      id: "impacto",
      label: "Impacto",
      badge: p.impactos.length,
      content: p.impactos.length === 0 ? (
        <EmptyEje
          eje="Impacto"
          desc="Aún no hay indicadores de impacto verificados para este funcionario."
        />
      ) : (
        <div className="space-y-3">
          {p.impactos.map((i) => (
            <article key={i.id} className="card p-4 sm:p-5">
              <header className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-sm">{i.titulo}</h3>
                <ConfianzaBadge nivel={i.confianza} />
              </header>
              <p className="text-xs text-[var(--muted-foreground)] mb-2">
                {i.descripcion}
              </p>
              {(i.valor_antes || i.valor_despues) && (
                <div className="flex gap-3 items-center text-sm font-mono bg-[var(--muted)] rounded-md p-2.5 mb-2">
                  <span className="text-[var(--muted-foreground)]">{i.valor_antes ?? "—"}</span>
                  <span>→</span>
                  <span className="font-bold">{i.valor_despues ?? "—"}</span>
                </div>
              )}
              <FuenteList fuentes={i.fuentes} />
            </article>
          ))}
        </div>
      ),
    },
    {
      id: "coherencia",
      label: "Coherencia",
      badge: p.coherencia.length,
      content: p.coherencia.length === 0 ? (
        <EmptyEje
          eje="Coherencia"
          desc="Aún no se han registrado comparaciones entre posiciones públicas para este funcionario."
        />
      ) : (
        <div className="space-y-3">
          {p.coherencia.map((c) => (
            <article key={c.id} className="card p-4 sm:p-5">
              <header className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-sm">{c.tema}</h3>
                <span className="chip px-2 py-0.5 text-[10px] bg-[var(--muted)]">
                  {c.evaluacion}
                </span>
              </header>
              <div className="grid sm:grid-cols-2 gap-3 mb-2">
                <Posicion p={c.posicion_a} />
                <Posicion p={c.posicion_b} />
              </div>
              {c.nota && (
                <div className="text-xs text-[var(--muted-foreground)]">{c.nota}</div>
              )}
            </article>
          ))}
        </div>
      ),
    },
    {
      id: "sentimiento",
      label: "Sentimiento",
      content: p.sentimiento ? (
        <div className="card p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <Metric
              label="Aprobación panel"
              valor={p.sentimiento.panel_aprobacion != null ? `${Math.round(p.sentimiento.panel_aprobacion * 100)}%` : "—"}
            />
            <Metric label="Tamaño panel" valor={p.sentimiento.panel_n?.toString() ?? "—"} />
          </div>
          <p className="text-xs text-[var(--muted-foreground)] mb-3">
            {p.sentimiento.metodologia}
          </p>
          <FuenteList fuentes={p.sentimiento.fuentes} />
        </div>
      ) : (
        <EmptyEje
          eje="Sentimiento"
          desc="Sin medición de panel ciudadano disponible. Se reporta separado de los ejes objetivos para no contaminar la evidencia."
        />
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <nav className="text-xs text-[var(--muted-foreground)] mb-6">
        <Link href="/politicos" className="hover:underline">
          ← Volver al directorio
        </Link>
      </nav>

      <header className="grid sm:grid-cols-[1fr_auto] gap-6 items-start mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PartidoBadge id={p.partido} />
            <span className="text-xs text-[var(--muted-foreground)]">
              {partido.nombre}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-1">
            {p.nombre}
          </h1>
          <p className="text-base text-[var(--muted-foreground)] mb-3">
            {p.cargo_detalle ?? p.cargo}
            {p.region ? ` · ${p.region}` : ""}
          </p>
          <p className="text-sm max-w-2xl">{p.bio}</p>
          {(p.inicio_termino || p.fin_termino) && (
            <div className="text-xs text-[var(--muted-foreground)] mt-3">
              Término: {p.inicio_termino ?? "?"}
              {p.fin_termino ? ` — ${p.fin_termino}` : ""}
            </div>
          )}
        </div>
        <div className="hidden sm:block">
          <MiniRadar puntajes={p.puntajes} size={200} />
        </div>
      </header>

      <Tabs tabs={tabs} />
    </div>
  );
}

function Metric({ label, valor }: { label: string; valor: string }) {
  return (
    <div>
      <div className="text-xl font-black tabular-nums">{valor}</div>
      <div className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] mt-0.5">
        {label}
      </div>
    </div>
  );
}

function EmptyEje({ eje, desc }: { eje: string; desc: string }) {
  return (
    <div className="card p-8 text-center">
      <div className="text-sm font-bold mb-1">{eje}</div>
      <p className="text-xs text-[var(--muted-foreground)] max-w-md mx-auto">
        {desc}
      </p>
      <Link
        href="/contribuir"
        className="inline-block mt-4 text-xs font-semibold hover:underline"
      >
        ¿Tienes evidencia? Contribuye →
      </Link>
    </div>
  );
}

function Posicion({
  p,
}: {
  p: { texto: string; fecha: string; fuente: { titulo: string } };
}) {
  return (
    <div className="border-l-2 border-[var(--border)] pl-3">
      <div className="text-xs italic mb-1">"{p.texto}"</div>
      <div className="text-[10px] text-[var(--muted-foreground)]">
        {p.fecha} · {p.fuente.titulo}
      </div>
    </div>
  );
}
