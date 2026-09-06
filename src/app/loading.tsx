export default function Loading(){
    return(
        <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
            <div className="mb-8 h-9 w-64 animate-pulse rounded bg-zinc-800"/>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {Array.from({ length : 12}).map((_, i) =>(
                        <div
                            key={i}
                            className="aspect-[2/3] animate-pulse rounded-lg bg-zinc-800"
                            />
                    ))}
                </div>
        </main>
    );
}