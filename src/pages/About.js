// src/pages/About.js
import React from 'react';
import Header from '../components/Header';
import BannerAbout from '../components/BannerAbout'; // Importez le nouveau composant de bannière About
import Collapse from '../components/Collapse';
import '../scss/components/Banner.scss';
import Footer from '../components/Footer';

const About = () => {  return (
    <div className="about">
      <Header />
      <BannerAbout />
      <div className="collapses">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondamentales de Kasa...</p>
        </Collapse>
        <Collapse title="Service">
          <p>Nos équipes sont à votre disposition pour vous fournir une expérience parfaite...</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa...</p>
        </Collapse>
        </div>
      <Footer />
    </div>
  );
};

export default About;
