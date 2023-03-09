import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MovieList } from "../components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { SelectedPageInterface, StateInterface } from "../typescript/interfaces";
import ReactPaginate from "react-paginate";
import { setError, setLoadingStatus, setMovies } from "../actions/actions";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination/Pagination";

export default function Home() {
  const [title, setTitle] = useState("");

  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <SearchBar title={title} setTitle={setTitle} />
      <MovieList />
      <Pagination title={title} />
    </div>
  );
}
