import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

import grad1 from '../images/grad1.jpg';
import picture from '../images/Picture1.png';

// Import images
// import faqGraphic from '../images/faq_graphic.jpg';

import image1 from '../images/Nkuna at Convention.jpg';
import image2 from '../images/late application.jpg';
import image3 from '../images/Dr Hans.png';
import image4 from '../images/icepTeam.jpg'
import { Description } from '@mui/icons-material';

//alumni spotlight images
import img1 from '../images/Lorraine.jpg';
import img2 from '../images/Alpha-Ramushwana.png';
import img3 from '../images/Rorisang.jpg';
import img4 from '../images/Ofentse Sebula.jpg';

const images = [
  grad1,
  picture,
  
];

const teamMembers = [
  {
    id: 1,
    name: "Lorraine Khoza",
    role: "Gender Specialist and TUT Alumni",
    image: img1,
    description: "http://localhost:5000/uploads/lorraine-khoza.jpg",
  },
  {
    id: 2,
    name: "Alpha Ramushwana",
    role: "TUT alum enroute to become trusted voice in journalism",
    image: img2,
    description: "/profile/ofentse-sebula",
  },
  {
    id: 3,
    name: "Rorisang Sechele",
    role: "Renowned vocalist and performing artist",
    image: img3,
    description: "/profile/ofentse-sebula",
  },
  {
    id: 4,
    name: "Ofentse Moses Sebula",
    role: "Making strides in the world of jazz",
    image: img4,
    description: "/profile/ofentse-sebula",
  },
];




const newsData = [
  { id: 1, 
    title: 'TUTs Faculty of ICT represented at Global Forum for Women in Technology', 
    // description: 'Women in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in Technology', 
    subDescription:'Publisher M Makaula',
     image: image1,
      link:'https://www.tut.ac.za/latest-news/550-tut-takes-lead-in-nltp-study-comprising-fourteen-sa-universities'
    },

 { id: 2, 
  title: 'No walk-ins allowed in January 2025-TUTs late application process is fully online', 
  // description: 'Women in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in Technology', 
  subDescription:'Publisher M Makaula', 
  image: image2,
   link:'https://www.tut.ac.za/latest-news/549-sacia-welcomes-tut-students-as-young-professional-members' 
  },

  { id: 3,
    title: 'NRF C3 rated TUT researcher wins international Best Presenter Award for Machine Learning in Education',
    // description: 'Women in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in Technology', 
    subDescription:'Publisher M Makaula',
     image: image3, 
     link:'https://www.tut.ac.za/latest-news/548-fsati-tut-the-gift-that-keeps-on-giving'
    },

    
    
    { id: 4, 
     title: '20from20 Project website development helps students grow', 
    //  description: 'The Tshwane University of Technology’s (TUT) Informatics Community Engagement Program (ICEP) has significantly contributed to student growth by providing work opportunities that allow them to develop digital solutions while preparing for the future of work and engaging with the community.', 
     subDescription:'Publisher M Makaula', 
     image: image4,
    link:'https://www.tut.ac.za/latest-news/520-20from20-project-website-development-helps-students-grow'
   },

];


const HomePage = () => {

  const sibanda = useLocation();

  const [currentIndex, setCurrentIndex] = useState(0);
  // Automatically move to the next slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // Change image every 15 seconds
    return () => clearInterval(interval);
  }, [images.length]);

// Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

    // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
 
  

  // Smooth scrolling function
  const scrollToDiv = (element, navHeight) => {
    const offsetTop = element.offsetTop;
    const totalScroll = offsetTop - navHeight;

    window.scrollTo({
        top: totalScroll,
        behavior: 'smooth',
    });
  };

  // Handle smooth scrolling when navigating with hashes
  useEffect(() => {
    const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    
    // If there's a hash in the URL, scroll to the corresponding section
    if (sibanda.hash) {
        const targetElement = document.querySelector(sibanda.hash);
        if (targetElement) {
            scrollToDiv(targetElement, headerHeight);
        }
    }

    // Smooth scroll for internal navbar links
    const smoothScrollLinks = document.querySelectorAll('.smoothscroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                scrollToDiv(targetElement, headerHeight);
            }
        });
    });

    // Scroll event for timeline activation
    const onScroll = () => {
      const isScrollIntoView = (elem) => {
        const docViewTop = window.scrollY;
        const docViewBottom = docViewTop + window.innerHeight;
        const elemTop = elem.getBoundingClientRect().top + window.scrollY;
        const elemBottom = elemTop + window.innerHeight * 0.5;

        if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }

        const mainTimelineContainer = document.querySelector('#vertical-scrollable-timeline');
        const mainTimelineContainerBottom = mainTimelineContainer.getBoundingClientRect().bottom - window.innerHeight * 0.5;
        const innerElement = mainTimelineContainer.querySelector('.inner');
        if (innerElement) {
          innerElement.style.height = `${mainTimelineContainerBottom}px`;
        }
      };

      const timelineItems = document.querySelectorAll('#vertical-scrollable-timeline li');
      timelineItems.forEach(isScrollIntoView);
    };

    window.addEventListener('scroll', onScroll);

    // Cleanup event listeners on component unmount
    return () => {
      smoothScrollLinks.forEach(link => {
          link.removeEventListener('click', function () {});
      });
    };
  }, [sibanda]);


  const currentImage = images[0];

  //Blogs: Alumni Hall of Fame
  const [teamMembers, setTeamMembers] = useState([]); // State to hold team members data
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    // Fetch team members data when the component mounts
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(`http://localhost:5214/api/Alumnus/GetBlogs/GetBlogs/`); // Replace with your actual backend API URL
        setTeamMembers(response.data); // Set the team members data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team members:', error);
        setError('Failed to load team members');
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // If data is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error fetching the data, show the error message
  if (error) {
    return <div>{error}</div>;
  }



  return (
    <div>
      <main>
        {/* Search Start */}
        <section  id="section_1"
            >
        {/* Hero Section */}
       {/* <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto text-center"></div>
              <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-black text-center">Connect. Inspire. Celebrate.</h1>
                <h6 className="text-center">A Hub for TUT Graduates</h6>
              </div>
            </div>
          </div>
        </section> */}

<div className="slideshow-container">
  <div
    className="slideshow-slide"
    style={{ backgroundImage: `url(${images[currentIndex]})` }}
  >
    {currentIndex === 0 && (
      <a href="https://www.youtube.com/@tshwaneuniversityoftechnol6902/featured" target="_blank" rel="noopener noreferrer">
        <div className="slide-text">
          Connect. Inspire. Celebrate.
        </div>
      </a>
    )}

    {currentIndex === 1 && (
      <a href="https://tut.devman.co.za/Devman/online/giving/" target="_blank" rel="noopener noreferrer">
      <div className="slide-text">
        Shape Lives, One Donation at a Time
      </div>
      </a>
    )}
  </div>

  <div className="carousel-indicators">
    {images.map((_, index) => (
      <div
        key={index}
        className={`indicator ${currentIndex === index ? 'active' : ''}`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
  
  <button className="prev" onClick={prevSlide}> ❮ </button>
  <button className="next" onClick={nextSlide}> ❯ </button>
 </div>

        </section>

       

                {/* What Is Alumini Space Start */}
                <section className="timeline-section "  id="section_2" >
                    <div className="container" style={{ marginTop: '-40px' }}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className=" mb-4">What Is Alumni Space?</h2>
                            </div>
                            <div className="col-lg-10 col-12 mx-auto">
                                <div className="timeline-container">
                                    <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                                        <div className="list-progress">
                                            <div className="inner"></div>
                                        </div>

                                        <h4 className=" mb-3" style={{ textAlign: 'center', marginTop: '30px' }}>Career Advancement and Networking</h4>
                                        <li>
                                            <p className="text" style={{marginTop: '-20px', color:'#757571'}}>
                                                The alumni website provides a timeline of alumni milestones, showcasing key achievements, career progress, and events. This platform connects alumni with industry professionals, mentors, and former classmates, fostering networking opportunities that can lead to career advancement, job referrals, and professional growth.
                                            </p>
                                            <div className="icon-holder">
                                                <i className="bi-search"></i>
                                            </div>
                                        </li>
                                           
                                        <h4 className=" mb-3" style={{ textAlign: 'center', marginTop: '-45px' }}>Continued Learning and Skill Development</h4>
                                        <li>
                                            <p className="text " style={{marginTop: '-20px',color:'#757571'}}>
                                                Through the alumni website, alumni can access a timeline of educational opportunities, such as workshops, webinars, and certification courses. These resources help alumni stay updated with industry trends, learn new skills, and continue their professional development long after graduation.
                                            </p>
                                            <div className="icon-holder">
                                                <i className="bi-bookmark"></i>
                                            </div>
                                        </li>

                                        <h4 className=" mb-3" style={{ textAlign: 'center', marginTop: '-45px' }}>Community Support and Engagement</h4>
                                        <li>
                                            <p className="text" style={{marginTop: '-20px', color:'#757571'}}>
                                                The alumni website offers a timeline of community events, reunions, and charitable initiatives, encouraging alumni to stay connected and engaged with their alma mater. Alumni can participate in volunteering opportunities, mentor current students, and give back to the university community.
                                            </p>
                                            <div className="icon-holder">
                                                <i className="bi-globe"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* What Is Alumini Space End */}


      <section className="news-section" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-4" style={{ paddingTop: '5px' }}>Latest News</h2>
          </div>
        </div>
        <div className="row">
          {newsData.map(news => (
            <div className="col-lg-4 col-md-6 col-sm-12 news-item" key={news.id}>
             
              <div className="news-content">
              <img src={news.image} alt={news.title} className="news-image img-fluid" />
              </div>     
                 
              <p className="sub-description mb-1">{news.subDescription}</p>
              <h4 className="news-title">{news.title}</h4>   
              <p className="description-text mb-0">{news.description}</p> 
              {news.link && (
            <a href={news.link} className="read-more-link" target="_blank" rel="noopener noreferrer">
              Read More...
            </a>
          )}    
                               
            </div>
          ))}
        </div>
      </div>
    </section>


{/* Alumni Spotlight */}
<Container className="mt-4 text-center">
      <h2 className="fw-bold mb-5">Alumni Hall of Fame</h2>
      <Row className="justify-content-center align-items-stretch">
        {teamMembers.slice(0, 4).map((member, index) => ( // Only take the first 4 team members
          <Col key={index} xs={12} sm={6} md={3} className="mb-4 d-flex">
            <div className="card11 text-center shadow-lg border-0 w-100">
              {/* Check if the image exists and display it */}
              <img
                className="card11-img-top"
                src={`data:image/jpeg;base64,${member.image}`}  // Image URL stored in member.image
                
              />
              <div className="card11-body">
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <div className="read-more-container">
                {/* Update the profile link to the specific alumni description page */}
                <Link to={`/alumni/${member.id}`} className="read-more-link">
                   Read more
               </Link>

                  <span className="greater-than-symbol">&gt;&gt;</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* View All Link */}
      <div className="mt-4">
        <a href="/viewAll" className="btn btn-primary">View All</a>
      </div>
    </Container>



                

  {/* FAQs Start */}
     {/* <section className="faq-section " id="section_4">
      <div className="container">
        <div className="row">
          <div className="">
            <h2 className="mb-3" style={{ textAlign: 'center', paddingTop: '30px' }}>Frequently Asked Questions</h2>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-5 col-12">
            <img src={faqGraphic} className="img-fluid" alt="FAQs" />
          </div>
          <div className="col-lg-6 col-12 m-auto">
            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    How can I benefit from using Alumni Space?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Using Alumni Space, you can <strong>reconnect with former classmates</strong>, <strong>access exclusive career resources</strong> and networking opportunities, and stay engaged with your alma mater through <strong>events and community initiatives</strong>. Whether you're looking to advance your career, participate in alumni events, or contribute to the university community, Alumini Space provides valuable tools and connections to enhance your professional and personal growth.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I need to pay for the services being offered?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>No, all services provided on the alumni website are completely free of charge.</strong> We are dedicated to supporting our alumni community without any costs, allowing you to freely access networking opportunities, career resources, and event participation. Enjoy the full range of features and support without any financial commitment.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I find a job on this platform?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, you can find a job on this platform. <b>The website offers a range of free career resources, including job listings, networking events, and mentorship programs</b> designed to help alumni connect with potential employers and advance their careers. By leveraging these tools, you can explore various job opportunities and receive valuable guidance without any cost.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                  What should I do if my academic record is blocked?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  <p>You can download the blocked academic record form by <a href="https://tut.ac.za/images/docs/blocked-Academic-Record.pdf" target="_blank" rel="noopener noreferrer">clicking here</a>. Once completed, please email it to <a href="mailto:SkosanaK@tut.ac.za">SkosanaK@tut.ac.za</a> and ensure to cc: <a href="mailto:SegwaneTM@tut.ac.za">SegwaneTM@tut.ac.za</a>.</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                  How can I apply for the re-issuing of my certificate?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                   <p>To apply for a duplicate qualification statement, submit an affidavit (confirming the loss, theft, or destruction of the original certificate), a copy of your ID, and proof of payment. The fee is R224 per qualification, payable to:</p>
                   <p><strong>Account Name:</strong> Tshwane University of Technology<br />
                   <strong>Bank:</strong> ABSA<br />
                   <strong>Account No:</strong> 04 000 000 3<br />
                   <strong>Branch Code:</strong> 323245<br />
                   <strong>Reference No:</strong> F224/0455</p>
                   <p>Duplicate certificates will be issued, not original ones.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
 FAQs End */}


                {/* Contact Us Start */}
                {/*<section className="contact-section section-padding section-bg" id="section_5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12 text-center">
                                <h2 className="mb-5">Get in touch</h2>
                            </div>
                            <div className="col-lg-5 col-12 mb-4 mb-lg-0">
                                <iframe
                                    className="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115198.29443520978!2d28.01449227899608!3d-25.540152249363302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfcf9c4eedb233%3A0x9e2de5e61f9e48e7!2sTshwane%20University%20of%20Technology%20-%20Soshanguve%20South%20Campus%20-%20TUT!5e0!3m2!1sen!2sza!4v1724747776372!5m2!1sen!2sza"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                            <div className="col-lg-3 col-md-6 mx-auto">
                                <h4 className="mb-3">Head office</h4>
                                <p>Block K, 2 Aubrey Matlakala St, Soshanguve-K, Soshanguve,  0152 </p>
                                <hr />
                                <p className="d-flex align-items-center mb-1">
                                    <span className="me-2">Phone</span>
                                    <a href="tel:081-355-6089" className="site-footer-link">
                                        081-355-6089
                                    </a>
                                </p>
                                <p className="d-flex align-items-center">
                                    <span className="me-2">Email</span>
                                    <a href="mailto:info@company.com" className="site-footer-link">
                                        info@company.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* Contact Us End */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
