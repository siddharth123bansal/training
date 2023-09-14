import React, { useEffect, useState } from 'react';
import Headers from '@/components/Headers';
import { useRouter } from 'next/router';
import MovieList from '../MoviesList';
import axios from 'axios';

function IDpage() {
  const [movieData, setMovieData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const id = parseInt(router.query.id); // Parse the id here
    if (!isNaN(id)) {
      const url = `http://localhost:3001/movies/${id}`;
      
      // Fetch movie data from your API
      axios
        .get(url)
        .then((response) => {
          setMovieData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
    }
  }, [router.query.id]);

  useEffect(() => {
    console.log("Updated movieData:", movieData);
  }, [movieData]); // Log movieData when it changes

  return (
    <div>
      <Headers />
      <h1 className='text-7xl text-red-500 m-10'>Movies List By ID</h1>
      <MovieList dataarray={movieData} />
    </div>
  );
}

export default IDpage;
