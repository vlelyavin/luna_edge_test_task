import { useSelector } from "react-redux";
import { StateInterface } from "../../typescript/interfaces";

export const SearchBarError = () => {
  const error = useSelector((state: StateInterface) => state.error);
  return <>{error && <p className="absolute left-0 bottom-[-25px] w-full text-center">{error}</p>}</>;
};
