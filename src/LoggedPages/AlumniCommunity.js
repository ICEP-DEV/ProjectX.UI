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

  // New state for the filter fields
  const [studentNumber, setStudentNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [course, setCourse] = useState('');
  const [faculty, setFaculty] = useState('');
  const [campus, setCampus] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

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

  const handleFilterIconClick = () => {
    setModalAnimation('fade-in slide-down'); // Start fade-in and slide-down animation
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalAnimation('slide-up fade-out'); // Start slide-up and fade-out animation
    setTimeout(() => {
      setModalVisible(false);
      setModalAnimation(''); // Reset animation state
    }, 300); // Match this with the fade-out animation duration
  };

  // Handle changes for filter fields
  const handleSearchFields = () => {
    // You can implement the filtering logic here based on the entered data
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
        <i className="filter-icon bi bi-funnel" onClick={handleFilterIconClick}></i>
        <button className="search-button">Search</button>
      </div>

      {modalVisible && (
        <div className={`modal ${modalAnimation}`}>
          <div className="modal-header">
            <h1 className="modal-title">Search For Alumni</h1>
            <span className="close-icon" onClick={closeModal}>&times;</span>
          </div>
          <div className="modal-body">
            <div className="modal-fields-container">
              <input 
                type="text" 
                placeholder="Student Number" 
                className={`modal-input ${studentNumber ? 'filled' : ''}`} 
                value={studentNumber} 
                onChange={(e) => setStudentNumber(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder="Name" 
                className={`modal-input ${name ? 'filled' : ''}`} 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder="Surname" 
                className={`modal-input ${surname ? 'filled' : ''}`} 
                value={surname} 
                onChange={(e) => setSurname(e.target.value)} 
              />
              <select 
                className={`modal-select ${course ? 'filled' : ''}`} 
                value={course} 
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Informatics">Informatics</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Multi Media">Multi Media</option>
              </select>
              <select 
                className={`modal-select ${faculty ? 'filled' : ''}`} 
                value={faculty} 
                onChange={(e) => setFaculty(e.target.value)}
              >
                <option value="">Faculty</option>
                <option value="ICT">ICT</option>
                <option value="Humanities">Humanities</option>
              </select>
              <select 
                className={`modal-select ${campus ? 'filled' : ''}`} 
                value={campus} 
                onChange={(e) => setCampus(e.target.value)}
              >
                <option value="">Campus</option>
                <option value="Soshanguve South Campus">Soshanguve South Campus</option>
                <option value="Soshanguve North Campus">Soshanguve North Campus</option>
                <option value="Arcadia Campus">Arcadia Campus</option>
                <option value="Main Campus">Main Campus</option>
              </select>
              <select 
                className={`modal-select ${graduationYear ? 'filled' : ''}`} 
                value={graduationYear} 
                onChange={(e) => setGraduationYear(e.target.value)}
              >
                <option value="">Graduation Year</option>
                {[...Array(new Date().getFullYear() - 2002)].map((_, index) => (
                  <option key={index} value={2003 + index}>{2003 + index}</option>
                ))}
              </select>
            </div>
            <button className="search-modal-button">Search</button>
          </div>
        </div>
      )}

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
                      <span style={{ color: 'white' }}>{highlightText(alumni.yearGraduated, searchInput)}</span>
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    
    </div>
  );
};

export default AlumniCommunity;
