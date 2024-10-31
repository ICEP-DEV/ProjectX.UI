import React, { useState, useRef } from 'react';
import './news.css';
import { Calendar } from 'react-calendar';
import Footer from './Footer';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpeg';

function News() {
  const events = [
    {
      img: image1,
      title: "Gala Dinner",
      description: "The TUT Gala Dinner is a prestigious event celebrating academic excellence.",
      time: "6:00 AM",
      venue: "Main Hall, TUT",
      date: new Date('2024-10-04'),
    },
    {
      img: image2,
      title: "ICT Academic Awards",
      description: "The TUT ICT Academic Awards celebrate outstanding achievements.",
      time: "5:00 PM",
      venue: "Auditorium, TUT",
      date: new Date('2024-10-15'),
    },
    {
      img: image3,
      title: "Humanities Orientation",
      description: "The TUT Humanities First-Year Orientation welcomes new students.",
      time: "9:00 AM",
      venue: "Lecture Hall 1, TUT",
      date: new Date('2024-10-20'),
    },
    {
      img: image4,
      title: "TUT Sports Awards",
      description: "The TUT Choir showcases a diverse repertoire.",
      time: "7:00 PM",
      venue: "Sports Complex, TUT",
      date: new Date('2024-10-30'),
    }
  ];

  const [value, setValue] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [popupEvent, setPopupEvent] = useState(null);
  const calendarRef = useRef(null);

  const handleDayClick = (date) => {
    const dateString = date.toLocaleDateString();
    const event = events.find(event => event.date.toLocaleDateString() === dateString);
    setPopupEvent(event || null);
  };

  const handleDayHover = (date) => {
    const dateString = date.toLocaleDateString();
    const event = events.find(event => event.date.toLocaleDateString() === dateString);
    setHoveredEvent(event ? event.title : null);
  };

  const handleDayLeave = () => {
    setHoveredEvent(null);
  };

  const tileContent = ({ date, view }) => {
    const dateString = date.toLocaleDateString();
    const hasEvent = events.some(event => event.date.toLocaleDateString() === dateString);
    return view === 'month' && hasEvent ? <div className="event-dot" /> : null;
  };

  const scrollToEvent = (eventDate) => {
    const targetDate = new Date(eventDate);
    setValue(targetDate);
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
      </div>

      <div className="calendar-container">
        <h2>Calendar</h2>
        <div className="calendar-content" ref={calendarRef}>
          <Calendar
            onChange={setValue}
            value={value}
            tileContent={tileContent}
            onClickDay={handleDayClick}
            onMouseOver={(date) => handleDayHover(date)}
            onMouseLeave={handleDayLeave}
          />
          {hoveredEvent && (
            <div className="event-tooltip">
              {hoveredEvent}
            </div>
          )}
        </div>
      </div>

      {popupEvent && (
        <div className="popup">
          <div className="popup-content">
            <h3>{popupEvent.title}</h3>
            <p>{popupEvent.description}</p>
            <p><strong>Time:</strong> {popupEvent.time}</p>
            <p><strong>Venue:</strong> {popupEvent.venue}</p>
            <button onClick={() => setPopupEvent(null)}>Confirm</button>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}

export default News;
