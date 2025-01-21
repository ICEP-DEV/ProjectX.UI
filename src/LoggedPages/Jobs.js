import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jobs.css';
import NavbarLogged from './NavbarLogged';
import FooterLogged from './FooterLogged';
import { Link } from 'react-router-dom';

import image1 from '../images/humanities.png';
import image2 from '../images/ict.jpg';
import image3 from '../images/science.png';
import image4 from '../images/arts.jpg';
import image5 from '../images/engineering.jpg';
import image6 from '../images/finance.jpg';
import image7 from '../images/management.jpg';


const Jobs = () => {
  return (
    <div>
    <div className="container mt-5">
      <NavbarLogged />
      <h2 className="job-title">Find A Job That Suits You</h2>

      <Carousel interval={null} indicators={false} className="custom-carousel" style={{ marginTop: '100px' }} >
        <Carousel.Item>
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={image1} alt="Job 1" className="d-block w-100 portrait-image" />
              <Link to="/jobs/Humanities">
              <button className="btn btn-primary mt-2">HUMANITIES</button>
              </Link>
            </div>

            <div className="col-md-3 text-center">
              <img src={image2} alt="Job 2" className="d-block w-100 portrait-image"/>
              <Link to="/jobs/ICT">
              <button className="btn btn-primary mt-2">ICT</button>
              </Link>
            </div>

            <div className="col-md-3 text-center">
              <img src={image3} alt="Job 3" className="d-block w-100 portrait-image" />
              <Link to="/jobs/Science">
              <button className="btn btn-primary mt-2">SCIENCE</button>
              </Link>
            </div>

            <div className="col-md-3 text-center">
              <img src={image4} alt="Job 4" className="d-block w-100 portrait-image" />
              <Link to="/jobs/Arts">
              <button className="btn btn-primary mt-2">ARTS</button>
              </Link>
            </div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
         <div className="row justify-content-center">
           <div className="col-md-3 text-center">
             <img src={image5} alt="Job 5" className="d-block w-100 portrait-image" />
             <Link to="/jobs/Engineering">
             <button className="btn btn-primary mt-2">ENGINEERING</button>
             </Link>
           </div>

          <div className="col-md-3 text-center">
             <img src={image6} alt="Job 6" className="d-block w-100 portrait-image" />
             <Link to="/jobs/Finance">
             <button className="btn btn-primary mt-2">FINANCE</button>
             </Link>
          </div>

          <div className="col-md-3 text-center">
             <img src={image7} alt="Job 7" className="d-block w-100 portrait-image" />
             <Link to="/jobs/Management Science">
             <button className="btn btn-primary mt-2">MANAGEMENT</button>
             </Link>
          </div>
        </div>
       </Carousel.Item>

      </Carousel>

    </div>
    <FooterLogged />
    </div>
  );
};

export default Jobs;
