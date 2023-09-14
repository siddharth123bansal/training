import MovieCard from '@/components/MoviesCard';     
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        <MovieCard key={movie.filmid} title={movie.film} posterUrl={url} releaseDate={movie.releasedate} />
      ))}
    </div>
  );
};

export default MovieList;
