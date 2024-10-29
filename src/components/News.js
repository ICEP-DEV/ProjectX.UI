import React, { useState } from 'react';
import './news.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.png';

function News() {
  // State to keep track of the current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of event data
  const events = [
    {
      img: image1,
      title: "About Event 1",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      img: image2,
      title: "About Event 2",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      img: image3,
      title: "About Event 3",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];

  // Function to handle clicking the right arrow
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  // Function to handle clicking the left arrow
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="events-container">
      <header className="header">
        <h1>EVENTS</h1>
      </header>
      <div className="carousel">
        <FaArrowLeft className="arrow-icon" onClick={handlePrevious} />

        {/* Display the current event card */}
        <div className="event-card">
          <img src={events[currentIndex].img} alt={events[currentIndex].title} />
          <h3>{events[currentIndex].title}</h3>
          <p>{events[currentIndex].description}</p>
          <div className="buttons">
            <button className="rsvp-button">RSVP</button>
            <button className="volunteer-button">Volunteer</button>
          </div>
        </div>

        <FaArrowRight className="arrow-icon" onClick={handleNext} />
      </div>
    </div>
  );
}

export default News;
