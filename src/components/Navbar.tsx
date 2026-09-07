import Link from "next/link";

export default function Navbar(){
    return(
        <header className="border-b border-zinc-800 bg-zinc-950 px-6 py-4">
            <Link
            href="/"
            className="font-display text-3xl tracking-wide text-red-600"
            >
                MatchMovie
            </Link>

        </header>
    )
}