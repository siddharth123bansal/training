// src/pages/MovieList.jsx
import React from 'react';
import MovieCard from '@/components/MoviesCard';
import Link from 'next/link';
function formatDateToDdMmYyyy(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate())
  const month = String(date.getMonth() + 1) // Month is zero-based, so we add 1
  const year = date.getFullYear();

  return `${day} - ${month} - ${year}`;
}
const MovieList = ({ dataarray }) => {
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zb4Tljpe8TLrYAuPGBiWXWkkpvV7dGjzGA&usqp=CAU';

  return (
    <div className="movie-list" style={{ display: 'flex',marginLeft:'20px', flexWrap: 'wrap' }}>
      {dataarray.map((movie) => (
        <Link href={`/addmovies/${movie.filmid}`} key={movie.filmid}>
        <MovieCard key={movie.filmid} title={movie.film} posterUrl={url} releaseDate={formatDateToDdMmYyyy(movie.releasedate)} description={movie.description}/>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
