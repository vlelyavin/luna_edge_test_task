import Link from "next/link";
import { useDispatch } from "react-redux";
import { setLoadingStatus } from "../../actions/actions";
import { MovieInfoInterface } from "../../typescript/interfaces";

export const MovieListItem = ({ movie }: MovieInfoInterface) => {
  const dispatch = useDispatch();
  return (
    <Link
      href={`/movies/${movie.imdbID}`}
      onClick={() => dispatch(setLoadingStatus(true))}
      className="relative w-[200px] h-[250px] flex flex-col"
    >
      <div className="h-full w-full">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex p-3 grow flex-col items-center justify-center text-center bg-dimGray">
        <div>{movie.Title}</div>
      </div>
    </Link>
  );
};
