import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";



// Import images
// import faqGraphic from '../images/faq_graphic.jpg';



//alumni spotlight images
import img1 from '../images/Lorraine.jpg';
import img2 from '../images/Alpha-Ramushwana.png';
import img3 from '../images/Rorisang.jpg';
import img4 from '../images/Ofentse Sebula.jpg';
import img5 from '../images/Tshwane-University-of-Technology-21-800x533.jpg';
import img6 from '../images/Tshwane-University-of-Technology-22-800x533.jpg';
import img7 from '../images/Tshwane-University-of-Technology-23-800x533.jpg';
import e1 from '../images/elements/e1.png';
import e2 from '../images/elements/e2.png';
import e3 from '../images/elements/e3.png';


const images = [
  img5, 
  img6, 
  img7,
  
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




// const newsData = [
//  
//       link:'https://www.tut.ac.za/latest-news/550-tut-takes-lead-in-nltp-study-comprising-fourteen-sa-universities'
//     },

//  { id: 2, 
//   title: 'No walk-ins allowed in January 2025-TUTs late application process is fully online', 
//   // description: 'Women in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in Technology', 
//   subDescription:'Publisher M Makaula', 
//   image: image2,
//    link:'https://www.tut.ac.za/latest-news/549-sacia-welcomes-tut-students-as-young-professional-members' 
//   },

//   { id: 3,
//     title: 'NRF C3 rated TUT researcher wins international Best Presenter Award for Machine Learning in Education',
//     // description: 'Women in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in TechnologyWomen in Technology', 
//     subDescription:'Publisher M Makaula',
//      image: image3, 
//      link:'https://www.tut.ac.za/latest-news/548-fsati-tut-the-gift-that-keeps-on-giving'
//     },

    
    
//     { id: 4, 
//      title: '20from20 Project website development helps students grow', 
//     //  description: 'The Tshwane University of Technology’s (TUT) Informatics Community Engagement Program (ICEP) has significantly contributed to student growth by providing work opportunities that allow them to develop digital solutions while preparing for the future of work and engaging with the community.', 
//      subDescription:'Publisher M Makaula', 
//      image: image4,
//     link:'https://www.tut.ac.za/latest-news/520-20from20-project-website-development-helps-students-grow'
//    },

// ];


const HomePage = () => {

  const sibanda = useLocation();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
  const [newsArticles, setNewsArticles] = useState([]); //store news from backend

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

  // Fetch news articles
useEffect(() => {
  const fetchNews = async (type) => {
    try {
      const response = await axios.get(`http://localhost:5214/api/Alumnus/GetLatestNews/GetLatestNews`);
      if (type === 'general') {
        setNewsArticles(response.data);
      }
    } catch (error) {
      console.error(`Error fetching ${type} news:`, error);
    }
  };

  fetchNews('general');
}, []);

  // If data is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error fetching the data, show the error message
  if (error) {
    return <div>{error}</div>;
  }


//   //news
//   const [newsArticles, setNewsArticles] = useState([]); //store news from backend
//   // const [activeTab, setActiveTab] = useState('general');

//  // Fetch news articles based on the selected type
//  const fetchNews = async (type) => {
//   try {
//     const response = await axios.get(`http://localhost:5214/api/Alumnus/GetLatestNews/GetLatestNews`);
//     if (type === 'general') {
//       setNewsArticles(response.data);
//     }  
    
    
//   } catch (error) {
//     console.error(`Error fetching ${type} news:`, error);
//   }
// };

// useEffect(() => {
// fetchNews('general');
// },
// []);

  return (
    <div>
      <main>
    
        <section  id="section_1"
            >
       
       <div className="ztm-03-slideshow-container">
  <div
    className="ztm-03-slide"
    style={{ backgroundImage: `url(${images[currentIndex]})` }}
  >
    <div className="ztm-03-overlay"></div>
    <div className="ztm-03-text">
      {currentIndex === 0 && (
        <>
          <h1 className="ztm-03-title">Connect. Inspire. Celebrate.</h1>
          <p className="ztm-03-subtitle">A Hub For TUT Graduates</p>
        </>
      )}
      {currentIndex === 1 && (
        <>
          <h1 className="ztm-03-title">Shape Lives, One Donation at a Time</h1>
          <p className="ztm-03-subtitle">Support Future Graduates</p>
        </>
      )}
      {currentIndex === 2 && (
        <>
          <h1 className="ztm-03-title">Join Our Alumni Network</h1>
          <p className="ztm-03-subtitle">Stay Connected With Fellow Graduates</p>
        </>
      )}
    </div>
  </div>
</div>



        </section>

       

                {/* What Is Alumini Space Start */}
                <section className="timeline-section "  id="section_2" >
                    <div className="container" >
                        <div className="row">
                        <div className="col-12 text-center ztm-04-title-container">
                          <h2 className="ztm-04-title">
                            <i className="fas fa-search ztm-04-icon"></i> What Is Alumni Space?
                          </h2>
                        </div>

                        

                        <div className="timeline-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={e1} alt="Background Element" className="background-element" style={{
                position: 'absolute',
                zIndex: '-1',
                width: '80%', // Adjusted size for better fit
                height: 'auto',
                display: 'block'
            }} />
            
            <div className="col-lg-8 col-md-10 col-12 mx-auto" style={{ maxWidth: '600px' }}>
                <div className="timeline-container">
                    <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                        <div className="list-progress">
                            <div className="inner"></div>
                        </div>

                        <h4 className="mb-3" style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.2rem', color:'#ffab14' }}>Career Advancement and Networking</h4>
                        <li style={{ fontSize: '0.9rem' }}>
                            <p className="text" style={{ marginTop: '-10px', color:'#ffffff', fontSize: '1rem' }}>
                                The alumni website provides a timeline of alumni milestones, showcasing key achievements, career progress, and events.
                            </p>
                            <div className="icon-holder">
                                <i className="bi-search"></i>
                            </div>
                        </li>
                        
                        <h4 className="mb-3" style={{ textAlign: 'center', marginTop: '-30px', fontSize: '1.2rem', color:'#ffab14' }}>Continued Learning and Skill Development</h4>
                        <li style={{ fontSize: '0.9rem' }}>
                            <p className="text" style={{ marginTop: '-10px', color:'#ffffff', fontSize: '1rem' }}>
                                Alumni can access workshops, webinars, and courses to stay updated with industry trends and continue professional development.
                            </p>
                            <div className="icon-holder">
                                <i className="bi-bookmark"></i>
                            </div>
                        </li>

                        <h4 className="mb-3" style={{ textAlign: 'center', marginTop: '-30px', fontSize: '1.2rem', color:'#ffab14'}}>Community Support and Engagement</h4>
                        <li style={{ fontSize: '0.9rem' }}>
                            <p className="text" style={{ marginTop: '-10px', color:'#ffffff', fontSize: '1rem' }}>
                                The website offers community events, reunions, and volunteering opportunities to keep alumni connected.
                            </p>
                            <div className="icon-holder">
                                <i className="bi-globe"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .background-element {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
                        </div>
                    </div>
                </section>
                {/* What Is Alumini Space End */}


      <section className="news-section" id="section_3">
      <div className="container">
        <div className="row">
        <div className="col-12 text-center ztm-04-title-container">
                          <h2 className="ztm-04-title">
                            <i className="fas fa-bullhorn ztm-05-icon"></i> Latest News  
                          </h2>
                        </div>
        </div>

        <div className="timeline-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={e2} alt="Background Element" className="background-element" style={{
                position: 'absolute',
                zIndex: '-1',
                width: '80%', // Adjusted size for better fit
                height: 'auto',
                display: 'block'
            }} />
        
        <div className="row">
  {newsArticles.map(news => (
    <div
      className="news-item"
      key={news.id}
      style={{
        border: "4px solid #003883",
        backgroundColor: "white",
        width: "600px",
        height: "580px",
        padding: "15px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        position: "relative", // Ensures absolute positioning of child elements works properly
        borderRadius: "10px",
      }}
    >
      <div className="news-content">
        <img
          src={`data:image/jpeg;base64,${news.media}`}
          alt={news.title}
          className="news-image img-fluid"
          style={{ 
            width: "100%",
             height: "250px",
              objectFit: "cover",
               borderRadius: "5px",               
        marginBottom: "40px",
               }}
        />
      </div>
      <p className="sub-description">
        {news.subDescription || "Publisher M Makaula"}
      </p>
      <p className="description-text">
        {news.description || "No description available."}
      </p>
      
      {news.link && (
        <a
          href={news.link}
          className="read-more-link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#003883",
            color: "white",
            padding: "10px 20px",
            borderRadius: "50px",
            border: "3px solid #FFA500",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            position: "absolute",
            bottom: "15px",
            right: "15px",
            transition: "0.3s",
          }}
        >
         <span style={{ color: "white" }}>Read More</span>
        </a>
      )}
    </div>
  ))}
