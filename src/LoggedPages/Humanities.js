import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import arts from '../images/artspicture.jpg';
import './faculty.css';
import huma from '../images/chapter of humanities.png';

const Humanities = () => {
  return (
    <div className="arts">
      <NavbarLogged />
      <h1 className="centered-titleZ"><strong>Faculty of Humanities</strong></h1>

      <div className="containerZ">
        <div className="row justify-content-between align-items-start">
          
          {/* Text Container */}
          <div className="col-md-5 text-container-wrapperZ"> 
            <div className="text-containerZ">
              <p>
              The Faculty of Humanities at Tshwane University of Technology celebrated a significant milestone on September 8, 2023, with the official launch of its Alumni Chapter. This momentous occasion brought together over 150 esteemed alumni from diverse fields.
                <br /><br />
                The gathering included representatives from journalism, law, teaching, public relations, government, and the South African Police Services. The Faculty Alumni Chapter aims to prepare graduates for the dynamic workforce and entrepreneurship, support strategic university initiatives, and foster lifelong connections between alumni, students, and the university.
                <br /><br />
                Through mentorship, networking, career guidance, and collaborative projects, the Alumni Chapter will empower Humanities graduates to achieve their full potential. By uniting alumni, industry, and academia, this chapter paves the way for innovative collaborations and shapes the future of Humanities professionals.
                <br /><br />
                The launch marked a new era of partnership and growth for the Faculty of Humanities, its alumni, and the university. As the chapter grows, it will continue to support the university's mission and foster a community of passionate, dedicated, and successful Humanities graduates.
                <br></br>
                <br></br>This faculty encompasses the departments of Education, Public Affairs, Journalism, Law, and Language Practice. The Bachelor of Education (BEd) offers options across Foundation, Intermediate, and Senior Phase Teaching, while diplomas cover fields like Journalism, Law, and Policing. Graduates can pursue advanced diplomas, master’s, and doctoral studies, especially in areas like public administration, journalism, and educational leadership, shaping careers in public service, communication, and education.
              </p>
              <a href="https://www.tut.ac.za/media/docs/Humanities_Prospectus_%202024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of Humanities Prospectus</button>
              </a>
            </div>
          </div>

          {/* Image and Vision Container */}
          <div className="col-md-5 image-container-wrapperZ">
            <div className="image-containerZ">
              <img src={huma} alt="Artsp" className="img-fluid rounded" />
              <div className="visionZ">
                <h3>VISION</h3>
                <p>&bull; The Faculty of Humanities’ vision is subsumed in, and supports the TUT vision of pioneering an enterprising
                          and transformative brand of twenty-first Century University of Technology scholarship through the values
                          enunciated hereunder.</p>
                <h3>MISSION</h3>
                <p>In helping fulfil the overall TUT mission, the Faculty of Humanities will support its students to achieve their
                highest potential in a safe, enabling and conducive environment by: </p>
                <p><li>Fostering a scholarship of teaching and learning.</li></p>
                <p><li>Providing relevant and competitive academic programmes with seamless articulation pathways.</li></p>
                <p><li>Investing in state-of-the-art technology.</li></p>
                <p><li>Conducting relevant research and promoting innovation, engagement and social enterprise.</li></p>
                <h3>VALUES</h3>
                <p>To attain the institutional vision, staff and students of the Faculty of Humanities commit to:</p>
                <p>&bull; Social accountability;</p>
                <p>&bull; Duty of care;</p>
                <p>&bull; Non-discrimination; and</p>
                <p>&bull; Greening the environment</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact-details">
      <h3>Faculties Contact Details</h3>
  
     <div className="contact-details-container">
    <div className="dean">
      <p><b>Executive Dean:</b> Prof MH Maserumule </p>
      <p><br></br><b>Assistant Dean (Postgraduate Studies, Research and Innovation): </b> Prof T de Jager <br></br></p>
      <p><br></br><b>Assistant Dean (Teaching and Learnng): </b> Prof HB Dondolo <br></br></p>
      <br></br><p><b>Assistant Registrar:</b> Mr JM Moshime</p>
      <p><b>Telephone Number:</b> 012 382 9037</p>
      <p><b>E-mail address:</b> moshimejm@tut.ac.za</p>
      <p><b>Office:</b> Building 07, Room G14, Soshanguve South Campus</p><br></br>
    </div>

    <div className="secretary">
      <p><b>Executive Administrator(Office of the Executive Dean):</b> Ms K Masombuka</p>
      <p><b>Telephone Number:</b> 012 382 9572</p>
      <p><b>E-mail address:</b> Masombukak@tut.ac.za</p>
      <p><b>Office:</b> Building 17, Room 17-104A, Soshanguve South Campus</p><br></br>
      <br></br><p><b>Executive Administrator:</b> Ms PM Rahlogo</p>
      <p><b>Office of the Assistant Dean(Teaching and Learning):</b> Building 17, Room 17-104, Soshanguve South Campus</p>
      <p><b>Telephone number:</b> 012 382 9155</p>
      
    </div>
   </div>
  </div>

      <Footer />
    </div>
  );
};

export default Humanities;
