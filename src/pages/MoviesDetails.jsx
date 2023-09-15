import axios from "axios";
import React, { useState } from "react";

const MovieDetails = ({ movie }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({

    ...movie,
  });

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
    setUpdatedMovie(movie)
  };
 const cancelForm = () => {
    setFormVisible(false);
 };

 const deleteMovie = () => {
  axios.delete(`http://localhost:3001/delete/movie/${movie.filmid}`)
  .then((response) => {
    alert("Movie deleted successfully");
    console.log("Deleted", response.data);
  })
  .catch((error) => {
    alert(error);
    console.error("Error", error);
  })

}
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
      .put(
        `http://localhost:3001/update/movie/${movie.filmid}`,
        movieDataWithoutDirectors
      )
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
      <div className="w-auto h-auto ">
        <img
          className="w-[340px] h-[188px] object-cover"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zb4Tljpe8TLrYAuPGBiWXWkkpvV7dGjzGA&usqp=CAU"
        />
        <div className="text-[20px] font-semibold">{film}</div>
        <div className="text-base font-semibold text-dimgray text-left flex items-center">
          {releasedate}
        </div>
        <p className="leading-[20px] text-darkslategray text-left w-80">
          {description}
        </p>
        <a
          className="text-base text-dimgray hover:text-blue-600 font-semibold text-left flex items-center cursor-pointer"
          onClick={toggleForm}
        >
          Update Details
        </a>
        <a
          className="text-base text-dimgray hover:text-blue-600 font-semibold text-left flex items-center cursor-pointer"
          onClick={deleteMovie}
        >
          Delete Movie
        </a>
        <div className="mt-2 flex space-x-2">
          <div className="w-[100px] h-10 bg-red flex items-center justify-center text-black font-semibold">
            Play Now
          </div>
          <div className="w-[100px] h-10 bg-darkgray flex items-center justify-center text-black font-semibold">
            Watch Trailer
          </div>
        </div>
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Update Movie Details
            </h2>
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mx-5"
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
