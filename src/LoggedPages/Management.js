import React from 'react';
import NavbarLogged from './NavbarLogged';
import arts from '../images/artspicture.jpg';
import './faculty.css';
import FooterLogged from './FooterLogged';
import mang from '../images/chaper of management science.jpg';

const Humanities = () => {
  return (
    <div className="arts">
      <NavbarLogged />
      <h1 className="centered-titleZ"><strong>Faculty of Management Sciences </strong></h1>

      <div className="containerZ">
        <div className="row justify-content-between align-items-start">
          
          {/* Text Container */}
          <div className="col-md-5 text-container-wrapperZ"> 
            <div className="text-containerZ">
              <p>
                This faculty includes departments like Human Resource Management, Marketing, and Sport Management, alongside fields in Tourism and Public Administration. Programs start with diplomas, advancing through degrees to master’s and doctoral levels. The curriculum combines business acumen with sector-specific skills, preparing students for roles in management, marketing, event planning, and public service, catering to diverse career paths within business and government.
                <br /><br />
                Our programme qualification mix is locally relevant and internationally competitive. All programmes have career-focused progression possibilities – from diploma at entry-level, to advanced diplomas, postgraduate diplomas, master’s and doctoral degrees.
                <br /><br />
                The diploma programmes lay solid foundations for you to enter the world of work confidently and competently.
                <br /><br />
                The TUT programmes also keep abreast with international trends and global influences.
              </p>
              <a href="https://www.tut.ac.za/media/docs/Management%20Sciences_Prospectus_2024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of Management Sciences</button>
              </a>
            </div>
          </div>

          {/* Image and Vision Container */}
          <div className="col-md-5 image-container-wrapperZ">
            <div className="image-containerZ">
              <img src={mang} alt="Artsp" className="img-fluid rounded specific-image" />
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
      <p><b>Executive Dean:</b> Dr AE Nesamvuni </p>
      <p><br></br><b>Assistant Dean : </b> Prof NN Tshipala  <br></br></p>
      <br></br><p><b>Associate Dean :</b> Prof EM Rankhumise  </p>
      
    </div>

    <div className="secretary">
      <p><b>Executive Secretary:</b>SE Nkomzwayo</p>
      <p><b>Telephone Number:</b> 012 382 5632/5580</p>
      <p><b>E-mail address:</b> nkomzwayose@tut.ac.za</p>
      <p><b>Office:</b> Building 30, Room 288, Pretoria Campus</p><br></br>
      <br></br><p><b>Assistant Registrar:</b> R van Wyk</p>
      <p><b>Office: </b> Dinokeng Building, Room G119, Pretoria Campus</p>
      <br></br><p><b>Assistant Registrar (eMalahleni Campus): </b> Prof MJ Maleka</p>
      
    </div>
   </div>
  </div>

      <FooterLogged />
    </div>
  );
};

export default Humanities;
