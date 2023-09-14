import MovieCard from '@/components/MoviesCard';     
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function formatISODateToDDMMYYYY(isoDate) {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
const MovieList =  () => {   
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/movies').then(function(response) {
            setData(response.data)
        }).catch(function(error) {
            console.log(error);
        });
    }, [])

    console.log('data', data)
    const url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zb4Tljpe8TLrYAuPGBiWXWkkpvV7dGjzGA&usqp=CAU'
  return (
    <div className="movie-list" style={{display:'flex', justifyItems:'center',flexWrap:'wrap'}}>
      {data.map((movie, index) => (
        <MovieCard key={movie.filmid} title={movie.film} posterUrl={url} releaseDate={formatISODateToDDMMYYYY(movie.releasedate)} />
      ))}
    </div>
  );
};

export default MovieList;
