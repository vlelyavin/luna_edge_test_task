import { SearchBar } from "../../../components/SearchBar";
import { MovieList } from "../../../components/MovieList";
import { Pagination } from "../../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMovies, setNumberOfPages } from "../../../actions/actions";
import { ApiResponseInterface, PageParamsInterface } from "../../../typescript/interfaces";
import Head from "next/head";

export default function Page({ result }: ApiResponseInterface) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(result.Search));
    dispatch(setNumberOfPages(Math.ceil(Number(result.totalResults) / 10)));
  }, []);
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Movie search by title or id" />
      </Head>
      <div className="w-screen flex justify-center flex-col items-center">
        <SearchBar />
        <MovieList />
        <Pagination />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: PageParamsInterface) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}?s=${params.query}&page=${params.page}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const result = await response.json();
  return {
    props: { result },
  };
}
