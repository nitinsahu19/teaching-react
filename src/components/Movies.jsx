import { movies } from "../data/movies";

const Movies = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">🎬 Movie Explorer</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
              <p className="text-sm text-gray-600">
                Rating: <span className="font-medium">{movie.rating}</span>
              </p>
              <p className="text-sm text-gray-600">Year: {movie.releaseYear}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
