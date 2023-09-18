import Headers from '@/components/Headers';
import axios from 'axios';
import React, { useState } from 'react';

const DirectorForm = ({ onAddDirector }) => {
  const [directorData, setDirectorData] = useState({
    name: '',
    age: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDirectorData({
      ...directorData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onAddDirector(directorData);
    console.log(directorData);
    directorData.age=parseInt(directorData.age);
    axios.post('https://movies-7hu0.onrender.com/directors/add', directorData)
    .then((response) => {
        console.log(response);
        alert("Director Added Successfully");
        }
    )
    .catch((error) => {
        console.error('Error adding director data:', error);
        alert(error);
        }
    );
  };

  return (
    <>
    <Headers/>
    <div style={{marginTop:'50px'}} className="director-form-container mt-5">
      <h2 ><strong>Add a Director</strong></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="add-button">Add Director</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default DirectorForm;
