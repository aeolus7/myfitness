import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/Homepage/Homepage';
import BMICalculatorForm from './components/Bmi';
import CalorieCalculatorForm from './components/CaloriesCalculator';
import WorkoutProgramForm from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bmi-calculator" element={<BMICalculatorForm />} />
          <Route path="/calorie-calculator" element={<CalorieCalculatorForm />} />
          <Route path="/workout-programs" element={<WorkoutProgramForm />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
