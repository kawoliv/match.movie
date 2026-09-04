import { NextRequest, NextResponse } from "next/server";
import { searchMovies } from "@/lib/tmdb";

export async function GET(request:NextRequest){
    const query = request.nextUrl.searchParams.get("query");

    if (!query){
        return NextResponse.json({results:[]});
    }

    const data = await searchMovies(query);

    return NextResponse.json(data);
}