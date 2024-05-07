import React from 'react'

import { Link } from 'react-router-dom';
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='head'>
      
      <Navbar className='nav-main' bg="" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><b>Gym ⚓</b></Navbar.Brand>
          <Nav className="me-auto px-2">
            <Nav.Link className='gym-Link' as={Link} to='/' href="#">Home</Nav.Link>
            <Nav.Link className='gym-Link' as={Link} to='/gym' href="#">Exercise</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header
