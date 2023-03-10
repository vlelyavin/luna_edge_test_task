import { useSelector } from "react-redux";
import { StateInterface } from "../typescript/interfaces";
import Head from "next/head";

export default function SavedMoviesPage() {
  const savedMovies = useSelector((state: StateInterface) => state.savedMovies);
  return (
    <>
      <Head>
        <title>Saved movies</title>
        <meta name="description" content="Saved movies" />
      </Head>
      <div className="w-screen h-screen text-xl flex flex-col items-center pt-10 gap-5">
        {savedMovies.length > 0 ? savedMovies.map((title, id) => <p key={id}>{title}</p>) : <p>No saved films</p>}
      </div>
    </>
  );
}
