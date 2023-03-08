import { SearchBar } from "../components/SearchBar";
import { MovieList } from "../components/MovieList";
import { useSelector } from "react-redux";
import { StateInterface } from "../typescript/interfaces";

export default function Home() {
  const error = useSelector((state: StateInterface) => state.error);
  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <div className="relative min-w-[300px] w-1/3 my-[50px]">
        <SearchBar />
        {error && <p className="absolute left-0 bottom-[-25px] w-full text-center">{error}</p>}
      </div>
      <MovieList />
    </div>
  );
}
