import React from 'react';

const MovieCard = ({ title, releaseDate, posterUrl, description }) => {
  const cardStyle = {
    border: '2px solid #fff',
    borderRadius: '15px',
    
    marginLeft: '10px',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: '#333',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    width: '250px',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    width:'280px',
    borderRadius: '10px',
  };

  const titleStyle = {
    color: '#fff',
    fontSize: '1.2rem',
    marginTop: '10px',
  };

  const releaseDateStyle = {
    color: '#ccc',
    marginTop: '5px',
  };

  const descriptionStyle = {
    color: '#ccc',
    fontSize: '0.9rem',
    marginTop: '10px',
  };

  return (
    <div className="movie-card" style={cardStyle}>
      <img src={posterUrl} alt={title} style={imageStyle} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={releaseDateStyle}>Release Date: {releaseDate}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default MovieCard;
