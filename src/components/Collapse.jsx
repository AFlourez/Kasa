import React, { useState } from 'react';
import '../scss/Collapse.css';
import arrowDown from '../assets/arrow_down.png';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
