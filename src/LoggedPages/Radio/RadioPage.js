import React, { useState, useRef } from "react";
import "./RadioPage.css";
import Vid1 from "./radio video/Plug an Alumni.mp4";
import Vid2 from "./radio video/Plug a Graduate.mp4";
import divider1 from "./radio photos/Divider 3.png";
import divider2 from "./radio photos/Divider 2.png";

const RadioPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false); // Manage text visibility
  const cardWrapperRef = useRef();

  const cards = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
    { id: 5, title: "Card 5", content: "Content for Card 5" },
    { id: 6, title: "Card 6", content: "Content for Card 6" },
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
            >
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="card-navigation">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default RadioPage;
