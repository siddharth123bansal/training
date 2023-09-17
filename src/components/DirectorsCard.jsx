import React from 'react'; // Import your CSS file for styling

const DirectorCard = ({ director }) => {
  return (
    <div className="beautiful-card mx-5">
      <img className="card-image" src={director.image} alt={director.name} />
      <div className="card-content">
        <h3 className="card-title"><strong>Name </strong>{director.name}</h3>
        <p className="card-description"><strong>Age </strong>{director.age}</p>
      </div>
    </div>
  );
};

export default DirectorCard;
