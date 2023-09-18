import React from 'react'; // Import your CSS file for styling
const DirectorCard = ({ director }) => {
  return (
    <div className="beautiful-card mx-5">
    {console.log("directors data",director)}
      <img className="card-image" src={director.image} alt={director.name} />
      <div className="card-content">
        <h3 className="card-title"><strong>Name </strong>{director.name}</h3>
        <p className="card-description"><strong>Age </strong>{director.age}</p>
        <p className=" text-[16px] mt-2 text-dimgray "><strong>Movies: </strong>
        {
         
          director.directorData.map((director) => director.movie.film.replace(/^\d+\.\s*/, "")).join(", ")
        }
      </p>
      </div>
    </div>
  );
};

export default DirectorCard;
