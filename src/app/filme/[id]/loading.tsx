export default function Loading(){
    return(
        <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
            <div className="flex flex-col gap-8 sm:flex-row">
                <div className="h-[513px] w-[342px] animate-pulse rounded-lg bg-zinc-800"/>

                <div className="flex flex-1 flex-col gap-4">
                        <div className="h-9 w-2/3 animate-pulse rounded bg-zinc-800" />
                        <div className="h-5 w-1/3 animate-pulse rounded bg-zinc-800 "/>
                        <div className="h-20 w-full max-w-2xl animate-pulse rounded bg-zinc-800" />
                    </div>
                </div>
        </main>
    );
}
