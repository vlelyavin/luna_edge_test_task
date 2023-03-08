import Link from "next/link";
import { MovieInfoInterface } from "../../typescript/interfaces";

export const MovieListItem = ({ movie }: MovieInfoInterface) => {
  return (
    <div className="w-[200px] h-[300px] bg-[#0f0f0f] flex flex-col">
      <div className="h-[80%] w-full">
        <img src={movie.Poster} alt="moviePoster" className="w-full h-full" />
      </div>
      <div className="w-full min-h-[20%] flex flex-col items-center justify-center">
        <Link href={`/movies/${movie.imdbID}`}>
          <div>{movie.Title}</div>
        </Link>
      </div>
    </div>
  );
};
