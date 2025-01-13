import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './components/HomePage'; 
import Donate from './components/Donate';
import Login from './components/Login'; 
import NavBar from './components/NavBar';
import NavbarLogged from './LoggedPages/NavbarLogged';
import NavBarNoDonateLog from './LoggedPages/NavBarNoDonateLog';
import NavBarNoDonateNotLog from './components/NavBarNoDonateNotLog';
import DonationForm from './components/DonationForm';
import Logged from './LoggedPages/Logged';
import ConfirmProfile from './components/ConfirmProfile';
import NotFoundPage from './LoggedPages/NotFoundPage';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import News from './LoggedPages/News'; // Corrected component name to uppercase
import AlumniCommunity from './LoggedPages/AlumniCommunity';
import Arts from './LoggedPages/Arts';
import Volunteer from './LoggedPages/Volunteer';
import Economics from './LoggedPages/Economics';
import Engineering from './LoggedPages/Engineering';
import Humanities from './LoggedPages/Humanities';
import LoggedOutPage from './LoggedPages/LoggedOutPage';
import ICT from './LoggedPages/ICT';
import Management from './LoggedPages/Management';
import Science from './LoggedPages/Science';
import Jobs from './LoggedPages/Jobs';
import Dashboard from './Admin/Dashboard';
import RegisteredAlumni from './Admin/AlumniTable';
import Events from './LoggedPages/Events';
import RadioPage from './LoggedPages/Radio/RadioPage';
import UploadContent  from "./Admin/Upload";
import UploadEvents  from "./Admin/UploadEvents";
import UploadJobs from './Admin/UploadJobs';
import JobsCategory from './LoggedPages/JobsCategory';
import Popia from './components/Popia';
import UploadNews from './Admin/UploadNews';
import EditProfile from './LoggedPages/EditProfile';
import Manage from './Admin/Manage';
import ManageNews from './Admin/MangeNews';
import ManageEvents from './Admin/ManageEvents';
import ManageJobs from './Admin/ManageJobs';
import ViewResponses from './Admin/ViewResponses';

function App() {
  const location = useLocation();

  // Define paths for displaying NavBar and NavbarLogged
  const showNavBar =  location.pathname === '/donateUnLogged';
  const showNavBarNoDonateLog =  location.pathname === '/donate';
  const showNavBarNoDonateNotLog = location.pathname === '/';
  const showNavbarLogged = location.pathname === '/news' || location.pathname === '/alumni' || location.pathname === '/volunteer'|| location.pathname === '/events' || location.pathname === '/radiopage'|| location.pathname === '/donate' ;


  return (
    <div>
      {/* Conditionally render NavBar or NavbarLogged */}
      {showNavBar && <NavBar />}
      {showNavBarNoDonateNotLog && <NavBarNoDonateNotLog />}
      {showNavBarNoDonateLog && <NavBarNoDonateLog />}
      {showNavbarLogged && <NavbarLogged />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ConfirmProfile" element={<ConfirmProfile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donateUnLogged" element={<Donate />} />
        <Route path="/DonationForm" element={<DonationForm />} />
        <Route path="/logged" element={<Logged />} />
        <Route path="/notfoundpage" element={<NotFoundPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/alumni" element={<AlumniCommunity />} /> {/* Ensure route to Alumni Community */}
        <Route path="/admin" element={<Dashboard /> }/>{/* Add Admin Page route as needed */}
        <Route path="/news" element={<News/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/radiopage" element={<RadioPage />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/economics" element={<Economics/>} />
        <Route path="/engineering" element={<Engineering/>} />
        <Route path="/humanities" element={<Humanities/>} />
        <Route path="/ict" element={<ICT/>} />
        <Route path="/management" element={<Management/>} />
        <Route path="/job" element={<Jobs/>} />
        <Route path="/jobs/:faculty" element={<JobsCategory />} />
        <Route path="/science" element={<Science/>} />
        <Route path="/RegisteredAlumni" element={<RegisteredAlumni/>} />
        <Route path="/upload" element={<UploadContent/>} />
        <Route path="/uploadEvents" element={<UploadEvents/>} />
        <Route path="/jobs" element={<UploadJobs/>} />
        <Route path="/privacy-policy" element={<Popia/>} />
        <Route path="/uploadNews" element={<UploadNews/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/manage" element={<Manage/>} />
        <Route path="/manageNews" element={<ManageNews/>} />
        <Route path="/manageEvents" element={<ManageEvents/>} />
        <Route path="/jobs" element={<UploadJobs/>} />
        <Route path="/privacy-policy" element={<Popia/>} />
        <Route path="/uploadNews" element={<UploadNews/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/loggedout" element={<LoggedOutPage/>} />

        <Route path="/manage" element={<Manage/>} />
        <Route path="/manageJobs" element={<ManageJobs/>} />
        <Route path="/viewResponses" element={<ViewResponses/>} />
      </Routes>

      {/* Footer */}
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
