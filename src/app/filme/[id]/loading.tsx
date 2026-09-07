export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="h-[45vh] min-h-[280px] w-full animate-pulse bg-zinc-900" />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="-mt-36 flex flex-col gap-8 sm:flex-row sm:items-end">
          <div className="aspect-[2/3] w-40 shrink-0 animate-pulse rounded-xl bg-zinc-800 sm:w-56" />

          <div className="flex flex-col gap-4 pb-2">
            <div className="h-12 w-72 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-48 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-56 animate-pulse rounded bg-zinc-800" />
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          <div className="h-7 w-20 animate-pulse rounded-full bg-zinc-800" />
          <div className="h-7 w-24 animate-pulse rounded-full bg-zinc-800" />
        </div>

        <div className="mt-10 max-w-3xl">
          <div className="h-7 w-40 animate-pulse rounded bg-zinc-800" />
          <div className="mt-4 h-20 w-full animate-pulse rounded bg-zinc-800" />
        </div>
      </div>
    </main>
  );
}
