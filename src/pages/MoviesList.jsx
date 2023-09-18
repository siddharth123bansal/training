import React from 'react';
import MovieCard from '@/components/MoviesCard';
import Link from 'next/link';
function formatDateToDdMmYyyy(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate())
  const month = String(date.getMonth() + 1)
  const year = date.getFullYear();
  return `${day} - ${month} - ${year}`;
}
const MovieList = ({ dataarray }) => {
   return (
    <div className="movie-list" style={{ display: 'flex',marginLeft:'20px', flexWrap: 'wrap' }}>
      {dataarray.map((movie) => (
        <Link href={`/addmovies/${movie.id}`} key={movie.id}>
        <MovieCard key={movie.id} title={movie.film} posterUrl={movie.image} releaseDate={formatDateToDdMmYyyy(movie.releasedate)} description={movie.description}/>
        </Link>
      ))}
    </div>
  );
};
export default MovieList;