// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Unavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"lavender"}}>
      <Container>
        <Navbar.Brand href="/">Medly - Pharma
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/uhome" style={{padding:"10px"}}>Home</Link>
            <Link to="/uproducts" style={{padding:"10px"}}>Products</Link>
            {/* <Link to="/wishlist" style={{padding:"10px"}}>Wishlist</Link> */}
            <Link to="/myorders" style={{padding:"10px"}}>My orders</Link>
            <Link to="/" style={{paddingLeft:"10px",paddingTop:"10px"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"0px"}}>({JSON.parse(get).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
