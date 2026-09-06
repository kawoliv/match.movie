import { getMovieDetails } from "@/lib/tmdb";

export default async function MovieDetailsPage({
    params,
    }: {
        params: Promise<{ id: string }>
    }){
        const { id } = await params;
        const movie = await getMovieDetails(id);

        return (
            <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <p className="mt-2 text-zinc-400">{movie.tagline}</p>
                <p className="mt-4 max-w-2xl">{movie.overview}</p> 
            </main>
        );
    }