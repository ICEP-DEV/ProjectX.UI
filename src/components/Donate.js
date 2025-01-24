import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Donate.css';
import FooterLogged from '../LoggedPages/FooterLogged';


 import donate1 from '../LoggedPages/LoggedInPhotos/donate1.jpeg'
 import donate2 from '../LoggedPages/LoggedInPhotos/donate2.jpeg'
import homepg3 from '../LoggedPages/LoggedInPhotos/homepg3.jpeg'
import { SubTitle } from 'chart.js';
import { Description } from '@mui/icons-material';

const donateData = [
    { id: 1, 
      title: 'TUT Bursary and Scholarship Fund',
      SubTitle:'Supporting Academic Excellence ',
      Description:'The TUT Bursary and Scholarship Fund is dedicated to empowering talented students by providing financial assistance for their educational journey. This initiative ensures that deserving individuals have the opportunity to achieve academic success and contribute meaningfully to society.',
      image: donate1
    },

    { id: 2, 
      title: 'Soshanguve Digital Library',
      SubTitle:'Empowering Learning through Technology',
      Description:'The Soshanguve Digital Library is a state-of-the-art resource hub designed to provide students and the community with access to digital academic resources, cutting-edge research tools, and collaborative learning spaces. It bridges the gap between education and technology, fostering innovation and knowledge sharing.',
      image: donate2
     },

    { id: 3,
      title: 'Alumni Annual Trust Fund',
      SubTitle:'Investing in Futures',
      Description:'The Alumni Annual Trust Fund is a dedicated initiative aimed at supporting student success, fostering alumni engagement, and driving impactful community programs. It serves as a bridge between alumni generosity and meaningful opportunities for future generations.',
      image: homepg3 
     },
  
  ];

  
const Donate = () => {
    return (
        <div>
            <Container className="donation-journey" style={{ paddingBottom: '220px' }}>
                {/* <div className="text-center mb-4">
                    <h3>Donation</h3>
                </div>

                <div className="text-center mt-2">
                    <div className="donation-info">
                        <p>
                            Thank you for your donation. We would like to extend our sincere gratitude to you for your generous donations and contributions made to our Institution. Please click on the donate button to be redirected to the donation journey and to complete your donation process.
                        </p>
                    </div>
                </div> */}


      <section className="donate-section" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-4" style={{ paddingTop: '5px' }}>Donation Projects</h2>
          </div>
        </div>
        <div className="row">

          {donateData.map(donate => (
            <div className="col-lg-3 col-md-6 col-sm-12 donate-item" key={donate.id}>
              <div className="donate-content">
              <img src={donate.image} alt={donate.title} className="donate-image img-fluid" />
              </div>
              <h4 className="donate-title">{donate.title}</h4>
              <h5 className='donate-subtitle'>{donate.SubTitle}</h5>
             <p className="donate-description">{donate.Description}</p> 
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <div className="donation-info">
                        <p>
                            Thank you for your donation. We would like to extend our sincere gratitude to you for your generous donations and contributions made to our Institution. Please click on the donate button to be redirected to the donation journey and to complete your donation process.
                        </p>
                    </div> */}

                <div className="mx-auto text-center">
                    <Button
                        variant="primary"
                        onClick={() => window.location.href = 'https://tut.devman.co.za/Devman/online/giving/'}
                    >
                        Donate
                    </Button>
                </div>
            </Container>
            <FooterLogged />
        </div>
    );
};

export default Donate;
