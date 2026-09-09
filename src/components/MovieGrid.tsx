"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import { Movie, MovieListResponse } from "@/types/movie";
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
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleResults = useCallback((movies: Movie[], searchQuery: string) => {
    setResults(movies);
    setQuery(searchQuery);
  }, []);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const nextPage = page + 1;
    const response = await fetch(`/api/movies?page=${nextPage}`);
    const data : MovieListResponse = await response.json();

    setPopularMovies((current) => {
      const idsAtuais = new Set(current.map((movie) => movie.id));
      const novos = data.results.filter((movie) => !idsAtuais.has(movie.id));
      return [...current, ...novos];
    });
    setPage(nextPage);
    setHasMore(nextPage < data.total_pages);
    setIsLoading(false);
  }, [isLoading, hasMore, page]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if(!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) =>{
        if(entries[0].isIntersecting){
          loadMore();
        }
      },
      {rootMargin:"300px"}
    );

    observer.observe(sentinel);

    return() => observer.disconnect(); 
   }, [loadMore, query]);

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
        <div ref={sentinelRef} className="flex justify-center py-12">
          <span className="text-sm text-zinc-500">Carregando mais filmes...</span>
        </div>
      )}
    </>
  );
}
