import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jobs.css';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import image1 from '../images/humanities.png';
import image2 from '../images/ict.jpg';
import image3 from '../images/science.png';
import image4 from '../images/humanities.png';
import image5 from '../images/ict.jpg';
import image6 from '../images/science.png';
import image7 from '../images/humanities.png';


const Jobs = () => {
  return (
    <div>
    <div className="container mt-5">
      <NavbarLogged />
      <h2 className="job-title">Find A Job That Suits You</h2>

      <Carousel interval={null} indicators={false} className="custom-carousel">
        <Carousel.Item>
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={image1} alt="Job 1" className="d-block w-100 portrait-image" />
              <Link to="/jobs-humanities">
              <button className="btn btn-primary mt-2">HUMANITIES</button>
              </Link>
            </div>
            <div className="col-md-3 text-center">
              <img src={image2} alt="Job 2" className="d-block w-100 portrait-image" />
              <button className="btn btn-primary mt-2">ICT</button>
            </div>
            <div className="col-md-3 text-center">
              <img src={image3} alt="Job 3" className="d-block w-100 portrait-image" />
              <button className="btn btn-primary mt-2">SCIENCE</button>
            </div>
            <div className="col-md-3 text-center">
              <img src={image4} alt="Job 4" className="d-block w-100 portrait-image" />
              <button className="btn btn-primary mt-2">ARTS</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
         <div className="row justify-content-center">
           <div className="col-md-3 text-center">
             <img src={image5} alt="Job 5" className="d-block w-100 portrait-image" />
             <button className="btn btn-primary mt-2">ENGINEERING</button>
           </div>
          <div className="col-md-3 text-center">
             <img src={image6} alt="Job 6" className="d-block w-100 portrait-image" />
             <button className="btn btn-primary mt-2">FINANCE</button>
          </div>
          <div className="col-md-3 text-center">
             <img src={image7} alt="Job 7" className="d-block w-100 portrait-image" />
             <button className="btn btn-primary mt-2">MANAGEMENT</button>
          </div>
        </div>
       </Carousel.Item>

      </Carousel>

    </div>
    <Footer />
    </div>
  );
};

export default Jobs;
