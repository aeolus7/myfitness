import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#26272e', color: 'white' }} className="py-3 mt-auto">
      <Container>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} MyFitness. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
