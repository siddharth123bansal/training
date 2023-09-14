// components/ContactForm.js
import React from 'react';
import axios from 'axios';
const handleSubmit = async (e) => {
    e.preventDefault();
    const film = e.target.elements.filmname.value;
    const duration = parseInt(e.target.elements.duration.value, 10);
    const releasedate = e.target.elements.timestamp.value;
    const description = e.target.elements.description.value;
    const type = e.target.elements.category.value;
    const country = e.target.elements.country.value;
    const formattedTimestamp = new Date(releasedate).toISOString();
    const data = {
      film,
      duration,
      releasedate: formattedTimestamp,
      description,
      type,
      country,
    };
  
    try {
      const response = await axios.post('http://localhost:3001/movies/add', data);
      console.log('Response:', response.data);
      alert('Film created successfully!');
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the film.');
    }
  };
const ContactForm = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Film Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filmname">
          Film Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="filmname"
          type="text"
          placeholder="Enter the film name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
          Duration (in minutes)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="duration"
          type="number"
          min="0"
          placeholder="Enter the duration (in minutes)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timestamp">
          Release Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="timestamp"
          type="datetime-local"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Enter a description of the film"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
        >
          <option value="bollywood">Bollywood</option>
          <option value="hollywood">Hollywood</option>
          <option value="tv_shows">TV Shows</option>
          <option value="web_shows">Web Shows</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
          Country
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="country"
          type="text"
          placeholder="Enter the country of the film"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
