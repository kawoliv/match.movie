import { getPopularMovies } from "@/lib/tmdb";
import Image from "next/image";

export default async function Home() {
  const { results: movies } = await getPopularMovies();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">
        Filmes populares
      </h1>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {movies.map((movie) => (
            <div key={ movie.id} className="flex flex-col gap-2">
              {movie.poster_path && (
                <Image
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                width={342}
                height={513}
                className="rounded-lg object-cover"
                />
              )}
              <p className="text-sm font-medium">{movie.title}</p>

            </div>
          ))}
        </div>
    </main>
  );
}
