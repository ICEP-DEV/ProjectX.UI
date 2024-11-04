import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import arts from '../images/artspicture.jpg';
import './faculty.css';

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
                The Faculty of Arts & Design boasts five departments, namely Fine & Studio Arts,
                Interior Design, Design Studies (Fashion Design & Technology and Jewellery Design & Manufacture), 
                Performing Arts (Dance, Music, Theatre Arts (Performer), Theatre Arts (Technical)), 
                and Visual Communication (Commercial Photography, Integrated Communication Design, and Motion Picture Production).
                <br /><br />
                Our programme qualification mix is locally relevant and internationally competitive. All programmes have career-focused progression possibilities – from diploma at entry-level, to advanced diplomas, postgraduate diplomas, master’s and doctoral degrees.
                <br /><br />
                The diploma programmes lay solid foundations for you to enter the world of work confidently and competently.
                <br /><br />
                The TUT programmes also keep abreast with international trends and global influences.
              </p>
              <a href="https://www.tut.ac.za/media/docs/Humanities_Prospectus_%202024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of Humanities Prospectus</button>
              </a>
            </div>
          </div>

          {/* Image and Vision Container */}
          <div className="col-md-5 image-container-wrapperZ">
            <div className="image-containerZ">
              <img src={arts} alt="Artsp" className="img-fluid rounded" />
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
