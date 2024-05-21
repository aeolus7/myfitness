import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BMICalculatorForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/api/bmi/calculate', {
        height: parseFloat(height),
        weight: parseFloat(weight),
      });
      
      setBMI(response.data);
      setShowModal(true); // Show the modal when the BMI is received
    } catch (error) {
      console.error('Error calculating BMI:', error);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title>BMI Calculator</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="height">
              <Form.Label>Height (in meters)</Form.Label>
              <Form.Control 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="weight">
              <Form.Label>Weight (in kg)</Form.Label>
              <Form.Control 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Calculate BMI
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your BMI</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your BMI is {bmi}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BMICalculatorForm;
