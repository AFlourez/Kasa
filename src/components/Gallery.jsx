import React from 'react';
import { Link } from 'react-router-dom';
import locations from '../data/data.js';
import '../scss/components/Gallery.scss';



function Gallery() {
  return (
    <div className="gallery"> 
      {/* Itére sur chaque élément du tableau "locations" afin de retourner un composant 'Link' pour chaque "location" */}
      {locations.map(location => (
        <Link to={`/Caroussel/${location.id}`} key={location.id} className="gallery-item-link">
          <div className="gallery-item">
            <img src={location.cover} alt={location.title} className="gallery-image" />
            <div className="gallery-text-container">
              <h3 className="gallery-title">{location.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
