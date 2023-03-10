import { MovieImageInterface } from "../../typescript/interfaces";
import Image from "next/image";

export const MovieImage = ({ poster, width, height }: MovieImageInterface) => {
  return (
    <>
      {poster === "N/A" ? (
        <p>No image</p>
      ) : (
        <Image
          src={poster}
          alt="movieImage"
          width={width}
          height={height}
          priority
          className="w-full h-full object-cover"
        />
      )}
    </>
  );
};
