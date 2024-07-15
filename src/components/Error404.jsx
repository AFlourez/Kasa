import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import "../scss/Error404.css"

const Error404 = () => {
  return (
    <div className="error">
        <Header />
        <h2>404</h2>
        <div className="textError">
            <p>Oops! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="linkTextError">
            <Link to="/">Retourner vers la page d'accueil</Link>
        </div>
        <Footer />
    </div>
  );
};

export default Error404;
