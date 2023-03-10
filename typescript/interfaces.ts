export interface ParamsInterface {
  params: {
    id: string;
  };
}

export interface MovieInfoInterface {
  Poster: string;
  Title: string;
  imdbID: string;
  Year: string;
  Type: string;
}

export interface DetailedMovieInfoInterface {
  Title: string;
  Poster: string;
  imdbID: string;
  Year: string;
  Type: string;
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Plot: string;
  Rated: string;
  Released: string;
  Runtime: string;
  imdbRating: string;
}

export interface StateInterface {
  movies: Array<MovieInfoInterface>;
  error: string;
  searchQuery: string;
  savedMovies: Array<string>;
  pages: number;
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

export interface MovieImageInterface {
  poster: string;
  width: number;
  height: number;
}

export interface ButtonInterface {
  handleClick?: () => void;
  title: string;
}
