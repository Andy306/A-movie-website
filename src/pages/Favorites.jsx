import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No favorite movies added yet.</h2>
          <p>Start adding your favorite movies to see them here.</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;