export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-8 text-center text-xs text-zinc-500 sm:flex-row sm:justify-between sm:text-left">
        <p>
          <span className="font-display text-base tracking-wide text-zinc-300">
            MatchMovie
          </span>{" "}
          — projeto de estudo em Next.js
        </p>
        <p>
          Dados fornecidos por{" "}
          <a
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 underline-offset-2 transition-colors hover:text-red-500 hover:underline"
          >
            TMDB
          </a>
        </p>
      </div>
    </footer>
  );
}
