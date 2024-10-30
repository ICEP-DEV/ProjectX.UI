import React, { useState, useRef } from 'react';
import './news.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Calendar } from 'react-calendar'; // Ensure you have react-calendar installed
import Footer from './Footer';

// Import images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpeg';

function News() {
  // Array of event data with time and venue included
  const events = [
    {
      img: image1,
      title: "Gala Dinner",
      description: "The TUT Gala Dinner is a prestigious event celebrating academic excellence.",
      time: "6:00 PM",
      venue: "Main Hall, TUT",
      date: '2024-10-04', // Add date for event matching
    },
    {
      img: image2,
      title: "ICT Academic Awards",
      description: "The TUT ICT Academic Awards celebrate outstanding achievements.",
      time: "5:00 PM",
      venue: "Auditorium, TUT",
      date: '2024-10-15', // Add date for event matching
    },
    {
      img: image3,
      title: "Humanities Orientation",
      description: "The TUT Humanities First-Year Orientation welcomes new students.",
      time: "9:00 AM",
      venue: "Lecture Hall 1, TUT",
      date: '2024-10-20', // Add date for event matching
    },
    {
      img: image4,
      title: "TUT Sports Awards",
      description: "The TUT Choir showcases a diverse repertoire.",
      time: "7:00 PM",
      venue: "Sports Complex, TUT",
      date: '2024-10-30', // Add date for event matching
    }
  ];

  const [value, setValue] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [popupEvent, setPopupEvent] = useState(null);
  
  // Create a ref for the calendar
  const calendarRef = useRef(null);

  const handleDayClick = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const event = events.find(event => event.date === dateString);
    if (event) {
      setPopupEvent(event); // Show the event in a popup
    } else {
      setPopupEvent(null); // Clear popup if no event
    }
  };

  const handleDayHover = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const event = events.find(event => event.date === dateString);
    setHoveredEvent(event ? event.title : null);
  };

  const handleDayLeave = () => {
    setHoveredEvent(null);
  };

  const tileContent = ({ date, view }) => {
    const dateString = date.toISOString().split('T')[0];
    
    // Check if there are any events for the current date
    const hasEvent = events.some(event => event.date === dateString);
    
    // Only show the event dot if we're in the month view and there's an event on this date
    return view === 'month' && hasEvent ? (
      <div className="event-dot" />
    ) : null;
  };

  const scrollToEvent = (eventDate) => {
    const targetDate = new Date(eventDate);
    const targetDateString = targetDate.toISOString().split('T')[0];

    // Set the calendar to the clicked event date
    setValue(targetDate);
    
    // Optionally, you can scroll the calendar into view
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="events-container">
      <header className="header">
        <h1>EVENTS</h1>
      </header>
      <div className="carousel">
        <FaArrowLeft className="arrow-icon" />
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.img} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="buttons">
              <button className="rsvp-button" onClick={() => scrollToEvent(event.date)}>RSVP</button>
              <button className="volunteer-button">Volunteer</button>
            </div>
          </div>
        ))}
        <FaArrowRight className="arrow-icon" />
      </div>

      {/* Calendar Section ===================================*/}
      <div className="calendar-container">
        <h2>Calendar</h2>
        <div className="calendar-content" ref={calendarRef}>
          <Calendar
            onChange={setValue}
            value={value}
            tileContent={tileContent}
            onMouseOver={(date) => handleDayHover(date)}
            onMouseLeave={handleDayLeave}
            onClickDay={handleDayClick} // Add click handler
          />
          {hoveredEvent && (
            <div className="event-tooltip">
              {hoveredEvent}
            </div>
          )}
        </div>
      </div>

      {/* Popup for Event Details */}
      {popupEvent && (
        <div className="popup">
          <div className="popup-content">
            <h3>{popupEvent.title}</h3>
            <p>{popupEvent.description}</p>
            <p><strong>Time:</strong> {popupEvent.time}</p>
            <p><strong>Venue:</strong> {popupEvent.venue}</p>
            <button onClick={() => setPopupEvent(null)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default News;
