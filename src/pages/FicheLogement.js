import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import locations from '../data/data.js';
import Slideshow from '../components/Slideshow';
import renderStars from '../components/renderStars';
import Collapse from '../components/Collapse';
import '../scss/FicheLogement.css';
import Error404 from '../components/Error404';

function FicheLogement() {
  let { id: locationId } = useParams();

  let location = locations.find(loc => loc.id === locationId);

  if (!location) {
    return <Error404 />;
  }

  // Exemple de classes pour chaque tag basées sur son contenu
  const getTagClassName = (tag) => {
    switch (tag.toLowerCase()) {
      // Ajoutez des cases switch pour chaque classe de tag si nécessaire
      default:
        return '';
    }
  };

  return (
    <div className="fiche-logement">
      <Header />
      <Slideshow images={location.pictures} />
      <div className="card-host">
        <div className="infoLieu">
          <p className="title">{location.title}</p>
          <p className="location">{location.location}</p>
          {/* Mapping des tags avec les classes spécifiques */}
          <div className="tags">
            {location.tags.map((tag, index) => (
              <span key={index} className={`tag ${getTagClassName(tag)}`}>
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

export default FicheLogement;
