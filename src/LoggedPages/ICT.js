import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import arts from '../images/artspicture.jpg';
import './faculty.css';

const Humanities = () => {
  return (
    <div className="arts">
      <NavbarLogged />
      <h1 className="centered-titleZ"><strong>Faculty of Information and Communication Technology</strong></h1>

      <div className="containerZ">
        <div className="row justify-content-between align-items-start">
          
          {/* Text Container */}
          <div className="col-md-5 text-container-wrapperZ"> 
            <div className="text-containerZ">
              <p>
              Tshwane University of Technology's (TUT) Faculty of Information and Communication Technology (FoICT) launched its Alumni Chapter on June 15, 2023. The event brought together approximately 200 esteemed alumni from diverse ICT fields, including Computer Science, Computer Systems Engineering, Information Technology, Informatics, and Multimedia Computing.
                <br /><br />
                The FoICT Alumni Chapter aims to foster a strong network of graduates, support career advancement and knowledge sharing, and enhance the University's mission of making knowledge work.
                <br /><br />
                As the only higher education institution in Southern Africa with a dedicated Faculty of Information and Communication Technology, TUT occupies a unique position in specializing in various ICT areas.
                <br /><br />
                The chapter's establishment promises to strengthen industry connections, encourage collaboration and innovation, and provide opportunities for mentorship and professional growth.
                <br></br><br></br>
                TUT's FoICT Alumni Chapter is poised to become a vibrant hub for ICT professionals, shaping the future of the industry.
              </p>
              <a href="https://www.tut.ac.za/media/docs/ICT_Prospectus_2024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of ICT Prospectus</button>
              </a>
            </div>
          </div>

          {/* Image and Vision Container */}
          <div className="col-md-5 image-container-wrapperZ">
            <div className="image-containerZ">
              <img src={arts} alt="Artsp" className="img-fluid rounded" />
              <div className="visionZ">
                <h3>VISION</h3>
                <p>&bull; To be a quality-driven locally relevant and internationally comparable university of technology ICT faculty at
                         the cutting edge of ICT innovation.</p>
                <h3>MISSION</h3>
                <p><li>Offering a portfolio of locally relevant, internationally recognised and career-focused ICT programmes.</li></p>
                <p><li>Producing well rounded ICT graduates who are attuned to the needs of the economy.</li></p>
                <p><li> Being an ICT research and innovation hub responsive to the national, regional and global challenges.</li></p>
                <p><li>Acting as an incubator for ICT postgraduate study in clearly defined areas of strength.</li></p>
                <p><li>enerating, integrating and applying ICT knowledge to stimulate socio-economic development.</li></p>
                <p><li>Partnering communities in ICT-enabled sustainable development.</li></p>
                <p><li>Being student-centred and quality-driven in all our endeavours.</li></p>
                
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact-details">
      <h3>Faculties Contact Details</h3>
  
     <div className="contact-details-container">
    <div className="dean">
      <p><b>Executive Dean:</b> Dr EA van Wyk </p>
      <p><br></br><b>Assistant Dean (Postgraduate Studies, Research and Innovation): </b> Dr AB Pretorius<br></br></p>
      <br></br><p><b>Acting Assistant Dean :</b> Dr DP du Plessis  </p>
      
    </div>

    <div className="secretary">
      <p><b>Acting Executive Secretary:</b>Ms LJ Mafora</p>
      <p><b>Telephone Number:</b> 012 382-92</p>
      <p><b>E-mail address:</b> maforalj@tut.ac.za</p>
      <p><b>Office:</b> Building 12, Room 178E, Soshanguve South Campus</p><br></br>
      <br></br><p><b>Assistant Registrar:</b> S Mokgatle</p>
      <p><b>Office: </b> Building 7G, Room 11, Soshanguve South Campus</p>
      
    </div>
   </div>
  </div>

      <Footer />
    </div>
  );
};

export default Humanities;
