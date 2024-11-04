import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import arts from '../images/artspicture.jpg';
import './faculty.css';

const Economics = () => {
  return (
    <div className="arts">
      <NavbarLogged />
      <h1 className="centered-titleZ"><strong>Faculty of Economics and Finance</strong></h1>

      <div className="containerZ">
        <div className="row justify-content-between align-items-start">
          
         
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
              <a href="https://www.tut.ac.za/media/docs/Economics%20and%20Finance_Prospectus_2024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of Economics and Finance Prospectus</button>
              </a>
            </div>
          </div>

         
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
      <p><b>Executive Dean and Interim:</b> Prof MP Mashigo </p>
      <p><br></br><b>Acting Assistant Dean: </b> Dr KN Motubatse <br></br></p>
    </div>

    <div className="secretary">
      <p><b>Campus Rector:</b> Dr Elikanah Lumadi </p>
      <p><b>Telephone Number:</b> 012 382 0693/0530</p>
      <p><b>E-mail address:</b> mashigomp@tut.ac.za</p><br></br>
      <br></br><p><b>Assistant Registrar:</b> T Lebese</p>
      <p><b>Office:</b> Building 1, Room G06B, Ga-Rankuwa Campus</p>
    </div>
   </div>
  </div>

      <Footer />
    </div>
  );
};

export default Economics;
