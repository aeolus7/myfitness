import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Homepage.css'; // Import CSS file for styling
import backgroundImg from '../../assets/fitness-park.jpeg'; // Adjust the path based on the location of your Homepage component

const HomePage = () => {
  return (
    <div className="parallax-bg" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div style={{ minHeight: '100vh' }}>
        <Container className="text-center py-5">
          <h1>Welcome to MyFitness</h1>
          <p>Your ultimate fitness companion. Track your progress, calculate your BMI, and stay motivated.</p>
        </Container>
        <Container className="my-5">
          <Row className="text-center gy-4">
            <Col md={6} lg={3}>
              <Card style={{ backgroundColor: '#ffd600' }} className="text-white h-100 shadow">
                <Card.Body>
                  <Card.Title>Discover New Workouts</Card.Title>
                  <Card.Text>Learn new exercises and diversify your gym routine.</Card.Text>
                  {/* Use Link component to wrap the button */}
                  <Link to="/workouts">
                    <Button variant="light">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card style={{ backgroundColor: '#ffd600' }} className="text-white h-100 shadow">
                <Card.Body>
                  <Card.Title>Calories Calculator Plans</Card.Title>
                  <Card.Text>Get your calorie intake needs according to your goals!</Card.Text>
                  {/* Use Link component to wrap the button */}
                  <Link to="/calorie-calculator">
                    <Button variant="light">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card style={{ backgroundColor: '#ffd600' }} className="text-white h-100 shadow">
                <Card.Body>
                  <Card.Title>Discover New Programs</Card.Title>
                  <Card.Text>Discover new programs suitable for your lifestyle!</Card.Text>
                  {/* Use Link component to wrap the button */}
                  <Link to="/workout-programs">
                    <Button variant="light">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card style={{ backgroundColor: '#ffd600' }} className="text-dark h-100 shadow">
                <Card.Body>
                  <Card.Title>Track Your BMI</Card.Title>
                  <Card.Text>Use our BMI calculator to track your body mass index.</Card.Text>
                  {/* Use Link component to wrap the button */}
                  <Link to="/bmi-calculator">
                    <Button variant="dark">Calculate Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
