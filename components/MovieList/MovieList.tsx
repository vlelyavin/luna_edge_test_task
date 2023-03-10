import { useSelector } from "react-redux";
import { StateInterface } from "../../typescript/interfaces";
import { Loader } from "../Loader";
import { MovieListItem } from "../MovieListItem";

export const MovieList = () => {
  const movies = useSelector((state: StateInterface) => state.movies);
  const loading = useSelector((state: StateInterface) => state.loading);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1100px] w-full flex flex-wrap justify-center gap-5">
      {movies?.map((movie: any) => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};
