import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkoutProgramForm = () => {
  const [daysPerWeek, setDaysPerWeek] = useState('');
  const [program, setProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/api/WorkoutSplit/assign', {
        days: parseInt(daysPerWeek),
      });

      setProgram(response.data.description);
      setShowModal(true); // Show the modal when the program is received
    } catch (error) {
      console.error('Error choosing workout program:', error);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Choose Your Workout Program</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="daysPerWeek">
              <Form.Label>How many days can you go to the gym per week?</Form.Label>
              <Form.Control 
                type="number" 
                value={daysPerWeek} 
                onChange={(e) => setDaysPerWeek(e.target.value)} 
                required 
                min="1" 
                max="6" 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Get Workout Program
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Workout Program</Modal.Title>
        </Modal.Header>
        <Modal.Body>{program}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WorkoutProgramForm;
