import { DetailedMovieInfoInterface, ParamsInterface } from "../../typescript/interfaces";

export default function DetailedMovieInfo({ movie }: DetailedMovieInfoInterface) {
  return (
    <div className="w-screen flex justify-center items-center py-8">
      <div className="max-w-[1000px] w-full px-10">
        <header className="flex justify-between items-center">
          <div>
            <div className="text-[50px] font-bold">{movie.Title}</div>
            <div className="flex gap-2">
              <p>{movie.Year}</p>
              <p>{movie.Rated}</p>
              <p>{movie.Runtime}</p>
            </div>
          </div>
          <div className="text-center min-w-[100px]">
            <p>IMDb rating</p>
            <p>
              <span className="text-xl font-bold">{movie.imdbRating}</span>/10
            </p>
          </div>
        </header>
        <div className="flex w-full h-[350px] justify-left gap-5 my-5">
          <div className="min-w-[200px] w-[300px] h-full">
            <img src={movie.Poster} alt="moviePoster" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p>
              <span className="font-bold">Year : </span>
              {movie.Year}
            </p>
            <p>
              <span className="font-bold">Genre : </span>
              {movie.Type}, {movie.Genre}
            </p>

            <p>
              <span className="font-bold">Country : </span>
              {movie.Country}
            </p>
            <p>
              <span className="font-bold">Director : </span>
              {movie.Director}
            </p>
            <p>
              <span className="font-bold">Actors : </span>
              {movie.Actors}
            </p>
            <p>
              <span className="font-bold">Awards : </span>
              {movie.Awards}
            </p>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Movie plot</div>
          <div>{movie.Plot}</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }: ParamsInterface) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}?i=${params.id}&plot=full&apikey=${process.env.API_KEY}`
  );
  const movie = await response.json();
  return {
    props: { movie },
  };
}
