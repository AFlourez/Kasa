import React, { useState } from 'react';
import '../scss/components/Collapse.scss';
import arrowDown from '../assets/arrow_down.png';

// isOpen est initialisé à false, donc l'élément est fermé par défaut
// isOpen détermine l'état ouvert ou fermé (true / false)
// setIsOpen met à jour la fonction isOpen
const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

// Inverse la valeur de isOpen chaque fois qu'elle est appelée //
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img 
          src={arrowDown} 
          alt="Arrow down" 
          className={`arrow ${isOpen ? 'open' : ''}`} 
        />
      </div>
       {/* Si isOpen est true, affiche le contenu enfant (children) */}
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
