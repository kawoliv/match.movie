"use client";

import { useEffect, useState } from "react";
import{ Movie } from "@/types/movie"

interface SearchBarProps{
    onResults: (movies: Movie[]) => void;
}

export default function SearchBar({onResults}: SearchBarProps){
    const[query, setQuery] = useState("");

    useEffect(()=>{
        if(!query) return;

        const timeoutId = setTimeout(async() => {
            const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`)
            const data = await response.json();
            onResults(data.results);
        },500);

        return () => clearTimeout(timeoutId);
    }, [query]);


    return(
        <input type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar filmes..."
        className="w-full max-w-md rounded-lg bg-zinc-800 px-4 py-2 text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
    );
}