// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Anavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"black"}}>
      <Container>
        <Navbar.Brand href="/">Medly - Pharma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/ahome" style={{padding:"10px"}}>Home</Link>
            <Link to="/users" style={{padding:"10px"}}>Users</Link>
            <Link to="/myproducts" style={{padding:"10px"}}>Myproducts</Link>
            <Link to="/additem" style={{padding:"10px"}}>Add Item</Link>
            <Link to="/orders" style={{padding:"10px"}}>Orders</Link>
            <Link to="/" style={{paddingLeft:"10px",paddingTop:"10px"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"0px"}}>({JSON.parse(get).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Anavbar;
