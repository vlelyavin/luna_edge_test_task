import { SearchBar } from "../components/SearchBar";
import Head from "next/head";
import { movieKeywords } from "../keywords/keywords";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie Search App</title>
        <meta name="description" content="Search for your favorite movies" />
        <meta name="keywords" content={movieKeywords.join(",")} />
      </Head>
      <div className="w-screen flex justify-center">
        <SearchBar />
      </div>
    </>
  );
}
