import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import './styles/normalize.css';
import './styles/app.css';

const App: React.FC = () => {
  return (
    <Router basename="/p14converted">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
