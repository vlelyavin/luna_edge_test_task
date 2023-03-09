import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MovieList } from "../components/MovieList";
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
