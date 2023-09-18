import React from 'react'; 
import  { useEffect, useState } from 'react';
import DirectorCard from '@/components/DirectorsCard';
import Headers from '@/components/Headers';
import axios from 'axios';
import Loading from '@/components/Loading';

const DirectorsPage = () => {
    const [directors,setDirectors]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
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
    }, [])

  return (
    <>
    <Headers/>
    {isLoading?(<Loading/>):(
    <div className="directors-page">
    <h1 className='text-7xl text-red-500 m-5'>Directors</h1>
      <div className="director-list flex">
        {directors.map((director, index) => (
          <DirectorCard key={index} director={director} />
        ))}
      </div>
    </div>
    )}
    </>
  );
};

export default DirectorsPage;
