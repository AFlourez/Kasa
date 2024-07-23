import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './scss/main.scss';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Caroussel from './pages/Caroussel';
import About from './pages/About';
import Error404 from './components/Error404'; // Assurez-vous d'importer correctement votre composant Error404

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route pour la page Caroussel */}
          <Route path="/Caroussel/:id" element={<Caroussel />} />
          {/* Route pour la page d'accueil */}
          <Route exact path="/" element={<Home />} />
          {/* Route pour la page a propos */}
          <Route path="/about" element={<About />} />
          {/* Routes inexistante -> Erreur */}
          <Route path="*" element={<Error404 />} /> {/* Route pour l'erreur 404 */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
