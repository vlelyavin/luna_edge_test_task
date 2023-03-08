import { useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setMovies } from "../../actions/actions";

export const SearchBar = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        if (result.Error) {
          dispatch(setError(result.Error));
        } else {
          dispatch(setError(""));
          dispatch(setMovies(result.Search));
        }
      })
      .catch((e) => dispatch(setError(e.message)));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setError(""));
    setTitle(e.target.value);
  };
  return (
    <div className="flex justify-center items-center w-full h-[50px] border-1 border-white">
      <input
        className="w-3/4 bg-[#0f0f0f] outline-none h-full px-3 placeholder:text-white"
        placeholder="Enter movie name or id"
        value={title}
        onChange={handleChange}
      />
      <button onClick={handleClick} className="w-1/4 h-full h-full bg-[#0f0f0f] hover:bg-[#1A1A1A]">
        Search
      </button>
    </div>
  );
};
