import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { BsPersonCircle } from 'react-icons/bs';
import './navbarLog.css';
import tutLogo from '../images/tut logo.png';
import AvatarPic from "../images/intro-bg1.gif";

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('section_1');
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    graduationYear: '',
    campus: '',
    faculty: '',
    linkedinProfile: '',
    profilePicture: null,
  });

    // Fetch profile data
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:5214/api/Alumnus/GetAlumnusProfile/GetAlumnusProfile",
          {
            method: "GET",
            credentials: "include", // Include cookies in the request
          }
        );
        console.log("Response status:", response.status); // Check status
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data); // Log data to verify it
          setProfile({
            alumnusId: data.alumnusId,
            firstName: data.firstName,
            lastName: data.lastName,
            graduationYear: data.graduationYear,
            campus: data.campus,
            faculty: data.faculty,
            linkedinProfile: data.linkedinProfile,
            profilePicture: data.profilePicture
              ? `data:image/png;base64,${data.profilePicture}`
              : AvatarPic,
          });
        } else if (response.status === 204) {
          console.log("No content found");
        } else {
          console.log("Error fetching profile:", response.statusText);
        }
      } catch (error) {
        console.error("There was an error fetching the profile:", error);
      }
    };

  // Fetch profile on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
    if (loggedIn === 'true') {
      fetchProfile(); // Fetch profile data only if logged in
    }
  }, []);

  const toggleProfileBox = () => setIsProfileVisible(!isProfileVisible);

  const handleLogout = () => {
    console.log('User logged out');
    localStorage.removeItem('isLoggedIn'); // Optional: Remove login state from localStorage

    // Navigate to the LoggedOutPage
    navigate('/loggedout'); // Redirect to the logged out page
  };

  return (
    <Navbar id="navbarr" expand="lg" className="navbar navbar-light homepage-bgg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#section_1">
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Mobile menu toggle */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Navbar links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto">
            <Nav.Link
              className={`nav-link-spacing1 ${location.pathname === '/logged' ? 'active' : ''}`}
              as={Link}
              to="/logged"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`nav-link-spacing ${location.pathname === '/alumni' ? 'active' : ''}`}
              as={Link}
              to="/alumni"
            >
              Alumni Community
            </Nav.Link>

            {/* Career Development Dropdown */}
            <NavDropdown title="Career Development" id="career-development-dropdown" className="spacing">
              <NavDropdown title={<span className="custom-faculty-title">Faculties</span>} id="faculties-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/arts" className={location.pathname === '/arts' ? 'active' : ''}>FACULTY OF ARTS AND DESIGN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/economics" className={location.pathname === '/economics' ? 'active' : ''}>FACULTY OF ECONOMICS AND FINANCE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/engineering" className={location.pathname === '/engineering' ? 'active' : ''}>FACULTY OF ENGINEERING AND THE BUILT ENVIRONMENT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/humanities" className={location.pathname === '/humanities' ? 'active' : ''}>FACULTY OF HUMANITIES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ict" className={location.pathname === '/ict' ? 'active' : ''}>FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/management" className={location.pathname === '/management' ? 'active' : ''}>FACULTY OF MANAGEMENT SCIENCES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/science" className={location.pathname === '/science' ? 'active' : ''}>FACULTY OF SCIENCE</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="/job" className={location.pathname === '/job-opportunities' ? 'active' : ''}>Job Opportunities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/radiopage" className={location.pathname === '/radiopage' ? 'active' : ''}>Podcasts</NavDropdown.Item>
            </NavDropdown>

            {/* News Dropdown */}
            <NavDropdown title="News" id="news-dropdown" className="spacing">
              <NavDropdown.Item as={Link} to="/news" className={location.pathname === '/news' ? 'active' : ''}>News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</NavDropdown.Item>
            </NavDropdown>

            {/* Donate Link */}
            <Nav.Link
              className={`nav-link-spacing ${location.pathname === '/donate' ? 'active donate-pulse-log' : ''}`}
              as={Link}
              to="/donate"
            >
              Donate
            </Nav.Link>
          </Nav>

            {/* Display profile picture for mobile view */}
            {profile.profilePicture && (
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="navbar-icon person-icon"
                title="Profile"
                style={{
                  cursor: 'pointer',
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  objectFit: 'cover', // Ensures the image covers the area without stretching
                }}
                onClick={toggleProfileBox}
              />
            )}

          <span className="fade-in224 fade-in-word224 p-move-left">{profile.firstName}</span>{' '}

          {/* Profile box */}
          {isProfileVisible && (
            <div className="profile-box">
                <img
                  src={profile.profilePicture}
                  alt="Profile"
                  className="profile-box-icon"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover', // Ensures the image covers the area without stretching
                  }}
                />
              <h3 className="profile-box-title">Profile</h3>
              <p>                              
                <span className="fade-in224 fade-in-word224">Welcome</span>{' '}
                <span className="fade-in224 fade-in-word224">Back</span>{' '}
                <span className="fade-in224 fade-in-word224">{profile.firstName}</span>{' '}
                <span className="fade-in224 fade-in-word224">!</span>
              </p>

              <ul className="profile-box-links">
                <li><strong>Graduation Year: </strong>{profile.graduationYear}</li>
                <li><Link to="/resetpassword">Change Password</Link></li>
                <li><Link to="/edit-profile">Edit Profile</Link></li>
              </ul>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;
