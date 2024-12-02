import React, { useState, useEffect } from 'react'; 
import './AlumniCommunity.css';
import { FaExclamationCircle, FaRegSmile } from 'react-icons/fa'; // Icons from react-icons

const AlumniCommunity = () => {
  const [searchInput, setSearchInput] = useState('');
  const [alumniData, setAlumniData] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [showNoResultsPopup, setShowNoResultsPopup] = useState(false);
  const [showEmptySearchPopup, setShowEmptySearchPopup] = useState(false);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null); // New state for selected alumnus
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility

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
                {alumnus.linkedInProfile && (
                  <a href={alumnus.linkedInProfile} target="_blank" rel="noopener noreferrer">
                    View LinkedIn Profile
                  </a>
                )}
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
      <div className="modal-profile-picture-wrapper">
        <p className="m-inc-text">{`${selectedAlumnus.firstName} ${selectedAlumnus.lastName}`}</p>
        <img
          src={selectedAlumnus.profilePicture || "https://via.placeholder.com/150"}
          alt={`${selectedAlumnus.firstName} ${selectedAlumnus.lastName}`}
          className="modal-profile-picture"
        />
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
