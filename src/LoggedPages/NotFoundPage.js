import React, { useEffect } from "react";
import Moon from './LoggedInPhotos/Moon.png';
import Astronaut from './LoggedInPhotos/astronaut2.png';
import Earth from './LoggedInPhotos/earth.png';
import Rocket from './LoggedInPhotos/rocket.png';
import No404 from './LoggedInPhotos/404.png';
import ASLogo from '../images/aslogo.png';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  useEffect(() => {
    // Add the class for pan-in animation when the component loads
    document.body.classList.add('rp-login-page');
    document.querySelector('.fof-root')?.classList.add('animate-in');
    
    // Clean up when leaving the page
    return () => {
      document.body.classList.remove('rp-login-page');
    };
  }, []);

  return (
    <div className="fof-root">
      <div className="fof-bg-purple">
        <div className="fof-stars">
          <div className="fof-custom-navbar">
            <div className="fof-brand-logo">
              <img src={ASLogo} width="80px" alt="Logo" />
            </div>
          </div>
          <div className="center-404">
            <div className="fof-central-body">
              <img className="fof-image-404" src={No404} width="300px" alt="404" />
              <Link className="fof-btn-go-home" to="/logged">GO BACK HOME</Link>
            </div>
          </div>

          <div className="fof-objects">
            <img className="fof-object_rocket" src={Rocket} width="40px" alt="Rocket" />
            <div className="fof-earth-moon">
              <img className="fof-object_earth" src={Earth} width="100px" alt="Earth" />
              <img className="fof-object_moon" src={Moon} width="80px" alt="Moon" />
            </div>
            <div className="fof-box_astronaut">
              <img className="fof-object_astronaut" src={Astronaut} width="210px" alt="Astronaut" />
            </div>
          </div>
          <div className="fof-glowing_stars">
            <div className="fof-star"></div>
            <div className="fof-star"></div>
            <div className="fof-star"></div>
            <div className="fof-star"></div>
            <div className="fof-star"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
