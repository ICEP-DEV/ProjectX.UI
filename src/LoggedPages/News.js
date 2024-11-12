import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './news.css';
import { Calendar } from 'react-calendar';
import Footer from '../components/Footer';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpeg';

import news1 from '../images/news1.jpg';
import news2 from '../images/news2..png';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpg';

import mag1 from '../images/mag1.jpg';
import mag2 from '../images/mag2.jpg';
import mag3 from '../images/mag3.jpg';


function News() {
  const navigate = useNavigate();
  const events = [
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

  const [value, setValue] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [popupEvent, setPopupEvent] = useState(null);
  const calendarRef = useRef(null);

  const handleDayClick = (date) => {
    const event = events.find(event => event.date.toDateString() === date.toDateString());
    setPopupEvent(event || null);
  };

  const handleDayHover = (date) => {
    const event = events.find(event => event.date.toDateString() === date.toDateString());
    setHoveredEvent(event ? event.title : null);
  };

  const handleDayLeave = () => {
    setHoveredEvent(null);
  };

  const tileContent = ({ date, view }) => {
    const hasEvent = events.some(event => event.date.toDateString() === date.toDateString());
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
      <section className="explore-section section-padding" id="section_1n">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">News</h2>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {["General", "Magazine"].map((topic, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className={`nav-link ${index === 0 ? 'active' : ''}`}
                    id={`${topic.toLowerCase().replace(/\s/g, '')}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${topic.toLowerCase().replace(/\s/g, '')}-tab-pane`}
                    type="button"
                    role="tab"
                    aria-controls={`${topic.toLowerCase().replace(/\s/g, '')}-tab-pane`}
                    aria-selected={index === 0 ? 'true' : 'false'}
                  >
                    {topic}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                
                {/* Tab Pane for General */}
                <div className="tab-pane fade show active" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab" tabIndex="0">
                  <div className="row">
                    {[
                      { title: "Structured Master’s makes performing technologies and collaboration look easy!", subDescription: "Published: 6 November 2024, by Kgothatso Monono", description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.", badge: "1", img: news1 },
                      { title: "The Faculty of ICT’s Hacker Society highlights challenges faced by young women in tech.", subDescription: "Published: 5 November 2024, by Kgothatso Monono", description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.", badge: "2", img: news2 },
                      { title: "TUT to celebrate academic stars at prestigious awards ceremony", subDescription: "Published: 5 November 2024, by Phaphama Tshisikhawe", description: "On 13 November 2024, the Tshwane University of Technology (TUT) Academic Excellence Awards will recognize exceptional academic staff.", badge: "3", img: news3 },
                      { title: "TUT, famed for developing elite athletes, calls for funding and sponsorship", subDescription: "Published: 6 November 2024, by Phumla Mkize", description: "The Tshwane University of Technology (TUT) – renowned for grooming elite athletes that compete on national and international stages – is inviting corporations, foundations and individuals to partner with it to improve its sports programmes and facilities.TUT – which counts among its development athletes Olympic gold medallists, two-time Rugby World Cup winning athletes and Women’s Africa Cup of Nation superstars – is seeking sponsorship and funding for its sporting programmes, sports infrastructure development projects and community outreach initiatives.", badge: "4", img: news4 }
                    ].map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          {/* <a href="#"> The page it directs you to*/}
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">{item.title}</h5>
                                <img src={item.img} alt="" style={{ width: "260px", margin: "10px 0" }} />
                                <p className="sub-description mb-1">{item.subDescription}</p>
                                <p className="description-text mb-0">{item.description}</p>
                              </div>
                              <span className="badge bg-design rounded-pill ms-auto">{item.badge}</span>
                            </div>
                          {/* </a> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab Pane for Magazine */}
                <div className="tab-pane fade" id="magazine-tab-pane" role="tabpanel" aria-labelledby="magazine-tab" tabIndex="0">
  <div className="row">
    {[
      { description: "The Autumn 2024 edition of Heita magazine celebrates TUT's graduates, highlighting their academic achievements, inspiring journeys, and the diverse fields they’re entering", badge: "1", img: mag1, link: "https://heitatut.co.za/Vol16no3/#page=1" },
      { description: "This edition celebrates TUT women excelling in academia, arts, tech, and service, showcasing their impact and TUT’s commitment to gender equity.", badge: "2", img: mag2, link: "https://heitatut.co.za/Vol16no5/#page=1" },
      { description: "This edition highlights the experiences and achievements of students with disabilities, showcasing their resilience, talents, and contributions to the university community.", badge: "3", img: mag3, link: "https://heitatut.co.za/Vol16no4/#page=1" }
    ].map((item, idx) => (
      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
        <div className="custom-block bg-white shadow-lg">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="d-flex">
              <div>
                <img src={item.img} alt={`Magazine edition ${item.badge}`} style={{ width: "280px", height: "350px", margin: "0 0 0 -10px" }} />
                <p className="description-text mb-0">{item.description}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
        </div>
        </div>
      </section>

      <section className='events' id='section_2n'> 
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
            </section>


      <Footer />
    </div>
  );
}

export default News;
