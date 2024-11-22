import React, { useEffect, useState, useRef } from "react";
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
import 'font-awesome/css/font-awesome.min.css';



const RadioPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false); // Manage text visibility
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
  const cardWrapperRef = useRef();

  const cards = [
    { 
      id: 1, 
      title: "Dr Linda Mayer", 
      talks: "Guidance for career success", 
      hostedBy: "Zenzo Matiza", 
      image: cardImage1,
      details: {
        description: "On the Ground Breaker Show this past Wednesday, October 2nd, 2024, we took a deep dive into diverse fields of study...",
        date: "2 October 2024",
        location: "Pretoria, Soshanguve",
        audioSrc: './radio podcast/Dr Linda Meyer.mp3',
        imageSrc: './radio photos/fm logo.png',
      }
    },
    { 
      id: 2, 
      title: "Mrs Nokuthula Makhanya", 
      talks: "Educational strategies", 
      hostedBy: "Mbali Mbele", 
      image: cardImage2,
      details: {
        description: "Last night on the Ground Breaker Show, PLUG-A-GRADUATE with Polelo N Madisa featured a captivating segment...",
        date: "5 October 2024",
        location: "Pretoria, Soshanguve",
        audioSrc: './radio podcast/Nokuthula Makhanya.mp3',
        imageSrc: './radio photos/fm logo.png',
      }
    },
    { 
      id: 3, 
      title: "Mr Oupa Segalwe", 
      talks: "Biography", 
      hostedBy: "Galaletsang Shadi", 
      image: cardImage3,
      details: {
        description: "Earlier, you caught PLUG-A-GRADUATE with Polelo N Madisa on the Ground Breaker, featuring his guest, Oupa Segalwe...",
        date: "12 October 2024",
        location: "Pretoria, Soshanguve",
        audioSrc: './radio podcast/Oupa Segalwe.mp3',
        imageSrc: './radio photos/fm logo.png',
      }
    },
    { 
      id: 4, 
      title: "Mr Obakeng Aubrey Moeketsi", 
      talks: "Industry experts share insights", 
      hostedBy: "Mathekga Senyolo", 
      image: cardImage4,
      details: {
        description: "Earlier this month, listeners tuned in for a special live broadcast of the popular weekly show, Plug-A-Graduate...",
        date: "03 November 2024",
        location: "Pretoria, Soshanguve",
        audioSrc: './radio podcast/Obakeng Aubrey Moeketsi.m4a',
        imageSrc: './radio photos/fm logo.png',
      }
    },
    { 
      id: 5, 
      title: "Mrs Reabetswe Dire", 
      talks: "Turning knowledge into income", 
      hostedBy: "Obakeng Mooketsi", 
      image: cardImage5,
      details: {
        description: "Earlier on today’s insightful episode of Plug-A-Graduate on the Ground Breaker Show, host Obakeng Mooketsi...",
        date: "19 November 2024",
        location: "Pretoria, Soshanguve",
        audioSrc: './radio podcast/Rearabetswe Dire.mp3',
        imageSrc: './radio photos/fm logo.png',
      }
    },
    { 
      id: 6, 
      title: "Mrs Shalate Davhana", 
      talks: "Crime Protection", 
      hostedBy: "Khuthadzo Tshianzi", 
      image: cardImage6,
      details: {
        description: "The show discussed how it became a game-changer for recent graduates, seasoned job seekers, and aspiring entrepreneurs...",
        date: "15 November 2024",
        location: "Location for Slide 2",
        audioSrc: './radio podcast/Shalate Davhana.mp3',
        imageSrc: './radio photos/fm logo.png',
      }
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

      <div className="description-section">
        <h3 className="person-name">{card.title}</h3>
        <p className="position">
            (<b>Talks:</b> {card.talks})
        </p>
        <p className="position2">
            <span className="hostedby"><b>Hosted By: </b></span>{card.hostedBy}
        </p>
      </div>


      {hoveredCard === card.id && (
        <div className="card-hover">
                       <p className="position2">
                    <span span className="hc-d">Date: </span><span className="hc-p">{card.details.date}</span>
                </p>
                <p className="location">
                    <span span className="hc-d">Location: </span><span span className="hc-p">{card.details.location}</span>
                </p>

          <p><b span className="hc-d">Description:</b> <span span className="hc-p">{card.details.description}</span></p>

            {/* Play button container */}
            <div className="play-button-container">
            <button className="play-button">
                <i className="fa fa-play"></i> {/* Font Awesome play icon */}
            </button>
            </div>
          
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
