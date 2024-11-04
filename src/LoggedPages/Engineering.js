import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import arts from '../images/artspicture.jpg';
import './faculty.css';

const Engineering = () => {
  return (
    <div className="arts">
      <NavbarLogged />
      <h1 className="centered-titleZ"><strong>Faculty of Engineering and the Built Environment</strong></h1>

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
              <a href="https://www.tut.ac.za/media/docs/Engineering%20and%20the%20Built%20Environment_Prospectus_2024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primaryZ download-buttonZ">Download Faculty of Engineering & Built Environment Prospectus</button>
              </a>
            </div>
          </div>

          {/* Image and Vision Container */}
          <div className="col-md-5 image-container-wrapperZ">
            <div className="image-containerZ">
              <img src={arts} alt="Artsp" className="img-fluid rounded" />
              <div className="visionZ">
                <h3>VISION</h3>
                <p>&bull; To be a Faculty that drives innovation and engagement for a sustainable society.</p>
                <h3>MISSION</h3>
                <p>&bull; To advance technology and economic transformation through relevant curricula, impactful research, collaborations,
                and community engagements.</p>
                <h3>VALUES</h3>
                <p>&bull; Excellence</p>
                <p>&bull; Resource efficiency</p>
                <p>&bull; Creativity</p>
                <p>&bull; Agility</p>
                <p>&bull; Care</p>
                <p>&bull;Accountability</p>
                <h3>STRATEGIC GOALS</h3>
                    <p><li>To deploy student-centred educational practices;</li></p>
                    <p><li>To foster capacity development within the faculty;</li></p>
                    <p><li>To develop innovation value chain amongst staff and students;</li></p>
                    <p><li>To align Faculty research with sustainable development goals to improve research impact; and</li></p>
                    <p><li>To integrate technology in all that we do.</li></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact-details">
      <h3>Faculties Contact Details</h3>
  
     <div className="contact-details-container">
    <div className="dean">
      <p><b>Executive Dean:</b> Dr MG Kanakana-Katumba  </p>
      <p><br></br><b>Assistant Dean (Research and Innovation): </b> Dr MB Shongwe <br></br></p>
      <p><br></br><b>Assistant Dean (Special Projects and WIL): </b> Dr SJ Jacobs <br></br></p>
      <p><br></br><b>Assistant Dean (Teaching and Learning): </b>Prof MC Khoathane <br></br></p>
    </div>

    <div className="secretary">
      <p><b>Executive Secretary:</b> TBT Khumalo</p>
      <p><b>Telephone Number:</b> 012 382-5328</p>
      <p><b>E-mail address:</b> Khumalotbt@tut.ac.za</p>
      <p><b>Office:</b> Building 3, Room 622B, Pretoria Campus</p><br></br>
      <br></br><p><b>Assistant Registrar:</b> Dr MJ Pieterse</p>
      <p><b>Office:</b> Dinokeng Building, Room G125, Pretoria Campus</p>
    </div>
   </div>
  </div>

      <Footer />
    </div>
  );
};

export default Engineering;
