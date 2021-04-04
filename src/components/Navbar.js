/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Navbar, Nav} from 'react-bootstrap';

function Navlocal() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="brand">
        <Navbar.Brand href="#home">FullStack-Challenge</Navbar.Brand>
      </div>
      <div className="blog">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Instructions</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
  ;
}

export default Navlocal;
