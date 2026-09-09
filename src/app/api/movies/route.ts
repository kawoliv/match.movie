import { NextRequest, NextResponse } from "next/server";
import { getPopularMovies } from "@/lib/tmdb";


export async function GET(request:NextRequest){
    const page = Number(request.nextUrl.searchParams.get("page")) || 1;

    const data = await getPopularMovies(page);

    return NextResponse.json(data)
}