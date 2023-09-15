import axios from "axios";
import React, { useState } from "react";
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const MovieDetails = ({ movie }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...movie });

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
    setUpdatedMovie(movie);
  };

  const cancelForm = () => {
    setFormVisible(false);
  };

  const deleteMovie = () => {
    axios
      .delete(`http://localhost:3001/delete/movie/${movie.filmid}`)
      .then((response) => {
        alert("Movie deleted successfully");
        console.log("Deleted", response.data);
      })
      .catch((error) => {
        alert(error);
        console.error("Error", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "duration" ? parseInt(value) : value;
    setUpdatedMovie({
      ...updatedMovie,
      [name]: updatedValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Movie Details:", updatedMovie);
    const { directordata, ...movieDataWithoutDirectors } = updatedMovie;
    axios
      .put(`http://localhost:3001/update/movie/${movie.filmid}`, movieDataWithoutDirectors)
      .then((response) => {
        alert("Movie details updated successfully");
        console.log("Updated Movie Details:", response.data);
      })
      .catch((error) => {
        alert(error);
        console.error("Error updating movie data:", error);
      });
    setFormVisible(false);
  };

  if (!movie) {
    return null;
  }

  const { film, description, releasedate } = movie;

  return (
    <div className="relative bg-white inline-block text-center text-sm text-black font-inter mx-5">
      <div className="w-auto h-auto">
        <img
          className="w-[340px] h-[188px] object-cover"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zb4Tljpe8TLrYAuPGBiWXWkkpvV7dGjzGA&usqp=CAU"
        />
        <div className="text-[20px] font-semibold">{film}</div>
        <div style={{marginLeft:'10px'}} className="text-base font-semibold text-dimgray text-left flex items-center">
         Releasing on {formatDate(releasedate)}
        </div>
        <p style={{marginLeft:'10px'}}className="leading-[20px] text-darkslategray text-left w-80">
          {description}
        </p>
        <p style={{marginLeft:'10px'}} className="leading-[20px] text-darkslategray text-left w-80"><strong></strong>
          {movie.directorData.map((director) => director.director.name).join(", ")}
        </p>
        
        <div className="flex mt-4 space-x-4 justify-center">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            onClick={deleteMovie}
            style={{marginLeft: "10px", marginBottom:'10px'} }
          >
            Delete Movie
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={toggleForm} style={{marginBottom:'10px'}}
          >
            Update Details
          </button>
        </div>
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Update Movie Details</h2>
            <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="film" className="block text-gray-600">
                Film Title:
              </label>
              <input
                type="text"
                id="film"
                name="film"
                value={updatedMovie.film}
                onChange={handleInputChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={updatedMovie.description}
                onChange={handleInputChange}
                className="border rounded-lg px-3 py-2 w-full h-20"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="duration">
                Duration (in minutes)
              </label>
              <input
                className="border rounded-lg px-3 py-2 w-full"
                id="duration"
                name="duration"
                type="number"
                min="0"
                onChange={handleInputChange}
                value={updatedMovie.duration}
                placeholder="Enter the duration (in minutes)"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="duration">
                Movie Type
              </label>
              <input
                className="border rounded-lg px-3 py-2 w-full"
                id="type"
                name="type"
                type="text"
                value={updatedMovie.type}
                onChange={handleInputChange}
                placeholder="Enter the movie type"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="duration">
                Country
              </label>
              <input
                className="border rounded-lg px-3 py-2 w-full"
                id="country"
                name="country"
                value={updatedMovie.country}
                type="text"
                onChange={handleInputChange}
                placeholder="Enter the country of the film"
              />
            </div>
            <div className="mb-4 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Update
              </button>
              <button
                type="submit"
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 ml-4"
                onClick={cancelForm}
              >
                Cancel
              </button>
            </div>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
