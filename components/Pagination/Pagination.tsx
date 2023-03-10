import { useDispatch, useSelector } from "react-redux";
import { StateInterface, SelectedPageInterface } from "../../typescript/interfaces";
import { setLoadingStatus, setError, setMovies, setSearchQuery } from "../../actions/actions";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Pagination = () => {
  const state = useSelector((state: StateInterface) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.query.query) {
      dispatch(setSearchQuery(router.query.query.toString()));
    }
  }, []);

  const handlePageClick = (e: SelectedPageInterface) => {
    router.push(`/search/${state.searchQuery}/${e.selected + 1}`);
    dispatch(setLoadingStatus(true));
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}?s=${state.searchQuery}&page=${e.selected + 1}&apikey=${
        process.env.NEXT_PUBLIC_API_KEY
      }`
    )
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
  return (
    <>
      {state.movies?.length > 0 && (
        <div className="my-5">
          <ReactPaginate
            previousLabel={"Back"}
            previousLinkClassName={"h-full w-full flex items-center justify-center px-3"}
            nextLabel={"Next"}
            nextLinkClassName={"h-full w-full flex items-center justify-center px-3"}
            breakLabel={"..."}
            breakClassName={"px-3 py-1"}
            pageCount={state.pages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            className={"flex text-xl"}
            pageClassName={"w-full h-full "}
            pageLinkClassName={"w-[40px] h-[40px] flex justify-center items-center"}
            activeClassName={"bg-[#0f0f0f] rounded-md"}
          />
        </div>
      )}
    </>
  );
};
