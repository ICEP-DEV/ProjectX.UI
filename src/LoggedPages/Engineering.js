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
              The Chapter was launched on 25 November 2022 with Alumni from TUT, former technikons, academia and industry partners. At least 100+ people attended the event at Pretoria campus. The launch was graced with the exhibition of the latest innovations and mock-ups from FEBE, including the award-winning TUT Sunchaser Solar car.
                <br /><br />
                The Alumni proposed the partnerships with TUT on the establishment of training centres within communities, similarly to Itireleng Training Centre situated at the Vaal, south-east of Gauteng province. The interim’s steering committee was nominated from the people that attended the launch event.
                <br /><br />
                With departments in Chemical, Civil, Electrical, Industrial, and Mechanical Engineering, the Faculty of Engineering and the Built Environment provides a hands-on approach to technical education.
                <br></br> <br></br>Students can pursue diplomas in specialties like Building Science, Geomatics, and Industrial Design, leading to degrees in engineering technology. From diplomas to doctoral degrees, these programs emphasize industry alignment, preparing graduates for roles in consulting, design, construction, and project management in engineering.
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
