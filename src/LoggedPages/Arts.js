import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import arts from '../images/artspicture.jpg';
import './faculty.css';

const Arts = () => {
  return (
    <div className="arts">
      <NavbarLogged />
      <h1 className="centered-titleZ"><strong>Faculty of Arts and Design</strong></h1>

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
              <a href="https://www.tut.ac.za/media/docs/Arts%20and%20Design_Prospectus_2024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of Arts and Design Prospectus</button>
              </a>
            </div>
          </div>

          {/* Image and Vision Container */}
          <div className="col-md-5 image-container-wrapperZ">
            <div className="image-containerZ">
              <img src={arts} alt="Artsp" className="img-fluid rounded" />
              <div className="visionZ">
                <h3>VISION</h3>
                <p>&bull; To be a competitive Faculty of Arts and Design that nurtures creativity, innovation, and cultural understanding.</p>
                <h3>MISSION</h3>
                <p>&bull; Developing and stimulating the artistic potential and abilities of our students through relevant, recognised, and career-focused programmes.</p>
                <p>&bull; Engaging in research and innovation.</p>
                <p>&bull; Encouraging and recognising artistic outputs.</p>
                <p>&bull; Utilizing and developing technology towards artistic expression.</p>
                <p>&bull; Contributing to culture-led social, economic, and physical regeneration.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact-details">

        
      </div>

      <Footer />
    </div>
  );
};

export default Arts;
