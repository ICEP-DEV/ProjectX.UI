import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import arts from '../images/artspicture.jpg';
import './faculty.css';

const Humanities = () => {
  return (
    <div className="arts">
      <NavbarLogged />
      <h1 className="centered-titleZ"><strong>Faculty of Science </strong></h1>

      <div className="containerZ">
        <div className="row justify-content-between align-items-start">
          
          {/* Text Container */}
          <div className="col-md-5 text-container-wrapperZ"> 
            <div className="text-containerZ">
              <p>
                Departments in this faculty cover Agriculture, Environmental Sciences, Health Sciences, and Industrial Chemistry. Programs range from diplomas to bachelor’s degrees, with advanced opportunities in applied sciences. Courses like Biotechnology, Radiography, Environmental Health, and Veterinary Technology align with high-demand industries, providing pathways for research and field-specific roles, with graduates well-prepared for sectors like healthcare, environmental protection, and agricultural innovation.
                Each faculty is structured to provide practical experience and professional growth, with an academic progression that supports career advancement in both South African and global markets.
                <br /><br />
                Our programme qualification mix is locally relevant and internationally competitive. All programmes have career-focused progression possibilities – from diploma at entry-level, to advanced diplomas, postgraduate diplomas, master’s and doctoral degrees.
                <br /><br />
                The diploma programmes lay solid foundations for you to enter the world of work confidently and competently.
                <br /><br />
                The TUT programmes also keep abreast with international trends and global influences.
              </p>
              <a href="https://www.tut.ac.za/media/docs/Science_2024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of Science Prospectus</button>
              </a>
            </div>
          </div>

          {/* Image and Vision Container */}
          <div className="col-md-5 image-container-wrapperZ">
            <div className="image-containerZ">
              <img src={arts} alt="Artsp" className="img-fluid rounded" />
              <div className="visionZ">
                <h3>VISION</h3>
                <p>&bull; A people's university that makes knowledge work.</p>
                <h3>MISSION</h3>
                <p>&bull; We advance social and economic transformation through relevant curricula, impactful research and engagement, quality learning experiences, dedicated staff and an enabling environment.</p>
                <h3>VALUE STATEMENTS</h3>
                <p>&bull; Integrity</p>
                <p>We will always act honestly, ethically and professionally.</p>
                <p>&bull; Care</p>
                <p>We will treat everyone with dignity and respect and green our environment.</p>
                <p>&bull; Diversity, Inclusion and Equity</p>
                <p>We will embrace diversity, foster inclusivity and promote equity.</p>
                <p>&bull; Excellence</p>
                <p>We will constantly innovate, solve problems and aim to improve ourselves and others.</p>
                <p>&bull;  Accountability</p>
                <p>We are answerable to each other and will act in the best interest of the university at all times.</p>
                
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact-details">
      <h3>Faculties Contact Details</h3>
  
     <div className="contact-details-container">
    <div className="dean">
      <p><b>Executive Dean:</b> Prof N Mokgalaka </p>
      <p><br></br><b>Assistant Dean (Research, Innovation and Engagement): </b> Prof Y Paul <br></br></p>
      <br></br><p><b>Acting Assistant Dean (Teaching, Learning and Technology): </b> Prof Y Havenga  </p>
      
    </div>

    <div className="secretary">
      <p><b>Executive Secretary:</b>MML Malatja</p>
      <p><b>Telephone Number:</b> 012 382 6209/6208</p>
      <p><b>Office:</b>Building 1, Room 1-121A, Arcadia Campus</p><br></br>
      <br></br><p><b> Acting Assistant Registrar:</b> J Mokonyane</p>
      <p><b>Telephone number: </b>012 382 6248</p>
      <p><b>Office: </b> Building 1, Room G14, Arcadia Campus</p>
      
    </div>
   </div>
  </div>

      <Footer />
    </div>
  );
};

export default Humanities;
