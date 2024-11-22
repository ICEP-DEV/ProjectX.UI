import React, { useState, useRef } from "react";
import "./RadioPage.css";
import Vid1 from "./radio video/Plug an Alumni.mp4";
import Vid2 from "./radio video/Plug a Graduate.mp4";
import divider1 from "./radio photos/Divider 3.png";
import divider2 from "./radio photos/Divider 2.png";
import Footer from '../Footer';

import cardImage1 from "./radio photos/photos/2.png";  // Add your image imports
import cardImage2 from "./radio photos/photos/1.png";
import cardImage3 from "./radio photos/photos/3.png";
import cardImage4 from "./radio photos/photos/4.png";
import cardImage5 from "./radio photos/photos/5.png";
import cardImage6 from "./radio photos/photos/6.png";
import TutLogo from "./radio photos/fm logo.png";


const RadioPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false); // Manage text visibility
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
  const cardWrapperRef = useRef();
  const handlePlayButtonClick = (id) => {
    setActivePlayerCard((prev) => (prev === id ? null : id)); // Toggle the audio player
  };
  
  const [activePlayerCard, setActivePlayerCard] = useState(null); // Track card with active audio player
  const [animationClass, setAnimationClass] = useState(""); // Track animation

  const handleClosePlayer = () => {
    setAnimationClass("fade-out"); // Trigger fade-out animation
    setTimeout(() => {
      setActivePlayerCard(null); // Remove audio player after animation ends
      setAnimationClass(""); // Reset animation class
    }, 300); // Match animation duration
  };
  

  const cards = [
    { 
      id: 1, 
      title: "Dr Linda Mayer", 
      talks: "Guidance for career success", 
      hostedBy: "Zenzo Matiza", 
      image: cardImage1,
      description: "On the Ground Breaker Show this past Wednesday...",
      description2: "We took a deep dive into diverse fields of study with Plug-A-Graduate, hosted by Polelo N Madisa. Listeners joined us from 7 pm to 9 pm, gaining valuable insights from special guest Dr. Linda Mayer, Managing Director at IIE Rosebank College. It was an enlightening evening packed with inspiration and expert advice for graduates and aspiring professionals alike!",
      date: "2 October 2024",
      location: "Pretoria, Soshanguve",
    },
    { 
      id: 2, 
      title: "Mrs Nokuthula Makhanya", 
      talks: "Educational strategies", 
      hostedBy: "Mbali Mbele", 
      image: cardImage2,
      description: "Last night on the Ground Breaker Show...",
      description2: "PLUG-A-GRADUATE with Polelo N Madisa featured a captivating segment from 19:00 to 21:00. The spotlight was on Nokuthula Makhanya, Managing Director at NPM Consulting (PTY) LTD, as she shared invaluable insights on how to break into the job market. With a deep commitment to professional integrity.",
      date: "5 October 2024",
      location: "Pretoria, Soshanguve",
    },
    { 
      id: 3, 
      title: "Mr Oupa Segalwe", 
      talks: "Biography", 
      hostedBy: "Galaletsang Shadi", 
      image: cardImage3,
      description: "Earlier, you caught PLUG-A-GRADUATE...",
      date: "12 October 2024",
      location: "Pretoria, Soshanguve",
    },
    { 
      id: 4, 
      title: "Mr Obakeng Aubrey Moeketsi", 
      talks: "Industry experts share insights", 
      hostedBy: "Mathekga Senyolo", 
      image: cardImage4,
      description: "Earlier this month, listeners tuned in for a special live broadcast...",
      date: "03 November 2024",
      location: "Pretoria, Soshanguve",
    },
    { 
      id: 5, 
      title: "Mrs Reabetswe Dire", 
      talks: "Turning knowledge into income", 
      hostedBy: "Obakeng Mooketsi", 
      image: cardImage5,
      description: "Earlier on today’s insightful episode of Plug-A-Graduate...",
      date: "19 November 2024",
      location: "Pretoria, Soshanguve",
    },
    { 
      id: 6, 
      title: "Mrs Shalate Davhana", 
      talks: "Crime Protection", 
      hostedBy: "Khuthadzo Tshianzi", 
      image: cardImage6,
      description: "The show discussed how it became a game-changer for recent graduates...",
      date: "15 November 2024",
      location: "Pretoria, Soshanguve",
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
    setDragDistance(0);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    setDragDistance(0);
  };

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX); // Track initial cursor/touch position
    setDragDistance(0); // Reset drag distance
  };

  const handleDragMove = (e) => {
    if (dragStartX !== null) {
      const currentX = e.clientX || e.touches[0].clientX;
      setDragDistance(currentX - dragStartX); // Update drag distance
    }
  };

  const handleDragEnd = () => {
    if (dragDistance > 50) {
      // Swipe right
      handlePrev();
    } else if (dragDistance < -50) {
      // Swipe left
      handleNext();
    }
    setDragDistance(0); // Reset drag distance after swipe
    setDragStartX(null);
  };

  const toggleTextVisibility = () => {
    setIsTextVisible((prev) => !prev); // Toggle the visibility of the text
  };

  const handleMouseEnter = (id) => {
    setHoveredCard(id); // Set hovered card
  };

  const handleMouseLeave = () => {
    setHoveredCard(null); // Reset hovered card
  };

  return (
    <div className="radio-page">
      {/* Video Section */}
      <div className="video-container">
        <video src={Vid1} autoPlay loop muted className="radio-video" />
      </div>

      {/* Divider Photo 1 */}
      <img src={divider1} alt="Divider 1" className="divider-photo" />

      {/* Text Section */}
      <div className="text-section">
        <h2>What is Plug an Alumni?</h2>
        <p>
          Plug an Alumni is the space to catch up with inspiring voices from our
          TUT alumni! Here, you'll find both podcast and radio recordings where
          graduates share their experiences, insights, and achievements. In the
          Podcasts section, explore in-depth interviews and discussions, while
          the Radio Recordings section offers highlights and memorable moments
          from live broadcasts on TUT FM. It's your go-to spot for staying
          connected and motivated by the journeys of those who have walked the
          path before you!
        </p>
      </div>

      {/* Divider Photo 2 */}
      <img src={divider2} alt="Divider 2" className="divider-photo" />

      {/* Video Section */}
      <div className="video-container">
        <video src={Vid2} autoPlay loop muted className="radio-video" />
      </div>

      {/* Divider Photo 1 */}
      <img src={divider1} alt="Divider 1" className="divider-photo" />

      {/* Text Section 2 */}
      <div className="text-section">
        <div className="info-icon-container">
          <button
            className="info-icon"
            onClick={toggleTextVisibility} // Toggle text visibility when clicked
          >
            i
          </button>
        </div>
        <div
          className={`text-content ${isTextVisible ? "show" : "hide"}`} // Add smooth transition classes
        >
          <h2>What is Plug a Graduate all about?</h2>
          <p>
            Plug an Alumni is the space to catch up with inspiring voices from our
            TUT alumni! Here, you'll find both podcast and radio recordings where
            graduates share their experiences, insights, and achievements. In the
            Podcasts section, explore in-depth interviews and discussions, while
            the Radio Recordings section offers highlights and memorable moments
            from live broadcasts on TUT FM. It's your go-to spot for staying
            connected and motivated by the journeys of those who have walked the
            path before you!
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div
        className="card-section"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
<div className="card-wrapper" ref={cardWrapperRef}>
  {cards.map((card, index) => (
    <div
      key={card.id}
      className={`card ${index === currentCard ? "active" : ""}`}
      style={{
        transform: `translateX(${
          (index - currentCard) * 120 + (index === currentCard ? dragDistance / 5 : 0)
        }%)`,
        opacity: index === currentCard ? 1 : 0.5,
      }}
      onMouseEnter={() => handleMouseEnter(card.id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image-container">
        <img
          src={card.image}
          alt={card.title}
          className="card-image"
        />
      </div>
      

      <h3 className="person-name">{card.title}</h3>
      <p className="position">
        (<b>Talks:</b> {card.talks})
      </p>
      <p className="position2">
        <span className="hostedby"><b>Hosted By: </b></span>{card.hostedBy}
      </p>

      {hoveredCard === card.id && (
  <div className="card-hover">
    {activePlayerCard === card.id ? ( // Only show the audio player if this card is active
      <div className={`audio-player ${animationClass}`}>
        <div className="audio-player-header">
        <h3>Now Playing</h3>

        <a href="https://tutfm962.co.za/" target="_blank" rel="noopener noreferrer">
          <img src={TutLogo} alt="TUT Logo" className="tut-logo" />
        </a>
    
    <button className="close-button" onClick={handleClosePlayer}>
      &times; {/* Close icon */}
    </button>
        </div>

          {/* Artist Image */}
  <div className="audio-player-artist-image-container">
    {hoveredCard && (
      <img
        src={cards.find((card) => card.id === hoveredCard)?.image}
        alt="Artist"
        className="audio-player-artist-image"
      />
    )}
  </div>

        <div className="audio-player-song-info">
          <h3>{card.title}</h3>
          <p><b>Talks:</b> {card.talks}</p>
        </div>
        <div className="audio-player-controls">
          <button><i className="bi bi-skip-backward-fill"></i></button>
          <button><i className="bi bi-play-fill"></i></button>
          <button><i className="bi bi-skip-forward-fill"></i></button>
        </div>
        <div className="audio-player-progress">
          <span>1:50</span>
          <input type="range" min="0" max="100" value="50" />
          <span>3:42</span>
        </div>
      </div>
    ) : (
      <div className="card-details">
        <p><strong className="hc-para1">{card.title}</strong></p>
        <p><strong className="hc-para2">{card.description}</strong></p>
        <p><strong className="hc-para4">{card.description2}</strong></p>
        <p><strong className="hc-para3"><b>Date:</b> {card.date}</strong></p>
        <p><strong className="hc-para3"><b>Location:</b> {card.location}</strong></p>
        <div className="play-button-container">
          <button
            className="play-button"
            onClick={() => {
              setActivePlayerCard(card.id);
              setAnimationClass("fade-in"); // Trigger fade-in animation
            }}
          >
            <i className="bi bi-play-fill"></i>
          </button>
        </div>
      </div>
    )}
  </div>
)}



    </div>
  ))}
</div>


        {/* Navigation Buttons */}
        <div className="card-navigation">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>

<Footer />
    </div>
  );
};

export default RadioPage;
