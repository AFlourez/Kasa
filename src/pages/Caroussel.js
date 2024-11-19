import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import locations from '../data/data.js';
import Slideshow from '../components/Slideshow';
import renderStars from '../components/renderStars';
import Collapse from '../components/Collapse';
import '../scss/components/Caroussel.scss';
import Error404 from '../components/Error404';

function Caroussel() {
  // useParams extrait l'ID de l'URL
  let { id: locationId } = useParams();
  // Cherche la localisation correspondante dans les données "locations"
  let location = locations.find(loc => loc.id === locationId);
  // Affiche la page d'erreur si pas trouvé
  if (!location) {
    return <Error404 />;
  }

  return (
    <div className="caroussel">
      <Header />
      <Slideshow images={location.pictures} />
      <div className="card-host">
        <div className="infoLieu">
          <p className="title">{location.title}</p>
          <p className="location">{location.location}</p>
          {/* Mapping des tags */}
          <div className="tags">
            {location.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="infoHote">
          <div className="host-info">
            <p className="hostName">{location.host.name}</p>
            <img src={location.host.picture} alt={`Host ${location.host.name}`} className="hostPicture" />
          </div>
          <div className="rating">
            {renderStars(location.rating)}
          </div>
        </div>
      </div>

      {/* Description et Equipements */}
      <div className="description-equipments">
        <div className="collapseDescription">
          <Collapse title="Description">
            <p>{location.description}</p>
          </Collapse>
        </div>
        <div className="collapseEquipements">
          <Collapse title="Équipements">
            <ul>
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
        </Collapse>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Caroussel;
