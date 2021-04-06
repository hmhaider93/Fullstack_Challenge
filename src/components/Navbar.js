/* eslint-disable max-len */

/* eslint-disable require-jsdoc */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navlocal() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="brand">
        <Link to="/" className="navbar-brand">FullStack-Challenge</Link>
      </div>
      <div className="blog">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/instructions" className="nav-link">Instructions</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
  ;
}

export default Navlocal;
