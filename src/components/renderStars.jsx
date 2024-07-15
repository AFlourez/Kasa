import React from 'react';
import starActive from '../assets/star-active.png';
import starInactive from '../assets/star-inactive.png';
import '../scss/renderStars.css';

const renderStars = (rating) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    console.log(rating)
    if (i < rating) {
      stars.push(<img key={i} src={starActive} alt="Active star" className="star" />);
    } else {
      stars.push(<img key={i} src={starInactive} alt="Inactive star" className="star" />);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default renderStars;
