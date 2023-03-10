import { Description } from "../../components/Description/Description";
import { DetailedMovieInfoInterface, ParamsInterface, StateInterface } from "../../typescript/interfaces";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToSaved } from "../../actions/actions";
import Head from "next/head";

export default function DetailedMovieInfo({ movie }: { movie: DetailedMovieInfoInterface }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToSaved(movie.Title));
  };
  return (
    <>
      <Head>
        <title>Detailed movie info</title>
        <meta name="description" content="Learn more about selected movie" />
      </Head>
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
              <MovieImage poster={movie.Poster} width={300} height={350} />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <Description property="Year : " value={movie.Year} />
              <Description property="Genre : " value={`${movie.Type}, ${movie.Genre}`} />
              <Description property="Country : " value={movie.Country} />
              <Description property="Director : " value={movie.Director} />
              <Description property="Actors : " value={movie.Actors} />
              <Description property="Awards : " value={movie.Awards} />
              <Button title="Save" handleClick={handleClick} />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold">Movie plot</div>
            <div>{movie.Plot}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: ParamsInterface) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}?i=${params.id}&plot=full&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const movie = await response.json();
  return {
    props: { movie },
  };
}
