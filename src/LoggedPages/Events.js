import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import './events.css';
import axios from 'axios';

import Footer from '../components/Footer';

function Events() {
  const navigate = useNavigate();
  const [value, setValue] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [popupEvent, setPopupEvent] = useState(null);
  const calendarRef = useRef(null);
  const [eventsData, setEvents] = useState([]);

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5214/api/Alumnus/GetEvent/GetEvents");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleDayClick = (date) => {
    const event = eventsData.find(event => new Date(event.date).toDateString() === date.toDateString());
    setPopupEvent(event || null);
  };

  const handleDayHover = (date) => {
    const event = eventsData.find(event => new Date(event.date).toDateString() === date.toDateString());
    setHoveredEvent(event ? event.title : null);
  };

  const handleDayLeave = () => {
    setHoveredEvent(null);
  };

  const tileContent = ({ date, view }) => {
    const hasEvent = eventsData.some(event => new Date(event.date).toDateString() === date.toDateString());
    return view === 'month' && hasEvent ? <div className="siz-event-dot" /> : null;
  };

  const scrollToEvent = (eventDate) => {
    setValue(new Date(eventDate));
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleVolunteerClick = (eventId, roles) => {
    console.log(eventId, roles)
    navigate('/volunteer', { state: { eventId, roles } });
  };
  

  return (
    <div>
      <div className="siz-events-container">
        <header className="siz-header">
          <h1>EVENTS</h1>
        </header>
        <div className="siz-carousel">
          {eventsData.map((event, index) => (
            <div className="siz-event-card" key={index}>
              <img src={`data:image/jpeg;base64,${event.media}`} alt="Event Media" />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="siz-buttons">
                <button className="siz-rsvp-button" onClick={() => scrollToEvent(event.date)}>RSVP</button>
                <button className="siz-volunteer-button" onClick={() => handleVolunteerClick(event.id,event.volunteerRoles)}>Volunteer</button>
              </div>
            </div>
          ))}
        </div>

        <div className="siz-calendar-container">
          <h2>Calendar</h2>
          <div className="siz-calendar-content" ref={calendarRef}>
          <Calendar
          onChange={setValue}
          value={value}
          tileContent={tileContent}
          onClickDay={handleDayClick}
          onMouseOver={(date) => handleDayHover(date)}
          onMouseLeave={handleDayLeave}
          showWeekdays={false} // Hides days of the week
        />

            {hoveredEvent && (
              <div className="event-tooltip">
                {hoveredEvent}
              </div>
            )}
          </div>
        </div>

        {popupEvent && (
          <div className="siz-popup">
            <div className="siz-popup-content">
              <h3>{popupEvent.title}</h3>
              <p>{popupEvent.description}</p>
              <p><strong>Time:</strong> {popupEvent.time}</p>
              <p><strong>Venue:</strong> {popupEvent.venue}</p>
              <button onClick={() => setPopupEvent(null)}>Confirm</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
