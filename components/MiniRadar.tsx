import { ORDEN_EJES, EJES } from "@/lib/ejes";
import type { PuntajeEje } from "@/lib/types";

export function MiniRadar({
  puntajes,
  size = 140,
}: {
  puntajes: PuntajeEje[];
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 12;
  const n = ORDEN_EJES.length;

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, value: number) => {
    const a = angle(i);
    const rr = r * value;
    return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
  };

  const valores = ORDEN_EJES.map((id) => {
    const pe = puntajes.find((p) => p.eje === id);
    if (!pe || pe.valor == null) return 0.05;
    return Math.max(0.05, Math.min(1, pe.valor));
  });

  const gridLevels = [0.25, 0.5, 0.75, 1];

  const polygonPoints = valores
    .map((v, i) => point(i, v).join(","))
    .join(" ");

  const sinDatos = puntajes.every((p) => p.valor == null);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-label="Mini-radar de 9 ejes"
      className="block"
    >
      {gridLevels.map((lvl, idx) => (
        <polygon
          key={idx}
          points={ORDEN_EJES.map((_, i) => point(i, lvl).join(",")).join(" ")}
          fill="none"
          stroke="var(--border)"
          strokeWidth={idx === gridLevels.length - 1 ? 1.2 : 0.5}
        />
      ))}
      {ORDEN_EJES.map((_, i) => {
        const [px, py] = point(i, 1);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={px}
            y2={py}
            stroke="var(--border)"
            strokeWidth={0.5}
          />
        );
      })}
      <polygon
        points={polygonPoints}
        fill={sinDatos ? "rgba(120,113,108,0.10)" : "rgba(30,41,59,0.25)"}
        stroke={sinDatos ? "rgba(120,113,108,0.4)" : "rgba(30,41,59,0.85)"}
        strokeWidth={1.5}
      />
      {ORDEN_EJES.map((id, i) => {
        const [px, py] = point(i, 1.15);
        const eje = EJES[id];
        return (
          <text
            key={id}
            x={px}
            y={py}
            fontSize={7.5}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--muted-foreground)"
          >
            {eje.nombre.split(" ")[0].slice(0, 8)}
          </text>
        );
      })}
    </svg>
  );
}
