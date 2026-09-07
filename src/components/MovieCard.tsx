import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "";

  return (
    <Link href={`/filme/${movie.id}`} className="group block">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/5 transition duration-300 group-hover:shadow-xl group-hover:shadow-red-950/40 group-hover:ring-red-600/40">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-2 text-center text-xs text-zinc-600">
            Sem imagem
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {movie.vote_average > 0 && (
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[11px] font-semibold backdrop-blur-sm">
            <span className="text-amber-400">★</span>
            <span className="text-zinc-100">{movie.vote_average.toFixed(1)}</span>
          </div>
        )}
      </div>

      <h3 className="mt-3 line-clamp-2 text-sm font-medium leading-snug text-zinc-100 transition-colors group-hover:text-red-500">
        {movie.title}
      </h3>
      {year && <p className="mt-0.5 text-xs text-zinc-500">{year}</p>}
    </Link>
  );
}
