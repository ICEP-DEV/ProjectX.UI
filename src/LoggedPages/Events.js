import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import './events.css';
import axios from 'axios';

import Footer from '../components/Footer';

function Events() {
  const { state } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [popupEvent, setPopupEvent] = useState(null);
  const calendarRef = useRef(null);
  const [eventsData, setEvents] = useState([]);
  const [alumnusId, setAlumnusId] = useState('');
  const { eventId } = state || {}; // Safe destructuring
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState();

   

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

  const handleButtonClick = async (EventId) => {
    console.log('Event ID:', EventId);
    if (!EventId) {
      window.alert('Event ID is missing or invalid. Please try again.');
      setPopupEvent(null);
      return;
    }

    const data = {
      EventId,
      AlumnusId: sessionStorage.getItem('alumnusId'),
    };
    
    console.log(data);
    try {
      const response = await axios.post(
        'http://localhost:5214/api/Alumnus/RSVP/RSVP',
        data
      );
      console.log(data);
      
      if (response.status === 200) {
        window.alert('RSVP Captured! We will reach out to you soon.');
      }
    } catch (error) {
      console.error('Error rsvping:', error);
      const errorMessage =
        error.response?.data || 'An error occurred while submitting your request.';
      window.alert(errorMessage);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
    navigate('/events'); // Redirect to another page if needed
  };

  const handleDayClick = (date) => {
    const event = eventsData.find(event => new Date(event.date).toDateString() === date.toDateString());
    if (event) {
      setPopupEvent({
        EventId: event.id, // Ensure correct property name
        title: event.title,
        description: event.description,
        time: event.time,
        venue: event.venue,
      });
    } else {
      setPopupEvent(null);
    }
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
    navigate('/volunteer', { state: { eventId, roles } });
    console.log('Event id: ', eventId, 'Roles', roles )
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
                <button className="siz-volunteer-button" onClick={() => handleVolunteerClick(event.id, event.volunteerRoles)}>Volunteer</button>
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
              <button onClick={() => handleButtonClick(popupEvent.EventId)}>Confirm</button>
              <button onClick={() => setPopupEvent(null)} className="close-popup-btn" style={{marginLeft: 5}}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* {showPopup && (
          <div className="popup">
            <div className="popup-content">
            <p style={{ color: "black" }}>
              RSVP {showPopup.eventTitle} captured! We will reach out to you soon.
            </p>
              <button onClick={handleClosePopup} className="close-popup-btn">
                Close
              </button>
            </div>
          </div>
        )} */}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
