import { getPopularMovies } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";

export default async function Home() {
  const { results: movies } = await getPopularMovies();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">
        Filmes populares
      </h1>

      <MovieGrid initialMovies={movies}/>

    </main>
  );
}
