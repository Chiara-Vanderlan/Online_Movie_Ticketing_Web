import React from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`/api/movies/${movieId}`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <div className="movie">
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <button>Book Now</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePage;