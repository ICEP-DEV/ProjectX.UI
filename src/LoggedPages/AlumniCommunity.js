import React, { useState, useEffect } from 'react'; 
import Footer from '../components/Footer';
import './AlumniCommunity.css';
import Image1 from './SearchBarDemoImages/formal photo.jpg';
import Image2 from './SearchBarDemoImages/1.jpg';
import Image3 from './SearchBarDemoImages/2.png';
import GraduationHatIcon from './SearchBarDemoImages/aslogo.png';

const AlumniCommunity = () => {
  const alumniData = [
    { photo: Image1, name: 'Tshiamo', surname: 'Matiza', course: 'Computer Science', yearGraduated: 2021 },
    { photo: Image2, name: 'Tshiamo', surname: 'Madukadzhi', course: 'Informatics', yearGraduated: 2022 },
    { photo: Image3, name: 'Tshiamo', surname: 'Mazibuko', course: 'Information Technology', yearGraduated: 2023 },
    // Add more alumni as needed
  ];

  const [searchInput, setSearchInput] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);
  const [loading, setLoading] = useState(false);
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAnimation, setModalAnimation] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setLoading(true);

    setFilteredAlumni(
      alumniData.filter((alumni) =>
        alumni.name.toLowerCase().includes(value.toLowerCase()) ||
        alumni.surname.toLowerCase().includes(value.toLowerCase()) ||
        alumni.course.toLowerCase().includes(value.toLowerCase()) ||
        alumni.yearGraduated.toString().includes(value)
      )
    );

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    return text.split(regex).map((part, index) => 
      regex.test(part) ? <span key={index} style={{ color: '#30ffec' }}>{part}</span> : part
    );
  };

  const handleFilterIconClick = (alumni) => {
    setSelectedAlumni(alumni);
    setModalAnimation('fade-in slide-down'); // Start fade-in and slide-down animation
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalAnimation('slide-up fade-out'); // Start slide-up and fade-out animation
    setTimeout(() => {
      setModalVisible(false);
      setSelectedAlumni(null);
      setModalAnimation(''); // Reset animation state
    }, 300); // Match this with the fade-out animation duration
  };

  return (
    <div className="alumni-community">
      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto text-center"></div>
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
          placeholder="Search Alumnus by Name, Surname, Course, or Year Graduated..." 
          value={searchInput} 
          onChange={handleSearch} 
        />
        <i className="filter-icon bi bi-funnel"></i>
        <button className="search-button">Search</button>
      </div>

      {(loading || searchInput) && (
        <div className="results-container">
          {loading ? (
            <div className="loading-animation">
              <img src={GraduationHatIcon} alt="Loading..." className="graduation-hat-icon" />
            </div>
          ) : (
            <>
              <div className="results-header">
                <h3>Results Found ({filteredAlumni.length})</h3>
              </div>
              {filteredAlumni.map((alumni, index) => (
                <div key={index} className="alumni-card">
                  <img src={alumni.photo} alt={`${alumni.name} ${alumni.surname}`} className="alumni-photo" />
                  <div className="alumni-info">
                    <p>
                      <span className="label">Name: </span> 
                      <span style={{ color: 'white' }}>{highlightText(alumni.name, searchInput)}</span>
                    </p>
                    <p>
                      <span className="label">Surname: </span> 
                      <span style={{ color: 'white' }}>{highlightText(alumni.surname, searchInput)}</span>
                    </p>
                    <p>
                      <span className="label">Course: </span> 
                      <span style={{ color: 'white' }}>{highlightText(alumni.course, searchInput)}</span>
                    </p>
                    <p>
                      <span className="label">Year Graduated: </span> 
                      <span style={{ color: 'white' }}>{highlightText(alumni.yearGraduated.toString(), searchInput)}</span>
                    </p>
                  </div>
                  <a href="#" className="view-alumni" onClick={() => handleFilterIconClick(alumni)}>
                    <i className="fas fa-chevron-right"></i><span className='view-alumni-add-space'>View Alumni</span>
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {modalVisible && selectedAlumni && (
        <div className={`modal-overlay ${modalAnimation}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-inner">
              <div className="modal-photo-container">
                <div className="alumni-name">Alumnus Profile</div>
                <img src={selectedAlumni.photo} alt={`${selectedAlumni.name} ${selectedAlumni.surname}`} className="modal-photo" />
                <div className='ap-space-course'>
                <p><strong className='ap-color-course '>Course:</strong> <strong className='ap-course'>{selectedAlumni.course}</strong></p>
                </div>
                
                
              </div>

              
              <div className="modal-info">
              <div className="overall-name">Overview</div>
                <p><strong className='ap-color'>Name:</strong> {selectedAlumni.name}</p>
                <p><strong className='ap-color'>Surname:</strong> {selectedAlumni.surname}</p>
                <p><strong className='ap-color'>Faculty:</strong> ICT</p>
                <p><strong className='ap-color'>Student Number:</strong> 221306520</p>
                <p><strong className='ap-color'>Email:</strong> tmatiza19@gmail.com</p>
                
                <p><strong className='ap-color'>Class Of:</strong> </p>
                <div className="ap-year">
                {selectedAlumni.yearGraduated.toString().split('').map((digit, index) => (
                  <span key={index} className="ap-year-digit">{digit}</span>
                ))}
              </div>
              <p className='ap-linkedIn'>
                  <a href="https://www.linkedin.com/in/tshiamo-matiza-3685a42a5" target="_blank" rel="noopener noreferrer" className="linkedin-icon-link">
                    <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
                  </a>
                </p>
              </div>
            </div>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniCommunity;
