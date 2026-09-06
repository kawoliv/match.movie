import { getMovieDetails } from "@/lib/tmdb";
import Image from "next/image";

export default async function MovieDetailsPage({
    params,
    }: {
        params: Promise<{ id: string }>
    }){
        const { id } = await params;
        const movie = await getMovieDetails(id);

        return (
            <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
                <div className="flex flex-col gap-8 sm:flex-row">
                    {movie.poster_path && (
                        <Image
                            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                            alt={movie.title}
                            width={342}
                            height={513}
                            className="h-fit rounded-lg object-cover"
                            />
                    )}

                    <div>
                        <h1 className="text-3xl font-bold">{movie.title}</h1>
                        <p className="mt-2 text-zinc-400">{movie.tagline}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                        {movie.genres.map((genre) => (
                            <span
                                key={genre.id}
                                className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                                >
                                    {genre.name}
                                </span>
                        ))}
                        </div>

                        <p className="mt-4 text-sm text-zinc-400">
                            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
                        </p>
                        
                        <p className="mt-4 max-w-2xl">{movie.overview}</p>
                    </div>
                </div> 
            </main>
        );
    }