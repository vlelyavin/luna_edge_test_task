export interface ParamsInterface {
  params: {
    id: string;
  };
}

export interface MovieInfoInterface {
  movie: {
    Poster: string;
    Title: string;
    imdbID: string;
    Year: string;
    Type: string;
  };
}

export interface DetailedMovieInfoInterface {
  movie: {
    Type: string;
    Poster: string;
    Title: string;
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Plot: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Year: string;
    imdbRating: string;
    Response?: string;
    Error?: string;
  };
}

export interface StateInterface {
  loading: boolean;
  movies: Array<DetailedMovieInfoInterface>;
  error: string;
  pages: number;
  searchQuery: string;
}

export interface SelectedPageInterface {
  selected: number;
}

export interface PageParamsInterface {
  params: {
    query: string;
    page: string;
  };
}

export interface ApiResponseInterface {
  result: { Search: Array<DetailedMovieInfoInterface>; totalResults: string; Response: boolean; Error: string };
}

export interface ActionInterface {
  type: string;
  payload: any;
}
