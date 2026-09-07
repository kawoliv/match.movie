import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <span className="font-display text-3xl leading-none tracking-wide text-red-600 transition-colors group-hover:text-red-500">
            Match<span className="text-zinc-50">Movie</span>
          </span>
        </Link>

        <span className="hidden text-[11px] uppercase tracking-[0.2em] text-zinc-500 sm:block">
          Busque · Descubra
        </span>
      </div>
    </header>
  );
}
