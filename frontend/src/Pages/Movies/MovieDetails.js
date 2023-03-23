import React from 'react';


const MovieDetails = ({ title, description, releaseYear, director, cast }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        <li>Release Year: {releaseYear}</li>
        <li>Director: {director}</li>
        <li>Cast: {cast}</li>
      </ul>
      <button>Book Tickets</button>
    </div>
  );
};

export default MovieDetails;