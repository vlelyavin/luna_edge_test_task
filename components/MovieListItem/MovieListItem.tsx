import Link from "next/link";
import { MovieInfoInterface } from "../../typescript/interfaces";
import { MovieImage } from "../MovieImage/MovieImage";

export const MovieListItem = ({ movie }: MovieInfoInterface) => {
  return (
    <Link href={`/movies/${movie.imdbID}`} className="relative w-[200px] h-[250px] flex flex-col">
      <div className="h-full w-full overflow-hidden object-center">
        <MovieImage poster={movie.Poster} width={200} height={250} />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex p-3 grow flex-col items-center justify-center text-center bg-dimGray hover:bg-gray duration-300">
        <div>{movie.Title}</div>
      </div>
    </Link>
  );
};
