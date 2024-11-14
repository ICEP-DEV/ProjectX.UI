import React from 'react';
import { useNavigate } from 'react-router-dom';
import './news.css';
import Footer from '../components/Footer';

import news1 from '../images/news1.jpg';
import news2 from '../images/news2..png';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpg';

import mag1 from '../images/mag1.jpg';
import mag2 from '../images/mag2.jpg';
import mag3 from '../images/mag3.jpg';

function News() {
  const navigate = useNavigate();

  const newsArticles = [
    {
      title: "Structured Master’s makes performing technologies and collaboration look easy!",
      subDescription: "Published: 6 November 2024, by Kgothatso Monono",
      description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.",
      badge: "1",
      img: news1,
    },
    {
      title: "The Faculty of ICT’s Hacker Society highlights challenges faced by young women in tech.",
      subDescription: "Published: 5 November 2024, by Kgothatso Monono",
      description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.",
      badge: "2",
      img: news2,
    },
    {
      title: "TUT to celebrate academic stars at prestigious awards ceremony",
      subDescription: "Published: 5 November 2024, by Phaphama Tshisikhawe",
      description: "On 13 November 2024, the Tshwane University of Technology (TUT) Academic Excellence Awards will recognize exceptional academic staff.",
      badge: "3",
      img: news3,
    },
    {
      title: "TUT, famed for developing elite athletes, calls for funding and sponsorship",
      subDescription: "Published: 6 November 2024, by Phumla Mkize",
      description: "The Tshwane University of Technology (TUT) – renowned for grooming elite athletes that compete on national and international stages – is inviting corporations, foundations, and individuals to partner with it to improve its sports programmes and facilities.",
      badge: "4",
      img: news4,
    },
  ];

  const magazines = [
    {
      description: "The Autumn 2024 edition of Heita magazine celebrates TUT's graduates, highlighting their academic achievements, inspiring journeys, and the diverse fields they’re entering",
      badge: "1",
      img: mag1,
      link: "https://heitatut.co.za/Vol16no3/#page=1",
    },
    {
      description: "This edition celebrates TUT women excelling in academia, arts, tech, and service, showcasing their impact and TUT’s commitment to gender equity.",
      badge: "2",
      img: mag2,
      link: "https://heitatut.co.za/Vol16no5/#page=1",
    },
    {
      description: "This edition highlights the experiences and achievements of students with disabilities, showcasing their resilience, talents, and contributions to the university community.",
      badge: "3",
      img: mag3,
      link: "https://heitatut.co.za/Vol16no4/#page=1",
    },
  ];

  return (
    <div>   
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
                    id={`${topic.toLowerCase()}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${topic.toLowerCase()}-tab-pane`}
                    type="button"
                    role="tab"
                    aria-controls={`${topic.toLowerCase()}-tab-pane`}
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
                
                {/* General News Tab */}
                <div className="tab-pane fade show active" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab" tabIndex="0">
                  <div className="row">
                    {newsArticles.map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">{item.title}</h5>
                              <img src={item.img} alt="" style={{ width: "260px", margin: "10px 0" }} />
                              <p className="sub-description mb-1">{item.subDescription}</p>
                              <p className="description-text mb-0">{item.description}</p>
                            </div>
                            <span className="badge bg-design rounded-pill ms-auto">{item.badge}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Magazine Tab */}
                <div className="tab-pane fade" id="magazine-tab-pane" role="tabpanel" aria-labelledby="magazine-tab" tabIndex="0">
                  <div className="row">
                    {magazines.map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="d-flex">
                              <div>
                                <img src={item.img} alt={`Magazine edition ${item.badge}`} className='magimg'/>
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
     

      <Footer />
    </div>
  );
}

export default News;
