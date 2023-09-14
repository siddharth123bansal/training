// src/pages/MovieList.jsx
import React from 'react';
import MovieCard from '@/components/MoviesCard';

const MovieList = ({ dataarray }) => {
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zb4Tljpe8TLrYAuPGBiWXWkkpvV7dGjzGA&usqp=CAU';

  return (
    <div className="movie-list" style={{ display: 'flex',marginLeft:'20px', flexWrap: 'wrap' }}>
      {dataarray.map((movie) => (
        <MovieCard key={movie.filmid} title={movie.film} posterUrl={url} releaseDate={movie.releasedate} />
      ))}
    </div>
  );
};

export default MovieList;
