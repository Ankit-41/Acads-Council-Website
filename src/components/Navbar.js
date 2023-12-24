import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import"../css/navbar.css"

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
  const dothisstyle={  columnGap: '29px',
  
}

  return (
    <div className="navbar-stick">
    <Navbar expand="lg" fixed="top" className="navbar" style={navStyle}>
      <Container>
        <Navbar.Brand href="#home">
          
          <img
            src="/logo.png" // Use the imported PNG image
            alt="Your Logo"
            className='acad-logo'
            
          />
          
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto" style={dothisstyle}>
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/academic" className='text-white'>Academics</Nav.Link>
            <Nav.Link href="/research" className='text-white'>Research</Nav.Link>
            <Nav.Link href="/inrelations" className='text-white'>Int. Relations</Nav.Link>
            <Nav.Link href="/careerdev" className='text-white'>Career Dev.</Nav.Link>
            <Nav.Link href="/blogs" className='text-white'>Blogs</Nav.Link>
            <Nav.Link href="/intergroups" className='text-white'>Interest Groups</Nav.Link>
            <Nav.Link href="/portals" className='text-white'>Portals</Nav.Link>
            <Nav.Link href="/contacts" className='text-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    </div>
  );
};

export default CustomNavbar;
