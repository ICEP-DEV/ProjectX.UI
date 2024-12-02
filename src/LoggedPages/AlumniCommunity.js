import React, { useState, useEffect } from 'react'; 
import './AlumniCommunity.css';
import { FaExclamationCircle, FaRegSmile } from 'react-icons/fa'; // Icons from react-icons
import AlumniSpaceLogo from './SearchBarDemoImages/aslogo.png';
import TutLogo from './SearchBarDemoImages/TUT-Logo1.jpg';
import ProfilePhoto2 from './SearchBarDemoImages/2.png';
import ProfilePhoto3 from './SearchBarDemoImages/1.jpg';
import GraduationHatIcon from './SearchBarDemoImages/aslogo.png';
import LinkedInPhoto from './LoggedInPhotos/Divider 3.png';

const AlumniCommunity = () => {
  const [searchInput, setSearchInput] = useState('');
  const [alumniData, setAlumniData] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [showNoResultsPopup, setShowNoResultsPopup] = useState(false);
  const [showEmptySearchPopup, setShowEmptySearchPopup] = useState(false);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null); // New state for selected alumnus
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [linkedinModalVisible, setLinkedinModalVisible] = useState(false);


  // Fetch data from API on component mount
  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        const response = await fetch("http://localhost:5214/api/Admin/GetAlumnis/GetAlumnis");
        const data = await response.json();
        setAlumniData(data);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    };
    fetchAlumniData();
  }, []);

  // Handle search
  const handleSearch = () => {
    if (searchInput.trim() === '') {
      setShowEmptySearchPopup(true);
      setShowNoResultsPopup(false);
      return;
    }

    setIsSearchClicked(true);
    const filtered = alumniData.filter(alumnus =>
      alumnus.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
      alumnus.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
      alumnus.graduationYear.toString().includes(searchInput) ||
      alumnus.alumnusId.toString().includes(searchInput)
    );
    setFilteredAlumni(filtered);

    // Show "No results" popup if no alumni match the search
    if (filtered.length === 0) {
      setShowNoResultsPopup(true);
    } else {
      setShowNoResultsPopup(false);
    }
    setShowEmptySearchPopup(false); // Hide empty search popup if a search is made
  };

  // Close popups
  const closePopup = () => {
    setShowNoResultsPopup(false);
    setShowEmptySearchPopup(false);
  };

  const openModal = (alumnus) => {
    setSelectedAlumnus(alumnus);
    setIsModalOpen(true);
    setSelectedAlumni(alumnus);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlumnus(null);
  };

  return (
    <div className={`alumni-community ${isModalOpen ? 'blur-background' : ''}`}>
      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h1 className="text-black text-center">Connect. Inspire. Celebrate.</h1>
              <h6 className="text-center">A Hub for TUT Graduates</h6>
            </div>
          </div>
        </div>
      </section>
      <div className="search-container">
        <i className="search-icon bi bi-search"></i>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search Alumnus by Name, Surname, Student Number, or Year Graduated..." 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
        />
        <i className="filter-icon bi bi-funnel"></i>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Alumni List */}
      {isSearchClicked && filteredAlumni.length > 0 && (
        <div className="alumni-list">
          {filteredAlumni.map(alumnus => (
            <div className="alumni-card" key={alumnus.alumnusProfId}>
              <img 
                src={alumnus.profilePicture || "https://via.placeholder.com/150"} 
                alt={`${alumnus.firstName} ${alumnus.lastName}`} 
                className="profile-picture" 
              />
              <div className="alumni-details">
                <h4>{`${alumnus.firstName} ${alumnus.lastName}`}</h4>
                <p><strong>Course:</strong> {alumnus.course}</p>
                <p><strong>Graduation Year:</strong> {alumnus.graduationYear}</p>
                <p><strong>Campus:</strong> {alumnus.campus}</p>
                <p><strong>Faculty:</strong> {alumnus.faculty}</p>

              </div>
                  {/* New Button */}
                  <button className="view-alumnus-button" onClick={() => openModal(alumnus)}>View Alumnus</button>
            </div>
          ))}
        </div>
      )}

