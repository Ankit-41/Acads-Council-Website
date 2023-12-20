import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const toggleSticky = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleSticky);
    return () => {
      window.removeEventListener('scroll', toggleSticky);
    };
  }, []);

  const navStyle = {
  
    backgroundColor: isSticky ? 'white' : 'transparent', // Change background color conditionally
    transition: 'background-color 0.3s ease', // Add a smooth transition
  };
  const dothisstyle={  columnGap: '39px'}

  return (
    <Navbar expand="lg" fixed="top" className="navbar" style={navStyle}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo.png" // Use the imported PNG image
            alt="Your Logo"
            className="logo-img"
            style={{ width: '40px', height: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto" style={dothisstyle}>
            <Nav.Link href="#about">Home</Nav.Link>
            <Nav.Link href="#contact">Academics</Nav.Link>
            <Nav.Link href="#team">Research</Nav.Link>
            <Nav.Link href="#blogs">Int. Relations</Nav.Link>
            <Nav.Link href="#gallery">Career Dev.</Nav.Link>
            <Nav.Link href="#gallery">Blogs</Nav.Link>
            <Nav.Link href="#gallery">Interest</Nav.Link>
            <Nav.Link href="#gallery">Groups</Nav.Link>
            <Nav.Link href="#gallery">Portals</Nav.Link>
            <Nav.Link href="#gallery">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
