import { getPopularMovies } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";
import Hero from "@/components/Hero";

export default async function Home() {
  const { results: movies } = await getPopularMovies();
  const [featured, ...rest] = movies;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {featured && <Hero movie={featured} />}

      <div className="mx-auto max-w-7xl px-6 py-14">
        <MovieGrid initialMovies={rest} />
      </div>
    </main>
  );
}
