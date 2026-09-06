"use client"

import { useEffect } from "react"

export default function Error({
    error,
    retry,
}:{
    error:Error & {digest?: string};
    retry:() => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return(
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 px-6 text-zinc-50">
            <h1 className="text-2xl font-bold">Algo deu errado</h1>
            <p className="text-zinc-400">Não foi possivel carregar esse filme.</p>
            <button
                onClick={() => retry()}
                className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-700"
                >
                    Tentar novamente
            </button>
        </main>
    );
}