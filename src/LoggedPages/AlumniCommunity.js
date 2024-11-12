import React, { useState, useEffect } from 'react'; 
import './AlumniCommunity.css';
import Image1 from './SearchBarDemoImages/formal photo.jpg';
import Image2 from './SearchBarDemoImages/1.jpg';
import Image3 from './SearchBarDemoImages/2.png';
import GraduationHatIcon from './SearchBarDemoImages/aslogo.png';

const AlumniCommunity = () => {
  const alumniData = [
    { photo: Image1, name: 'Tshiamo', surname: 'Matiza', stuno: 221306520, course: 'Computer Science', yearGraduated: 2021 },
    { photo: Image2, name: 'Tshiamo', surname: 'Madukadzhi', stuno: 222617112, course: 'Informatics', yearGraduated: 2022 },
    { photo: Image3, name: 'Tshiamo', surname: 'Mazibuko', stuno: 224567702, course: 'Information Technology', yearGraduated: 2023 },
    // Add more alumni as needed
  ];
  
  const [pModalVisible, setPModalVisible] = useState(false);
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  // Function to open the modal and set the selected alumnus
  const openModal = (alumni) => {
    setSelectedAlumni(alumni);
    setPModalVisible(true);
  };

  // Function to close the modal
  const closePModal = () => {
    setPModalVisible(false);
  };

  const [searchInput, setSearchInput] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);
  const [loading, setLoading] = useState(false);
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

    filterAlumni(value);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const filterAlumni = (inputValue) => {
    setFilteredAlumni(
      alumniData.filter((alumni) =>
        (!inputValue || alumni.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        alumni.surname.toLowerCase().includes(inputValue.toLowerCase()) ||
        alumni.course.toLowerCase().includes(inputValue.toLowerCase()) ||
        alumni.yearGraduated.toString().includes(inputValue) ||
        alumni.stuno.toString().includes(inputValue)
      ) &&  // Check for student number match
        (!studentNumber || alumni.stuno.toString() === studentNumber) &&
        (!name || alumni.name.toLowerCase().includes(name.toLowerCase())) &&
        (!surname || alumni.surname.toLowerCase().includes(surname.toLowerCase())) &&
        (!course || alumni.course === course) &&
        (!faculty || alumni.faculty === faculty) &&
        (!campus || alumni.campus === campus) &&
        (!graduationYear || alumni.yearGraduated.toString() === graduationYear)
      )
    );
  };

  const handleSearchFields = () => {
    setLoading(true);
    filterAlumni(searchInput);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false); // Hide modal after search
    }, 500);
  };

  const highlightText = (text, search, filterType = '') => {
    if (!text || typeof text !== 'string') return text;
    if (!search && !filterType) return text;
    
    // Define highlight colors for search and filter
    const searchHighlightColor = '#30ffec';
    const filterHighlightColor = '#ffab14';
    
    let highlightedText = text;
  
    if (search) {
      const regex = new RegExp(`(${search})`, 'gi');
      highlightedText = highlightedText.replace(regex, (match) => {
        return `<span style="color: ${searchHighlightColor};">${match}</span>`;
      });
    }
  
  // Highlight filter matches
  if (filterType) {
    const filterRegex = new RegExp(`(${filterType})`, 'gi');
    highlightedText = highlightedText.replace(filterRegex, (match) => {
      return `<span style="color: ${filterHighlightColor};">${match}</span>`;
    });
  }

  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const handleFilterIconClick = () => {
    setModalAnimation('fade-in slide-down');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalAnimation('slide-up fade-out');
    setTimeout(() => {
      setModalVisible(false);
      setModalAnimation('');
    }, 300);
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
          placeholder="Search Alumnus by Name, Surname, Student Number, or Year Graduated..." 
          value={searchInput} 
          onChange={handleSearch} 
        />
        <i className="filter-icon bi bi-funnel" onClick={handleFilterIconClick}></i>
        <button className="search-button" onClick={handleSearchFields}>Search</button>
      </div>

      {pModalVisible && selectedAlumni && (
      <div className="profilemodel">
        <div className="profilemodel-container">
          <div className="profilemodel-photo">
            <img src={selectedAlumni.photo} alt={`${selectedAlumni.name} ${selectedAlumni.surname}`} />
          </div>
          <div className="profilemodel-details">
            <h2>{selectedAlumni.name} {selectedAlumni.surname}</h2>
            <p><strong>Course:</strong> {selectedAlumni.course}</p>
            <p><strong>Year Graduated:</strong> {selectedAlumni.yearGraduated}</p>
            <p><strong>Student Number:</strong> {selectedAlumni.stuno}</p>
            <button onClick={closePModal} className="close-modal">Close</button>
          </div>
        </div>
      </div>
    )}

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
     
            </div>
            <button className="search-modal-button" onClick={handleSearchFields}>Search</button>
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
      <p><span className="label">Name: </span> 
        <span style={{ color: 'white' }}>
          {highlightText(alumni.name, searchInput, name)} {/* Highlight filter match */}
        </span>
      </p>
      <p><span className="label">Surname: </span> 
        <span style={{ color: 'white' }}>
          {highlightText(alumni.surname, searchInput, surname)} {/* Highlight filter match */}
        </span>
      </p>
      <p><span className="label">Course: </span> 
        <span style={{ color: 'white' }}>
          {highlightText(alumni.course, searchInput, course)} {/* Highlight filter match */}
        </span>
      </p>
      <p><span className="label">Year Graduated: </span> 
        <span style={{ color: 'white' }}>
          {highlightText(alumni.yearGraduated.toString(), searchInput)} {/* Only search bar highlight */}
        </span>
      </p>
      <p><span className="label">Student Number: </span>
        <span style={{ color: 'white' }}>
          {highlightText(alumni.stuno.toString(), searchInput)} {/* Only search bar highlight */}
        </span>
        
      </p>
    </div>
    <a href="#" className="view-alumni" onClick={() => openModal(alumni)}>
      <i className="bi bi-eye"></i> View Alumni
    </a>
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
