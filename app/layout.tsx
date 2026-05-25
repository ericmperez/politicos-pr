import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Índice Cívico PR — Medidor de políticos de Puerto Rico",
  description:
    "Observatorio cívico independiente que mide promesas, productividad, transparencia, eficiencia fiscal e impacto comunitario de los políticos de Puerto Rico, asistido por inteligencia artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)] sticky top-0 z-20 backdrop-blur-sm/0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="inline-block w-7 h-7 rounded-md bg-gradient-to-br from-slate-800 to-slate-600 text-white text-[11px] font-black grid place-items-center">
            IC
          </span>
          <span className="text-base">
            Índice Cívico <span className="text-[var(--muted-foreground)]">PR</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link
            href="/politicos"
            className="px-3 py-2 rounded-md hover:bg-[var(--muted)]"
          >
            Políticos
          </Link>
          <Link
            href="/partidos"
            className="px-3 py-2 rounded-md hover:bg-[var(--muted)]"
          >
            Partidos
          </Link>
          <Link
            href="/como-medimos"
            className="px-3 py-2 rounded-md hover:bg-[var(--muted)]"
          >
            Metodología
          </Link>
          <Link href="/contribuir" className="btn-primary text-xs">
            Contribuir
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid sm:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold mb-2">Índice Cívico PR</div>
          <p className="text-[var(--muted-foreground)]">
            Observatorio cívico independiente y sin fines de lucro. Datos
            verificables con derecho de réplica.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">El proyecto</div>
          <ul className="space-y-1 text-[var(--muted-foreground)]">
            <li>
              <Link href="/como-medimos" className="hover:underline">
                Metodología
              </Link>
            </li>
            <li>
              <Link href="/contribuir" className="hover:underline">
                Cómo contribuir
              </Link>
            </li>
            <li>
              <Link href="/derecho-replica" className="hover:underline">
                Derecho de réplica
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Aviso</div>
          <p className="text-[var(--muted-foreground)]">
            Datos en versión demo, marcados como{" "}
            <span className="font-semibold">no verificados</span> hasta que
            sean validados por la comunidad y las fuentes oficiales.
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted-foreground)]">
        © {new Date().getFullYear()} Índice Cívico PR · Código abierto · Datos
        bajo CC BY-SA 4.0
      </div>
    </footer>
  );
}
