export const NotFound = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-10">
        <div>
          <h1 className="font-bold text-9xl text-primary">404</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold items-center text-center">
            Uh-oh...
          </h1>
          <p className="text-center">
            ops! The page you're looking for can't be found. Try checking the
            URL or using the navigation above to find what you need.
          </p>
        </div>
      </div>
    </>
  );
};
