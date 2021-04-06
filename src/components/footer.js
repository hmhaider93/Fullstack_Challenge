/* eslint-disable max-len */

/* eslint-disable require-jsdoc */


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
