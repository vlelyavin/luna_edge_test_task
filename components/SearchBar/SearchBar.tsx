import { useDispatch } from "react-redux";
import { setError, setLoadingStatus, setMovies, setNumberOfPages } from "../../actions/actions";
import { SearchBarPropsInterface } from "../../typescript/interfaces";
import { SearchBarError } from "../SearchBarError/SearchBarError";

export const SearchBar = ({ title, setTitle }: SearchBarPropsInterface) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLoadingStatus(true));
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}?s=${title}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        return response.json();
      })
      .then((result) => {
        if (result.Error) {
          dispatch(setError(result.Error));
        } else {
          dispatch(setNumberOfPages(Math.ceil(result.totalResults / 10)));
          dispatch(setError(""));
          dispatch(setMovies(result.Search));
        }
        dispatch(setLoadingStatus(false));
      })
      .catch((e) => {
        dispatch(setLoadingStatus(false));
        dispatch(setError(e.message));
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setError(""));
    setTitle(e.target.value);
  };

  return (
    <div className="relative min-w-[300px] w-1/3 my-[40px] bg-[#0f0f0f] rounded-lg">
      <div className="flex justify-center items-center w-full h-[50px] border-1 border-white">
        <input
          className="w-3/4 bg-[#0f0f0f] outline-none h-full px-3 placeholder:text-white rounded-l-lg"
          placeholder="Enter movie name or id"
          value={title}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="w-1/4 h-full h-full  duration-300 bg-[#0f0f0f] rounded-r-lg hover:bg-[#1A1A1A] hover:rounded-lg"
        >
          Search
        </button>
      </div>
      <SearchBarError />
    </div>
  );
};
