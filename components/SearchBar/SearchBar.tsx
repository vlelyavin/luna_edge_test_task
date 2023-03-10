import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setMovies, setNumberOfPages, setSearchQuery } from "../../actions/actions";
import { Button } from "../Button/Button";
import { SearchBarError } from "../SearchBarError/SearchBarError";

export const SearchBar = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.query) {
      setTitle(router.query.query.toString());
    }
  }, [router.query.query]);

  const handleClick = () => {
    router.push(`/search/${title}/1`);
    dispatch(setSearchQuery(title));
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}?s=${title}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        return response.json();
      })
      .then((result) => {
        if (result.Error) {
          dispatch(setNumberOfPages(0));
          dispatch(setError(result.Error));
          dispatch(setMovies([]));
        } else {
          dispatch(setNumberOfPages(Math.ceil(result.totalResults / 10)));
          dispatch(setError(""));
          dispatch(setMovies(result.Search));
        }
      })
      .catch((e) => {
        dispatch(setError(e.message));
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setError(""));
    setTitle(e.target.value);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="min-w-[400px] w-1/2 flex justify-center items-center gap-5 min-h-[50px] my-[40px] max-[1000px]:flex-col">
      <div className="relative w-full h-full bg-dimGray rounded-lg">
        <div className="flex items-center w-full h-full">
          <input
            className="w-full bg-dimGray outline-none h-full px-3 placeholder:text-primary rounded-l-lg"
            placeholder="Enter movie title"
            value={title}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <Button title="Search" handleClick={handleClick} />
        </div>
        <SearchBarError />
      </div>
      <Link href="/savedMovies">
        <Button title="Saved" />
      </Link>
    </div>
  );
};
