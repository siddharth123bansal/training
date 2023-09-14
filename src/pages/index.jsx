import React, { useEffect, useState } from 'react'; 
import { Inter } from "next/font/google";
import MovieList from "./MoviesList";
import Headers from '@/components/Headers';
const inter = Inter({ subsets: ["latin"] });
const axios = require('axios');
function IndexPage() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    // Fetch movie data from your API
    axios.get('http://localhost:3001/movies')
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div>
    <Headers/>
      <h1 className='text-7xl text-red-500 m-10'>Movies List</h1>
      <MovieList dataarray={movieData} />
    </div>
  );
}

export default IndexPage;