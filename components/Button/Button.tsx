import { ButtonInterface } from "../../typescript/interfaces";

export const Button = ({ handleClick, title }: ButtonInterface) => {
  return (
    <button
      onClick={handleClick}
      className="w-[150px] shrink-0 h-[50px] duration-300 rounded-lg hover:bg-gray hover:rounded-lg bg-dimGray"
    >
      {title}
    </button>
  );
};
