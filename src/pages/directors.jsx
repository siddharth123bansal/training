import React from 'react'; 
import  { useEffect, useState } from 'react';
import DirectorCard from '@/components/DirectorsCard';
import Headers from '@/components/Headers';
import axios from 'axios';

const directorsData = [
  {
    name: 'Director 1',
    description: 'Description for Director 1',
    image: '/director1.jpg', // Replace with the actual image URL or path
  },
  {
    name: 'Director 2',
    description: 'Description for Director 2',
    image: '/director2.jpg', // Replace with the actual image URL or path
  },
  // Add more directors as needed
];

const DirectorsPage = () => {
    const [directors,setDirectors]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/directors')
        .then((response) => {
            setDirectors(response.data);
            })
        .catch((error) => {
            console.error('Error fetching director data:', error);
            }
        );
    }, [])

  return (
    <>
    <Headers/>
    <div className="directors-page">
      <h1>List of Directors</h1>
      <div className="director-list flex">
        {directors.map((director, index) => (
          <DirectorCard key={index} director={director} />
        ))}
      </div>
    </div>
    </>
  );
};

export default DirectorsPage;
