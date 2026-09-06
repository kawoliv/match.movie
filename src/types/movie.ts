export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

export interface Genre {
  id:number;
  name:string;
}

export interface MovieDetails extends Movie{
  genres:Genre[];
  runtime:number;
  tagline:string;
}
