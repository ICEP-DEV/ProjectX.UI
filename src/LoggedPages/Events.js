import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import './events.css';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpeg';
import Footer from '../components/Footer';

const eventsData = [
  {
    img: image1,
    title: "Gala Dinner",
    description: "The TUT Gala Dinner is a prestigious event celebrating academic excellence.",
    time: "6:00 AM",
    venue: "Main Hall, TUT",
    date: new Date('2024-11-04'),
  },
  {
    img: image2,
    title: "ICT Academic Awards",
    description: "The TUT ICT Academic Awards celebrate outstanding achievements.",
    time: "5:00 PM",
    venue: "Auditorium, TUT",
    date: new Date('2024-11-15'),
  },
  {
    img: image3,
    title: "Humanities Orientation",
    description: "The TUT Humanities First-Year Orientation welcomes new students.",
    time: "9:00 AM",
    venue: "Lecture Hall 1, TUT",
    date: new Date('2024-11-20'),
  },
  {
    img: image4,
    title: "TUT Sports Awards",
    description: "The TUT Choir showcases a diverse repertoire.",
    time: "7:00 PM",
    venue: "Sports Complex, TUT",
    date: new Date('2024-11-30'),
  }
];

function Events() {
  const navigate = useNavigate();
  const [value, setValue] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [popupEvent, setPopupEvent] = useState(null);
  const calendarRef = useRef(null);

  const handleDayClick = (date) => {
    const event = eventsData.find(event => event.date.toDateString() === date.toDateString());
    setPopupEvent(event || null);
  };

  const handleDayHover = (date) => {
    const event = eventsData.find(event => event.date.toDateString() === date.toDateString());
    setHoveredEvent(event ? event.title : null);
  };

  const handleDayLeave = () => {
    setHoveredEvent(null);
  };

  const tileContent = ({ date, view }) => {
    const hasEvent = eventsData.some(event => event.date.toDateString() === date.toDateString());
    return view === 'month' && hasEvent ? <div className="event-dot" /> : null;
  };

  const scrollToEvent = (eventDate) => {
    setValue(new Date(eventDate));
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleVolunteerClick = () => {
    navigate('/volunteer');
  };

  return (
    <div>
      <div className="events-container">
        <header className="header">
          <h1>EVENTS</h1>
        </header>
        <div className="carousel">
          {eventsData.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.img} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="buttons">
                <button className="rsvp-button" onClick={() => scrollToEvent(event.date)}>RSVP</button>
                <button className="volunteer-button" onClick={handleVolunteerClick}>Volunteer</button>
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
        </div>
        <Footer/>
      </div>
   
  );
}

export default Events;
