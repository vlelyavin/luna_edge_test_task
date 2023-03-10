import { useSelector } from "react-redux";
import { StateInterface } from "../typescript/interfaces";
import { movieKeywords } from "../keywords/keywords";
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
        {savedMovies?.map((title, id) => (
          <p key={id}>{title}</p>
        ))}
      </div>
    </>
  );
}
