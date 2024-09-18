import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './components/HomePage'; 
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  const location = useLocation();
  
  // Define paths where the NavBar should not appear
  const hideNavBar = location.pathname === '/login';

  return (
    <div>
      {!hideNavBar && <NavBar />} {/* Conditionally hide the NavBar */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Renders HomePage */}
        <Route path="/login" element={<Login />} /> {/* Renders Login */}
      </Routes>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
