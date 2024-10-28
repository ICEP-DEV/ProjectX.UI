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
import Logged from './LoggedPages/Logged';
import ConfirmProfile from './components/ConfirmProfile';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import AlumniCommunity from './LoggedPages/AlumniCommunity';

function App() {
  const location = useLocation();

  // Define paths where the NavBar should not appear
  const hideNavBar = location.pathname === '/login' ||  location.pathname === '/logged' ||
  location.pathname === '/forgot-password' || location.pathname === '/signup';
  return (
    <div>

      {/* Conditionally render NavBar */}
      {!hideNavBar && <NavBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ConfirmProfile" element={<ConfirmProfile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/DonationForm" element={<DonationForm />}/>
        <Route path="/logged" element={<Logged />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/alumni" element={<AlumniCommunity />} /> {/* Ensure route to Alumni Community */}
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
