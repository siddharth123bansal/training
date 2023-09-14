import React from 'react';

const MovieCard = ({ title, releaseDate, posterUrl }) => {
  return (
    <div className="movie-card" style={{border:'solid #fff 2px', borderRadius:'15px', marginLeft:'10px' ,padding:'5px', marginTop:'10px'}}>
      <img src={posterUrl} alt={title} />
      <h2 className='text-white'>{title}</h2>
      <p className='text-white'>Release Date: {releaseDate}</p>
    </div>
  );
};

export default MovieCard;