import { useDispatch, useSelector } from "react-redux";
import { StateInterface, SelectedPageInterface } from "../../typescript/interfaces";
import { setLoadingStatus, setError, setMovies } from "../../actions/actions";
import ReactPaginate from "react-paginate";

export const Pagination = ({ title }: { title: string }) => {
  const movies = useSelector((state: StateInterface) => state.movies);
  const pages = useSelector((state: StateInterface) => state.pages);
  const dispatch = useDispatch();

  const handlePageClick = (e: SelectedPageInterface) => {
    dispatch(setLoadingStatus(true));
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}?s=${title}&page=${e.selected + 1}&apikey=${
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
      {movies?.length > 0 ? (
        <div className="my-5">
          <ReactPaginate
            previousLabel={"Back"}
            previousLinkClassName={"h-full w-full flex items-center justify-center px-3"}
            nextLabel={"Next"}
            nextLinkClassName={"h-full w-full flex items-center justify-center px-3"}
            breakLabel={"..."}
            breakClassName={"px-3 py-1"}
            pageCount={pages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            className={"flex text-xl"}
            pageClassName={"w-full h-full "}
            pageLinkClassName={"w-[40px] h-[40px] flex justify-center items-center"}
            activeClassName={"bg-[#0f0f0f] rounded-md"}
          />
        </div>
      ) : null}
    </>
  );
};
