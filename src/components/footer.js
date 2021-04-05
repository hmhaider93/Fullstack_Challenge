/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

import React from 'react';
import '../index.css';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-padding">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
