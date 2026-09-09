"use client";

import { useCallback, useState } from "react";
import { Movie } from "@/types/movie";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";

interface MovieGridProps {
  initialMovies: Movie[];
}

export default function MovieGrid({ initialMovies }: MovieGridProps) {

  const [popularMovies, setPopularMovies] = useState(initialMovies);
  const [page,setPage] = useState(1);
  const[hasMore, setHasMore] = useState(true);
  const[isLoading, setIsLoading] = useState(false);

  const [results, setResults] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  const handleResults = useCallback((movies: Movie[], searchQuery: string) => {
    setResults(movies);
    setQuery(searchQuery);
  }, []);

  async function loadMore(){
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const nextPage = page + 1;
    const response = await fetch(`/api/movies?page=${nextPage}`);
    const data = await response.json();

    setPopularMovies((current) => [...current, ...data.results]);
    setPage(nextPage);
    setHasMore(nextPage < data.total_pages);
    setIsLoading(false)
  }

  const movies = query ? results : popularMovies;

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="flex items-center gap-3 font-display text-3xl tracking-wide">
          <span className="h-7 w-1 rounded-full bg-red-600" />
          {query ? "Resultados da busca" : "Filmes populares"}
        </h2>

        <SearchBar onResults={handleResults} />
      </div>

      {movies.length === 0 ? (
        <p className="mt-16 text-center text-sm text-zinc-500">
          Nenhum filme encontrado para{" "}
          <span className="text-zinc-300">&ldquo;{query}&rdquo;</span>.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {!query && hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="rounded-lg border border-white/10 bg-zinc-900 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-800 disabled:opacity-50"
            >
              {isLoading?"Carregando..." : "Carregar mais"}
          </button>
        </div>
      )}
    </>
  );
}
