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
  };
}

export interface StateInterface {
  loading: boolean;
  movies: Array<DetailedMovieInfoInterface>;
  error: string;
  pages: number;
}

export interface ActionInterface {
  type: string;
  payload: any;
}

export interface SelectedPageInterface {
  selected: number;
}

export interface SearchBarPropsInterface {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}
