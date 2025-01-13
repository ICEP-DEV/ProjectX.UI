import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logged.css';
import './Carousel.css';
import Footer from '../components/Footer';
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
      };
    });

    backButton.onclick = () => {
      carousel.classList.remove('showDetail');
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
      introduceTitle: 'DESIGN SLIDER',
      introduceTopic: 'Aerphone',
      introduceDes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      detailTitle: 'Aerphone GHTK',
      detailDes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      // specifications: [
      //   { label: 'Date', value: '23 April 2025' },
      //   { label: 'Time', value: '07:15' },
      //   { label: 'Venue', value: 'Net Care' },
      //   { label: 'Dress Code', value: 'All White' },
      //   { label: 'Plus-One', value: 'Yes' },
      // ],
    },
    {
      imgSrc: homepg2,
      introduceTitle: 'DESIGN SLIDER',
      introduceTopic: 'Aerphone',
      introduceDes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      detailTitle: 'Aerphone GHTK',
      detailDes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      // specifications: [
      //   { label: 'Date', value: '23 April 2025' },
      //   { label: 'Time', value: '07:15' },
      //   { label: 'Venue', value: 'Net Care' },
      //   { label: 'Dress Code', value: 'All White' },
      //   { label: 'Plus-One', value: 'Yes' },
      // ],
    },
    {
      imgSrc: homepg1,
      introduceTitle: 'DESIGN SLIDER',
      introduceTopic: 'Aerphone',
      introduceDes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      detailTitle: 'Aerphone GHTK',
      detailDes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      // specifications: [
      //   { label: 'Date', value: '23 April 2025' },
      //   { label: 'Time', value: '07:15' },
      //   { label: 'Venue', value: 'Net Care' },
      //   { label: 'Dress Code', value: 'All White' },
      //   { label: 'Plus-One', value: 'Yes' },
      // ],
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

        {/* Advertising Div Start */}
        <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img className='carousel-img' src={item.imgSrc} alt={item.introduceTopic} />
            <div className="introduce">
              <div className="title">{item.introduceTitle}</div>
              <div className="topic">{item.introduceTopic}</div>
              <div className="des">{item.introduceDes}</div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">{item.detailTitle}</div>
              <div className="des">{item.detailDes}</div>
              {/* <div className="specifications">
                {item.specifications.map((spec, i) => (
                  <div key={i}>
                    <p className='label-carousel'>{spec.label}</p>
                    <p className='value-carousel'>{spec.value}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
        <button id="back">See All &#8599;</button>
      </div>
    </div>
        {/* Advertising Div End */}

        {/* What Is Alumini Space Start */}
        <section className="section-padding" id="section_2">                  

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
                 
                            <div class="col-12 text-center mt-5">
                               <p class="text-black">
                                Want to learn more?
                              <a href="#" class="btn custom-btn custom-border-btn ms-3">Check out Youtube</a>
                              </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* What Is Alumini Space End */}
      


  {/* FAQs Start */}
     <section className="faq-section section-padding" id="section_4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
 {/* FAQs End */}


                {/* Contact Us Start */}
                <section className="contact-section section-padding section-bg tl-con-us" id="section_5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12 text-center tl-add-space2">
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
                </section>
                {/* Contact Us End */}

      </main>
      <Footer />
    </div>
  );
};

export default Logged;
