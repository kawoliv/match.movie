import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

interface HeroProps {
  movie: Movie;
}

export default function Hero({ movie }: HeroProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "";

  return (
    <section className="relative flex h-[65vh] min-h-[420px] w-full items-end">
      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14">
        <span className="mb-4 inline-block rounded-full border border-red-600/40 bg-red-600/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500">
          Em destaque
        </span>

        <h1 className="font-display text-5xl leading-none tracking-wide sm:text-7xl">
          {movie.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-zinc-300">
          {movie.vote_average > 0 && (
            <span className="flex items-center gap-1">
              <span className="text-amber-400">★</span>
              {movie.vote_average.toFixed(1)}
            </span>
          )}
          {year && <span>{year}</span>}
        </div>

        <p className="mt-4 line-clamp-3 max-w-xl text-sm leading-relaxed text-zinc-300">
          {movie.overview}
        </p>

        <Link
          href={`/filme/${movie.id}`}
          className="mt-7 inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
        >
          Ver detalhes
        </Link>
      </div>
    </section>
  );
}
