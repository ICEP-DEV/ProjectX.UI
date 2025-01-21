import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logged.css';
import './Carousel.css';
import FooterLogged from './FooterLogged';

// import Donate from '../components/Donate';
import NavbarLogged from './NavbarLogged'; // Import the NavBar component
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useLocation } from 'react-router-dom';


// Import images
// import aluminiCommunityImage from '../images/topics/undraw_Remote_design_team_re_urdx.png';
// import graduationImage from '../images/tut_graduate.jpg';
import homepg1 from './LoggedInPhotos/homepg1.jpeg';
import homepg2 from './LoggedInPhotos/homepg2.jpeg';
import homepg3 from './LoggedInPhotos/homepg3.jpeg';
import faqGraphic from '../images/faq_graphic.jpg';

// import CarouselP1 from './LoggedInPhotos/a.png';
// import CarouselP2 from './LoggedInPhotos/b.png';
// import CarouselP3 from './LoggedInPhotos/c.png';

const Logged = () => {
  const smoothS = useLocation();
  const carouselRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const listHTML = listRef.current;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const seeMoreButtons = carousel.querySelectorAll('.seeMore');
    const backButton = document.getElementById('back');
    let unAcceppClick;

      // Hide backButton initially
      backButton.style.display = 'none';

    const showSlider = (type) => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';

      carousel.classList.remove('next', 'prev');
      const items = carousel.querySelectorAll('.carousel .list .item');
      if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    nextButton.onclick = () => showSlider('next');
    prevButton.onclick = () => showSlider('prev');

    seeMoreButtons.forEach((button) => {
      button.onclick = () => {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');

        // Show backButton when seeMoreButtons is clicked
        backButton.style.display = 'block';
      };
    });

    backButton.onclick = () => {
      carousel.classList.remove('showDetail');

       // Hide backButton when it is clicked
       backButton.style.display = 'none';
    };

    return () => {
      nextButton.onclick = null;
      prevButton.onclick = null;
      seeMoreButtons.forEach((button) => (button.onclick = null));
      backButton.onclick = null;
    };
  }, []);

  const data = [
    {
      imgSrc: homepg3,
      introduceTitle: 'Unlock Knowledge Anytime, Anywhere',   
      introduceDes:
        'Discover a wealth of resources at your fingertips. Our Digital Library offers alumni access to academic materials, research papers, and industry insights to keep you informed and ahead.',
      detailTitle: 'Unlock Knowledge Anytime, Anywhere',
      detailDes:
        'Our Digital Library is your gateway to a world of knowledge designed to empower and inspire. Access a diverse collection of academic materials, cutting-edge research papers, and valuable industry insights – all curated to support your continuous growth and professional journey.Whether you’re diving into advanced research, exploring new career paths, or staying informed about industry trends, our library ensures you’re equipped with the tools to succeed. Stay connected to TUT’s rich academic resources, no matter where life takes you.',
    
    },
    {
      imgSrc: homepg2,
      introduceTitle: 'Celebrating Your Journey, Empowering Your Future',
      introduceDes:
        'Welcome to Alumni Space – where your achievements inspire, your connections grow, and your future takes flight. Together, we celebrate your success and open doors to endless opportunities. Let’s keep the journey going, hand in hand',
      detailTitle: 'Celebrating Your Journey, Empowering Your Future',
      detailDes:
        'As part of our vibrant community, you’ll have access to exclusive networking opportunities, career development resources, and events tailored to your growth. Stay updated on university news, connect with fellow alumni, and make a lasting impact through programs that shape the future. Together, we honour the past, embrace the present, and build a brighter future for generations to come. Continue your legacy and let your story inspire others!',
      
    },
    {
      imgSrc: homepg1,
      introduceTitle: 'Strengthening Bonds, Building Futures',
     
      introduceDes:
        'Join the Convocation and Alumni Meet, a celebration of shared journeys and future aspirations. Reconnect with peers, foster meaningful connections, and contribute to the growth of our alumni community. Together, we create opportunities and uphold the legacy of excellence.',
      detailTitle: 'Strengthening Bonds, Building Futures',
      detailDes:
        'The Convocation and Alumni Meet celebrates shared milestones and fosters connections among alumni. This event offers a platform to network with peers and industry leaders, contribute to impactful community initiatives, and relive cherished memories. It’s also an opportunity to engage in discussions that align alumni contributions with the evolving needs of the university. Join us in building a legacy of excellence and strengthening the bonds that unite our vibrant alumni community..',
  
    },
    // Add other items (similar to the structure above)
  ];

  
  // Simulate login by setting 'isLoggedIn' to true in localStorage
  useEffect(() => {
    localStorage.setItem('isLoggedIn', 'true'); // Set login status to true
  }, []);

  // Smooth scrolling function
  const scrollToDiv = (element, navHeight) => {
    const offsetTop = element.offsetTop;
    const totalScroll = offsetTop - navHeight;

    window.scrollTo({
      top: totalScroll,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;

    if (smoothS.hash) {
      const targetElement = document.querySelector(smoothS.hash);
      if (targetElement) {
        scrollToDiv(targetElement, headerHeight);
      }
    }

    const smoothScrollLinks = document.querySelectorAll('.smoothscroll');
    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          scrollToDiv(targetElement, headerHeight);
        }
      });
    });

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
        const mainTimelineContainerBottom =
          mainTimelineContainer.getBoundingClientRect().bottom - window.innerHeight * 0.5;
        const innerElement = mainTimelineContainer.querySelector('.inner');
        if (innerElement) {
          innerElement.style.height = `${mainTimelineContainerBottom}px`;
        }
      };

      const timelineItems = document.querySelectorAll('#vertical-scrollable-timeline li');
      timelineItems.forEach(isScrollIntoView);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener('click', function () {});
      });
    };
  }, [smoothS]);

  const timelineData = [
    { title: "Career Advancement and Networking", content: " The alumni website provides a timeline of alumni milestones, showcasing key achievements, career progress, and events. This platform connects alumni with industry professionals, mentors, and former classmates, fostering networking opportunities that can lead to career advancement, job referrals, and professional growth." },
    { title: "Continued Learning and Skill Development", content: "Through the alumni website, alumni can access a timeline of educational opportunities, such as workshops, webinars, and certification courses. These resources help alumni stay updated with industry trends, learn new skills, and continue their professional development long after graduation." },
    { title: "Community Support and Engagement", content: " The alumni website offers a timeline of community events, reunions, and charitable initiatives, encouraging alumni to stay connected and engaged with their alma mater. Alumni can participate in volunteering opportunities, mentor current students, and give back to the university community." },
    // { title: "Title 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    // { title: "Title 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  ];

  return (
    <div>
      {/* Add NavBar component here */}
      <NavbarLogged />

      <main>
        {/* Hero Section */}
        {/* <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto text-center"></div>
              <div className="col-lg-8 col-12 mx-auto tl-add-space3">
                <h1 className="text-black text-center">Welcome To Alumni Space</h1>
                <h6 className="text-center">A Hub for TUT Graduates</h6>
              
              </div>
            </div>
          </div>
        </section> */}

        {/* Homepage Div Start */}
        <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img className='carousel-img' src={item.imgSrc} alt={item.introduceTopic} />
            <div className="introduce">
              <div className="title">{item.introduceTitle}</div>
              <div className="topic">{item.introduceTopic}</div>
              <div className="des">{item.introduceDes}</div>
              <button className="seeMore">VIEW MORE &#8599;</button>
            </div>

            <div className="detail">
              <div className="title" style={{fontSize: '25px', fontWeight:'bold'}}>{item.detailTitle}</div>
              <div className="des">{item.detailDes}</div>
            
            </div>

          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
        <button id="back">VIEW LESS &#8599;</button>
      </div>
    </div>
        {/* Advertising Div End */}

        {/* What Is Alumini Space Start */}
        <section className="section-padding" id="section_7">                  

                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center tl-add-space">
                                <h2 className="text-black mb-4"  >What Is Alumni Space?</h2>
                            </div>

                            <div className="tl-timeline">
                              <div className="tl-outer">
                                {timelineData.map((item, index) => (
                                  <div key={index} className={`tl-card ${index % 2 === 0 ? 'tl-odd' : 'tl-even'}`}>
                                    <div className="tl-info">
                                      <h3 className="tl-title">{item.title}</h3>
                                      <p>{item.content}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                 
                            
                        </div>
                    </div>
                </section>
                {/* What Is Alumini Space End */}
      


  {/* FAQs Start */}
     <section className="faq-section section-padding" id="section_8">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
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
 {/* FAQs End */}


              

      </main>
      <FooterLogged />
    </div>
  );
};

export default Logged;