</div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .background-element {
                        display: none !important;
                    }
                }
            `}</style>
            </div>
          </div>
        </section>


{/* Alumni Spotlight */}
<div style={{ textAlign: "center", marginTop: "40px" }}>
  <h2 style={{ fontWeight: "bold", marginBottom: "8rem" }}> <i class="fa-solid fa-crown ztm-05-icon"></i>Alumni Hall of Fame</h2>


  
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
  <div className="timeline-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={e3} alt="Background Element" className="background-element" style={{
                position: 'absolute',
                zIndex: '-1',
                width: '80%', // Adjusted size for better fit
                height: 'auto',
                display: 'block',
            }} />
    
    {teamMembers.slice(0, 4).map((member, index) => (
      <div
        key={index}
        style={{
          border: "4px solid #003883",
          backgroundColor: "white",
          width: "400px",
          height: "500px",
          padding: "15px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition
          cursor: "pointer", // Change cursor to pointer
          marginRight: "20px", // Add margin to the right for even indexed items
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)"; // Slightly increase size
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Enhance shadow
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"; // Reset size
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Reset shadow
        }}
      >
        {/* Alumni Image */}
        <img
          src={`data:image/jpeg;base64,${member.image}`}
          alt={member.name}
          style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "5px" }}
        />

        <div>
          <h5 style={{ fontWeight: "bold", marginTop: "10px" }}>{member.name}</h5>
          <p style={{ color: "#6c757d" }}>{member.role}</p>
        </div>

        {/* Read More Button */}
        <Link
          to={`/alumni/${member.id}`}
          style={{
            backgroundColor: "#003883",
            color: "white",
            padding: "10px 20px",
            borderRadius: "50px",
            border: "3px solid #FFA500",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            transition: "0.3s",
          }}
        >
          Read more
        </Link>
      </div>
    ))}
      <style jsx>{`
                @media (max-width: 1024px) {
                    .background-element {
                        display: none !important;
                    }
                }
            `}</style>
             </div>
  </div>

 

  {/* View All Button */}
  <div style={{ marginTop: "40px" }}>
    <a
      href="/viewAll"
      style={{
        backgroundColor: "#cb192a",
        color: "white",
        padding: "10px 20px",
        borderRadius: "50px", // Rounded corners
        textDecoration: "none",
        fontWeight: "bold",
        display: "inline-block",
        transition: "0.3s",
        marginBottom: "8rem",
        marginTop: "rem",
      }}
    >
      <span style={{ color: "white" }}>View All</span> 
    </a>
  </div>
</div>





                

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
