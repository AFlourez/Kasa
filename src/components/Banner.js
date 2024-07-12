import React from 'react';
import '../styles/Banner.css';

function Banner({ showFilter = true, customClass = '' }) {
  return (
    <div className={`home-cover-container ${showFilter ? 'with-filter' : ''} ${customClass}`}>
      <div className="home-cover">
        <h1 className="home-cover-text">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;

