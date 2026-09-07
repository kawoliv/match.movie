"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/types/movie";

interface SearchBarProps {
  onResults: (movies: Movie[], query: string) => void;
}

export default function SearchBar({ onResults }: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      onResults([], "");
      return;
    }

    const timeoutId = setTimeout(async () => {
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      onResults(data.results, query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, onResults]);

  return (
    <div className="relative w-full max-w-xl">
      <svg
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar filmes..."
        className="w-full rounded-full border border-white/10 bg-zinc-900/80 py-3 pl-11 pr-4 text-sm text-zinc-50 transition placeholder:text-zinc-500 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/30"
      />
    </div>
  );
}
