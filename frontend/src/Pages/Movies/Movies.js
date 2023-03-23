import React from 'react';
import MovieDetails from './MovieDetails';
import Header from '../Header';
import '../Home/styles.css'

const movies = [
  {
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    releaseYear: 1994,
    director: 'Frank Darabont',
    cast: 'Tim Robbins, Morgan Freeman, Bob Gunton',
  },
  {
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    releaseYear: 1972,
    director: 'Francis Ford Coppola',
    cast: 'Marlon Brando, Al Pacino, James Caan',
  },
  // more movie data...
];

const MovieList = () => {
  return (
    <div >
        <Header></Header>
    <div >
      {movies.map((movie) => (
        <MovieDetails
          key={movie.title}
          title={movie.title}
          description={movie.description}
          releaseYear={movie.releaseYear}
          director={movie.director}
          cast={movie.cast}
          
        />
      ))}
    </div>
    </div>
  );
};

export default MovieList;