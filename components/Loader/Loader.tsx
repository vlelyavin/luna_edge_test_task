export const Loader = () => {
  return (
    <div className="text-center w-screen h-screen fixed top-0 left-0 bg-secondary flex justify-center items-center flex-col">
      <div className="inline-block w-[80px] h-[80px] after:content-[''] after:block after:w-[64px] after:h-[64px] after:m-2 after:rounded-full after:border-x-[6px] after:border-y-[6px] after:border-x-primary after:border-y-secondary after:animate-ring"></div>
      <p className="text-xl">Loading...</p>
    </div>
  );
};
