import React, { useEffect, useState } from 'react';
import Headers from '@/components/Headers';
import { useRouter } from 'next/router';
import MovieList from '../MoviesList';
import axios from 'axios';
import MovieDetails from '../MoviesDetails';
// const data = {
//   country: "Bharat",
//   description: "hello world",
//   directorData: [
//     { name: "Director 1" },
//     { name: "Director 2" },
//   ],
//   duration: 3,
//   film: "Api Test",
//   filmid: 1,
//   releasedate: "2023-09-28T14:23:15.000Z",
//   type: "hollywood",
//   views: null,
// };
function IDpage() {
  const [movieData, setMovieData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const id = parseInt(router.query.id);
    if (!isNaN(id)) {
      const url = `http://localhost:3001/movies/${id}`;
      console.log("url", url);
      axios
        .get(url)
        .then((response) => {
          const dataArray = Array.isArray(response.data) ? response.data : [response.data];
          setMovieData(dataArray);
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
    }
  }, [router.query.id]);

  useEffect(() => {
    console.log("Updated movieData:", movieData);
  }, [movieData]);

  return (
    <div>
      <Headers />
      <h1 className='text-7xl text-red-500 m-10'>{movieData.film}</h1>
     <MovieDetails movie={movieData[0]} />
    </div>
  );
}

export default IDpage;
