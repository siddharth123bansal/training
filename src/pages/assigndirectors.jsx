import { useState, useEffect } from 'react';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import Headers from '@/components/Headers';
import Loading from '@/components/Loading';

const DirectorAssignment = () => {
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [selectedDirectorId, setSelectedDirectorId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://movies-7hu0.onrender.com/movies')
        .then((response) => {
            setMovies(response.data);
            })
        .catch((error) => {
            console.error('Error fetching director data:', error);
            }
        );
    axios.get('https://movies-7hu0.onrender.com/directors')
        .then((response) => {
            setDirectors(response.data);
            setTimeout(() => {
                setIsLoading(false);
              }, 2000);
            })
        .catch((error) => {
            console.error('Error fetching director data:', error);
            }
        );
  }, []);

  const handleMovieChange = (e) => {
    setSelectedMovieId(e.target.value);
  };

  const handleDirectorChange = (e) => {
    setSelectedDirectorId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both movie and director are selected
    if (!selectedMovieId || !selectedDirectorId) {
      alert('Please select a movie and a director');
      return;
    }
    const data = {
        filmid: parseInt(selectedMovieId),
        directorid: parseInt(selectedDirectorId),
    };
    console.log(data)
    axios.post('https://movies-7hu0.onrender.com/assigndirectors', data)
      .then((response) => {
        alert('Assignment successful');

      })
      .catch((error) => {
        alert('Assignment failed');
        console.error('Error:', error);
      });
  };

  return (
    <>
    <Headers/>
    {isLoading?(<Loading/>):(
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Assign Director to Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="movieSelect" className="block text-gray-600">
            Select a Movie:
          </label>
          <select
            id="movieSelect"
            onChange={handleMovieChange}
            value={selectedMovieId}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select a Movie</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.film}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="directorSelect" className="block text-gray-600">
            Select a Director:
          </label>
          <select
            id="directorSelect"
            onChange={handleDirectorChange}
            value={selectedDirectorId}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select a Director</option>
            {directors.map((director) => (
              <option key={director.id} value={director.id}>
                {director.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Assign Director
        </button>
      </form>
    </div>
  </div>
    )}
</>
  );
};

export default DirectorAssignment;