{/* Modal */}
{isModalOpen && selectedAlumnus && (
  <div className="modal-overlay">
    <div className="modal">
      <button className="close-modal-button" onClick={closeModal}>
        &times;
      </button>
      {/* Main Heading */}
      <h1 className="m-inc-text">{`${selectedAlumnus.firstName} ${selectedAlumnus.lastName}`}</h1>

      <div className="modal-profile-picture-wrapper">
        <img
          src={selectedAlumnus.profilePicture || "https://via.placeholder.com/150"}
          alt={`${selectedAlumnus.firstName} ${selectedAlumnus.lastName}`}
          className="modal-profile-picture"
        />
        {/* LinkedIn Icon */}
        <a
          onClick={() => setLinkedinModalVisible(true)}
          className="linkedin-icon"
        >
          <i className="fab fa-linkedin linked-in-icon"></i>
        </a>
      </div>
      
      <div className="modal-details">
        <p><strong>Course:</strong> {selectedAlumnus.course}</p>
        <p><strong>Year Began:</strong> {selectedAlumnus.graduationBegan}</p>
        <p><strong>Student Number:</strong> {selectedAlumnus.alumnusId}</p>
        <p><strong>Faculty:</strong> {selectedAlumnus.faculty}</p>
        <p><strong>Campus:</strong> {selectedAlumnus.campus}</p>
        <p><strong>Year Completed:</strong> {selectedAlumnus.graduationYear}</p>
      </div>            
    </div>
  </div>
)}

{linkedinModalVisible && selectedAlumni &&(
  <div className="linkedin-modal">
    <div className="linkedin-modal-content">
      {/* Circular frame with the profile photo */}
      <div className="profile-photo-container">
        <img
         src={selectedAlumnus.profilePicture || "https://via.placeholder.com/150"}
         alt={`${selectedAlumnus.firstName} ${selectedAlumnus.lastName}`}
         className="profile-photo"/>
      </div>

      {/* Div with the LinkedIn divider image */}
      <div className="linkedin-modal-image">
        <img src={LinkedInPhoto} alt="LinkedIn Divider" />
      </div>

      <button
        className="close-linkedin-modal"
        onClick={() => setLinkedinModalVisible(false)}
      >
        &times;
      </button>
      
      <div className='linkedin-description'> 
          <h5>{`${selectedAlumnus.firstName}`} {`${selectedAlumnus.lastName}`}</h5>
          <p>Software Development Intern at Sage, skilled in Java, JavaScript, and full-stack development. Contributing to impactful projects while refining technical and problem-solving skills to deliver innovative solutions.</p>

            {/* Details similar to the LinkedIn profile */}
            <ul className="linkedin-details">
            <li className="linkedin-university-item">
              <div className="linkedin-icon-container">
                <img src={TutLogo} alt="TUT Logo" className="linkedin-icon-1" />
              </div>
              Tshwane University of Technology
            </li>
            <li className="linkedin-university-item">
              <div className="linkedin-icon-container">
                <img src={AlumniSpaceLogo} alt="AlumniSpace Logo" className="linkedin-icon-1" />
              </div>
              AlumniSpace Community
            </li>
              <li>Soshanguve, Pretoria, Gauteng, South Africa · <a href="#">Contact info</a></li>
              <li>322 connections</li>
              <li className="mutual-connections">
                <img src= {ProfilePhoto3} alt="Connection 1" />
                <img src={ProfilePhoto2} alt="Connection 2" />
                Smanga Sthembiso Zikalala and Mogau Rakolota are mutual connections
              </li>
            </ul>

              {/* Connect, Message, and More buttons */}
              <div className="linkedin-buttons">
              <button
                className="btn-connect"
                onClick={() => {
                  // Check if the URL starts with 'http' or 'www'
                  let fullUrl = selectedAlumnus.linkedInProfile;

                  if (selectedAlumnus.linkedInProfile.startsWith("www")) {
                    // If it starts with 'www', prepend 'https://www.linkedin.com'
                    fullUrl = `https://${selectedAlumnus.linkedInProfile}`;
                  } else if (!selectedAlumnus.linkedInProfile.startsWith("http")) {
                    // If it does not start with 'http', assume it's a relative path and prepend the base URL
                    fullUrl = `https://www.linkedin.com${selectedAlumnus.linkedInProfile}`;
                  }

                  // Open the full URL in a new tab
                  window.open(fullUrl, "_blank");
                }}
              >
                Connect
              </button>
                <button className="btn-message">Message</button>
                <button className="btn-more">More</button>
              </div>

            {/* "Open to work" section */}
            <div className="open-to-work">
              <p>Open to work</p>
              <p>
                Business Analyst, System Analyst, Business System Analyst, Junior Business Analyst
                <br />
                <span className='linkedIn-adjust-text'>
                  <a href="#">Show details</a>
                </span>
                
              </p>
            </div>
        </div>

    </div>
  </div>
)}

      {/* No Results Popup */}
      {showNoResultsPopup && (
        <div className="popup-overlay">
          <div className="popup">
          <span className='ac-color-icon'><FaExclamationCircle /></span> 
            <p className="no-results">No alumni found. Please refine your search.</p>
            <button className="close-popup" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Empty Search Popup */}
      {showEmptySearchPopup && (
        <div className="popup-overlay">
          <div className="popup">
           <span className='ac-color-icon'><FaExclamationCircle /></span> 
            <p className="no-results">Task bar empty. Please enter a search term.</p>
            <button className="close-popup" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniCommunity;
