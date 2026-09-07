import Image from "next/image";
import Link from "next/link";
import { getMovieDetails } from "@/lib/tmdb";

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieDetails(id);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "";

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="relative h-[45vh] min-h-[280px] w-full">
        {movie.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="-mt-36 flex flex-col gap-8 sm:flex-row sm:items-end">
          {movie.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
              width={220}
              height={330}
              className="h-auto w-40 shrink-0 rounded-xl object-cover shadow-2xl shadow-black/60 ring-1 ring-white/10 sm:w-56"
            />
          )}

          <div className="pb-2">
            <h1 className="font-display text-4xl leading-none tracking-wide sm:text-6xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="mt-3 text-sm italic text-zinc-400">
                {movie.tagline}
              </p>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-300">
              {movie.vote_average > 0 && (
                <span className="flex items-center gap-1">
                  <span className="text-amber-400">★</span>
                  <span className="font-semibold">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </span>
              )}
              {year && <span>{year}</span>}
              {movie.runtime > 0 && (
                <span>
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <section className="mt-10 max-w-3xl">
          <h2 className="flex items-center gap-3 font-display text-2xl tracking-wide">
            <span className="h-5 w-1 rounded-full bg-red-600" />
            Sinopse
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {movie.overview || "Sinopse não disponível em português."}
          </p>
        </section>

        <Link
          href="/"
          className="mt-12 inline-block text-sm text-zinc-400 transition-colors hover:text-red-500"
        >
          ← Voltar para a home
        </Link>
      </div>
    </main>
  );
}
