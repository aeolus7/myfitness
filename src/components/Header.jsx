import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#26272e' }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">MyFitness</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/bmi-calculator">BMI Calculator</Nav.Link>
          <Nav.Link as={Link} to="/workout-programs">Workout Programs</Nav.Link>
          <Nav.Link as={Link} to="/calorie-calculator">Calorie Calculator</Nav.Link>
          <Nav.Link as={Link} to="/workouts">Workouts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
