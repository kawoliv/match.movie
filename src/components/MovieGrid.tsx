"use client";

import { useCallback, useState } from "react";
import { Movie } from "@/types/movie";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";

interface MovieGridProps {
  initialMovies: Movie[];
}

export default function MovieGrid({ initialMovies }: MovieGridProps) {
  const [results, setResults] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  const handleResults = useCallback((movies: Movie[], searchQuery: string) => {
    setResults(movies);
    setQuery(searchQuery);
  }, []);

  const movies = query ? results : initialMovies;

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
    </>
  );
}
