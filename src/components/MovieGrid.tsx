"use client"

import { useState } from "react";
import Image from "next/image";
import { Movie } from "@/types/movie"
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

interface MovieGridProps{
    initialMovies: Movie[];
}

export default function MovieGrid({initialMovies}:MovieGridProps){
    const [movies,setMovies] = useState(initialMovies);

    return(
        <>
        <SearchBar onResults={setMovies}/>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {movies.map((movie) => (
                <div key={movie.id} className="flex flex-col gap-2">
                    <Link href={`/filme/${movie.id}`}>
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
                </Link>
                </div>
            ))}
        </div>
    </>
  );
}