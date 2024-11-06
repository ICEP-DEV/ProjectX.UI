import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './news.css';
import { Calendar } from 'react-calendar';
import Footer from '../components/Footer';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpeg';

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
        <h2 className="mb-4">Latest News</h2>
      </div>
    </div>
  </div>

  <div className="container-fluid">
    <div className="row">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {["ICT", "Humanities", "Arts and Design", "Science", "General"].map((topic, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <button
              className={`nav-link ${index === 0 ? 'active' : ''}`}
              id={`${topic.toLowerCase()}-tab`.replace(/\s/g, '')}
              data-bs-toggle="tab"
              data-bs-target={`#${topic.toLowerCase()}-tab-pane`.replace(/\s/g, '')}
              type="button"
              role="tab"
              aria-controls={`${topic.toLowerCase()}-tab-pane`.replace(/\s/g, '')}
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

          {/* Tab Pane for ICT */}
          <div className="tab-pane fade show active" id="ict-tab-pane" role="tabpanel" aria-labelledby="ict-tab" tabIndex="0">
            <div className="row">
              {[
                { title: "The Faculty of ICT introduced high school students to farming technology innovations.", subDescription: "Published: 5 November 2024, by Kgothatso Monono",  description: "The Tshwane University of Technology’s Faculty of ICT introduced learners at two focus schools to smart farming and intelligent systems, which are important in today’s technology-driven world...", badge: "1", imgSrc: "images/topics/undraw_Remote_design_team_re_urdx.png" },
                { title: "The Faculty of ICT’s Hacker Society highlights challenges faced by young women in tech.", subDescription: "Published: 5 November 2024, by .", description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South. The initiative shines a spotlight on the underrepresentation of women in the tech industry...", badge: "2", imgSrc: "images/topics/undraw_Redesign_feedback_re_jvm0.png" },
                { title: "A Swiss-based research organization has made a significant donation to the Faculty of ICT", subDescription: "Published: 5 November 2024, by ", description: "The Tshwane University of Technology (TUT)’s Faculty of Information and Communication Technology (FoICT) has received a significant donation of computing equipment from CERN, the renowned Switzerland-based research organisation...", badge: "3", imgSrc: "images/topics/colleagues-working-cozy-office-medium-shot.png" }
              ].map((item, idx) => (
                <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                  <div className="custom-block bg-white shadow-lg">
                    <a href="topics-detail.html">
                      <div className="d-flex">
                        <div>
                          <h5 className="mb-2">{item.title}</h5>
                          <p className="sub-description mb-1">{item.subDescription}</p> {/* Sub-description added here */}
                          <p className="description-text mb-0">{item.description}</p>
                        </div>
                        <span className="badge bg-design rounded-pill ms-auto">{item.badge}</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* Tab Pane for Humanities */}
           <div className="tab-pane fade" id="humanities-tab-pane" role="tabpanel" aria-labelledby="humanities-tab" tabIndex="0">
                  <div className="row">
                    {[
                      { title: "Advertising", description: "Lorem Ipsum dolor sit amet consectetur", badge: "30", imgSrc: "images/topics/undraw_online_ad_re_ol62.png" },
                      { title: "Video Content", description: "Lorem Ipsum dolor sit amet consectetur", badge: "65", imgSrc: "images/topics/undraw_Group_video_re_btu7.png" },
                      { title: "Viral Tweet", description: "Lorem Ipsum dolor sit amet consectetur", badge: "50", imgSrc: "images/topics/undraw_viral_tweet_gndb.png" }
                    ].map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">{item.title}</h5>
                                <p className="description-text mb-0">{item.description}</p>
                              </div>
                              <span className="badge bg-advertising rounded-pill ms-auto">{item.badge}</span>
                            </div>
                            {/* <img src={item.imgSrc} className="custom-block-image img-fluid" alt={item.title} /> */}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab Pane for Arts and Design */}
                <div className="tab-pane fade" id="artsanddesign-tab-pane" role="tabpanel" aria-labelledby="artsanddesign-tab" tabIndex="0">
                  <div className="row">
                    {[
                      { title: "Investment", description: "Lorem Ipsum dolor sit amet consectetur", badge: "30", imgSrc: "images/topics/undraw_Finance_re_gnv2.png" },
                      { title: "Economics", description: "Lorem Ipsum dolor sit amet consectetur", badge: "40", imgSrc: "images/topics/undraw_Savings_re_eq4w.png" }
                    ].map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">{item.title}</h5>
                                <p className="description-text mb-0">{item.description}</p>
                              </div>
                              <span className="badge bg-finance rounded-pill ms-auto">{item.badge}</span>
                            </div>
                            {/* <img src={item.imgSrc} className="custom-block-image img-fluid" alt={item.title} /> */}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab Pane for Science */}
                <div className="tab-pane fade" id="science-tab-pane" role="tabpanel" aria-labelledby="science-tab" tabIndex="0">
                  <div className="row">
                    {[
                      { title: "Concert", description: "Lorem Ipsum dolor sit amet consectetur", badge: "20", imgSrc: "images/topics/undraw_Music_re_d3b2.png" }
                    ].map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">{item.title}</h5>
                                <p className="description-text mb-0">{item.description}</p>
                              </div>
                              <span className="badge bg-music rounded-pill ms-auto">{item.badge}</span>
                            </div>
                            {/* <img src={item.imgSrc} className="custom-block-image img-fluid" alt={item.title} /> */}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab Pane for General */}
                <div className="tab-pane fade" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab" tabIndex="0">
                  <div className="row">
                    {[
                      { title: "Web Development Course", description: "Lorem Ipsum dolor sit amet consectetur", badge: "40", imgSrc: "images/topics/undraw_Education_re_hqfq.png" }
                    ].map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">{item.title}</h5>
                                <p className="description-text mb-0">{item.description}</p>
                              </div>
                              <span className="badge bg-education rounded-pill ms-auto">{item.badge}</span>
                            </div>
                            {/* <img src={item.imgSrc} className="custom-block-image img-fluid" alt={item.title} /> */}
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

      
   <section className='events' id= 'section_2n'> 
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

  {/* Magazine Section==================== */}
  <section className='magazine' id='section_3n'>


  </section>

      <Footer />
    </div>
  );
}

export default News;
