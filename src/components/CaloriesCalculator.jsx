import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalorieCalculatorForm = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [calories, setCalories] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/api/calories/calculate', {
        age: parseInt(age),
        gender,
        weight: parseFloat(weight),
        height: parseFloat(height),
        activityLevel,
        goal,
      });

      setCalories(response.data); // response.data should directly be the calorie value
      setShowModal(true); // Show the modal when the calories are received
    } catch (error) {
      console.error('Error calculating calories:', error);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Calorie Calculator</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="weight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="height">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="activityLevel">
              <Form.Label>Activity Level</Form.Label>
              <Form.Control as="select" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} required>
                <option value="">Select...</option>
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="lightly active">Lightly active (light exercise/sports 1-3 days/week)</option>
                <option value="moderately active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                <option value="very active">Very active (hard exercise/sports 6-7 days a week)</option>
                <option value="extra active">Extra active (very hard exercise/sports & a physical job)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="goal">
              <Form.Label>Goal</Form.Label>
              <Form.Control as="select" value={goal} onChange={(e) => setGoal(e.target.value)} required>
                <option value="">Select...</option>
                <option value="maintenance">Maintenance</option>
                <option value="lose">Lose Weight</option>
                <option value="bulk">Bulk</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Calculate Calories
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calorie Intake</Modal.Title>
        </Modal.Header>
        <Modal.Body>Calorie Intake: {calories} kcal/day</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CalorieCalculatorForm;
