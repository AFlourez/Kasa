// Slideshow.jsx

import React, { useState } from 'react';
import leftArrowImage from '../assets/chevron_carousel_left.png';
import rightArrowImage from '../assets/chevron_carousel_right.png';
import '../scss/SlideShow.css';

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
        {images && images.length > 0 ? (
          <>
            {/* Flèche gauche pour naviguer */}
            <img
              src={leftArrowImage}
              alt="Flèche gauche pour naviguer vers l'image précédente"
              className="arrow left-arrow"
              onClick={previousImage}
            />
            {/* Image du diaporama */}
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
              className="gallery-image"
            />
            {/* Flèche droite pour naviguer */}
            <img
              src={rightArrowImage}
              alt="Flèche droite pour naviguer vers l'image suivante"
              className="arrow right-arrow"
              onClick={nextImage}
            />
          </>
        ) : (
          <p>Aucune image disponible.</p>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
