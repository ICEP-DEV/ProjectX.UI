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
                <h3>GENERAL FACULTY RULES - </h3>
                <p>At the Faculty of ICT the following rules apply:</p>
                <p>&bull;  A student may repeat any subject offered in any of the qualifications at the Faculty of Information and
                          Communication Technology only twice.</p>
                <p>&bull;  Students must complete all subjects before registering for Industry Exposure IIIB. Students with only one
                          subject outstanding may be allowed to register for Industry Exposure IIIB, with the approval of the Head
                           of Department.</p>
                <p>&bull; A student must complete a qualification at the learning site where he/she was accepted and is registered. A
                         transfer between sites will only be considered if the student follows the following process: A formal request
                         must be submitted to the Academic manager/Head of the Department on the current learning site by the
                         second Friday in October (to be considered for a transfer in January of the following year). The request
                         must contain the reasons for the transfer.</p>
                
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact-details">
      <h3>Faculties Contact Details</h3>
  
     <div className="contact-details-container">
    <div className="dean">
      <p><b>Executive Dean:</b> Dr EA van Wyk - BSc (Hons) (Computer Science) (Unisa), M Tech (Information Technology) (Tech Pta), PhD (Information Systems) (Unisa)</p>
      <p><br></br><b>Assistant Dean (Postgraduate Studies, Research and Innovation): </b> Dr AB Pretorius - BSc (Hons) (Information Systems) (Unisa), MBL (Unisa), D Tech (Business Information Systems) (TUT)<br></br></p>
      <br></br><p><b>Acting Assistant Dean :</b> Dr DP du Plessis - BML (UFS), MIT (UP), PhD (IT) (NWU) </p>
      
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
