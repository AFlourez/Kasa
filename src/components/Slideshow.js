// Slideshow.js

import React, { useState } from 'react';
import leftArrowImage from '../assets/chevron_carousel_left.png';
import rightArrowImage from '../assets/chevron_carousel_right.png';
import '../styles/SlideShow.css';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      <div className="image-container">
        {images.length > 0 && (
          <>
            {/* Flèches pour naviguer */}
            <img src={leftArrowImage} alt="Flèche gauche" className="arrow left-arrow" onClick={previousImage} />
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
              className="gallery-image"
            />
            <img src={rightArrowImage} alt="Flèche droite" className="arrow right-arrow" onClick={nextImage} />
          </>
        )}
        {!images || images.length === 0 && <p>Aucune image disponible.</p>}
      </div>
    </div>
  );
};

export default Slideshow;
