import React from 'react';
import './volunteer.css'; // Import the CSS file for styling
import image2 from '../images/image2.jpg'; // Adjust the path as necessary
import image1 from '../images/image1.jpg';

function Volunteer() {
  return (
    <div className="about-page">
     <div className="about-section"> 
  {/* <h2 className="section-title">Benefits</h2> */}
  <p className="section-description">
    Tax relief eligibility<br />
    Recognition on the campaign webpage.<br />
    Publicity highlighting your company's commitment to social responsibility and positive community impact through all the campaign communication platforms.
  </p>

  {/* Display the imported image */}
  <img src={image1} alt="Image 1" className="section-image" />
</div>


<div className="vision-section">
  {/* <h2 className="section-title">Ways to volunteer</h2> */}
 

  <form>
    <label>
      <input type="radio" name="volunteerOption" value="mentor" />
      Be a mentor
    </label>
    <br />

    <label>
      <input type="radio" name="volunteerOption" value="tutor" />
      Be a tutor
    </label>
    <br />

    <label>
      <input type="radio" name="volunteerOption" value="motivationalSpeaker" />
      Be a motivational Speaker
    </label>
    <br />

    <label>
      <input type="radio" name="volunteerOption" value="mc" />
      Be an MC
    </label>
  </form>

  {/* Display the imported image */}
  <img src={image2} alt="Image 2" className="section-image" />
</div>


      <a href="#" className="see-portfolio">Volunteer Now</a>

    </div>
  );
}

export default Volunteer;
