import { useSelector } from "react-redux";
import { StateInterface } from "../../typescript/interfaces";
import { MovieListItem } from "../MovieListItem";

export const MovieList = () => {
  const movies = useSelector((state: StateInterface) => state.movies);
  return (
    <div className="max-w-[1100px] w-full flex flex-wrap justify-center gap-5 px-10">
      {movies?.map((movie: any) => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};
