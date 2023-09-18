import React, { useEffect, useState } from 'react';
import MovieList from "./MoviesList";
import Headers from '@/components/Headers';
import Loading from '@/components/Loading';
const axios = require('axios');
function IndexPage() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      axios.get('http://localhost:3001/movies')
        .then((response) => {
          setMovieData(response.data);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
      });
  

  return (
    <>
    <Headers/>
    {isLoading?(<Loading/>):(
    <div>
      <h1 className='text-7xl text-red-500 m-10'>Movies</h1>
      <MovieList dataarray={movieData} />
      </div>
    )}
    </>
  );
}

export default IndexPage;