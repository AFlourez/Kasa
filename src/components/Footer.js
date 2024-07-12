import React from 'react';
import logoFooter from '../assets/logo_footer.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa Logo" className="footer-logo" />
      <p className="footer-text">&copy; Kasa, All rights reserved</p>
    </footer>
  );
}

export default Footer;