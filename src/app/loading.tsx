export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="h-[65vh] min-h-[420px] w-full animate-pulse bg-zinc-900" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="h-9 w-64 animate-pulse rounded bg-zinc-800" />
          <div className="h-12 w-full max-w-xl animate-pulse rounded-full bg-zinc-900" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}>
              <div className="aspect-[2/3] animate-pulse rounded-xl bg-zinc-800" />
              <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-zinc-800" />
              <div className="mt-2 h-3 w-10 animate-pulse rounded bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
