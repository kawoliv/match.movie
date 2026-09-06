import { MovieListResponse } from "@/types/movie";
import { MovieDetails } from "@/types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

export async function getPopularMovies(): Promise<MovieListResponse> {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
}

export async function searchMovies(query: string): Promise<MovieListResponse>{
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
    query
  )}`;

  const response = await fetch(url);

    if (!response.ok){
      throw new Error(`TMDB request failed: ${response.status}`);
    }

    return response.json();
  }

export async function getMovieDetails(id:string): Promise<MovieDetails>{
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`;

  const response = await fetch (url);

  if(!response.ok){
    throw new Error(`TMDB request failed: ${response.status}`)
  }

  return response.json();
  
}


