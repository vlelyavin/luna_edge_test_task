import { SearchBar } from "../components/SearchBar";
import { MovieList } from "../components/MovieList";
import { Pagination } from "../components/Pagination/Pagination";

export default function Home() {
  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <SearchBar />
      <MovieList />
      <Pagination />
    </div>
  );
}
