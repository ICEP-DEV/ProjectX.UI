import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './components/HomePage'; 
import Donate from './components/Donate';
import Login from './components/Login'; 
import NavBar from './components/NavBar';
import DonationForm from './components/DonationForm';


function App() {
  const location = useLocation();

  // Define paths where the NavBar should not appear
  const hideNavBar = location.pathname === '/login';

  return (
    <div className="App">
      {/* Conditionally render NavBar */}
      {!hideNavBar && <NavBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/DonationForm" element={<DonationForm />}/>
      </Routes>

      {/* footer */}

    </div>
  );
}

// Wrapping the App inside Router
function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
