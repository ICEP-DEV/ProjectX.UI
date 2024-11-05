import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logged.css';
import Footer from '../components/Footer';
import Donate from '../components/Donate';
import NavbarLogged from './NavbarLogged'; // Import the NavBar component
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useLocation } from 'react-router-dom';


// Import images
import aluminiCommunityImage from '../images/topics/undraw_Remote_design_team_re_urdx.png';
import graduationImage from '../images/tut_graduate.jpg';
import faqGraphic from '../images/faq_graphic.jpg';

const Logged = () => {
  const smoothS = useLocation();
  
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

  return (
    <div>
      {/* Add NavBar component here */}
      <NavbarLogged />

      <main>
        {/* Hero Section */}
        <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto text-center"></div>
              <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-black text-center">Connect. Inspire. Celebrate.</h1>
                <h6 className="text-center">A Hub for TUT Graduates</h6>
              
              </div>
            </div>
          </div>
        </section>

        {/* Advertising Div Start */}
        <section className="featured-section">
          <div className="containerli">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block bg-white shadow-lg">
                    <div className="d-flex">
                      <div>
                        <h5 className="mb-2">Alumni Community</h5>
                        <p className="mb-0">
                          Welcome to the Alumni Workspace—where you can connect with fellow graduates, explore career
                          opportunities, and celebrate the achievements of our university community.
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                    <img src={aluminiCommunityImage} className="custom-block-image img-fluid" alt="" />
                  
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="custom-block custom-block-overlay">
                  <div className="d-flex flex-column h-100">
                    <img src={graduationImage} className="custom-block-image img-fluid" alt="" />
                    <div className="custom-block-overlay-text d-flex">
                      <div>
                        <h5 className="text-white mb-2">Graduation</h5>
                        <p className="text-white">The time has finally come for the 2025 group of graduates.</p>
                        <Link to="/topics-detail" className="btn custom-btn mt-2 mt-lg-3">
                          Learn More
                        </Link>
                      </div>
                    </div>

                    <div className="social-share d-flex">
                      <p className="text-white me-4">Share:</p>
                      <ul className="social-icon">
                        <li className="social-icon-item">
                          <a href="#" className="social-icon-link bi-twitter"></a>
                        </li>
                        <li className="social-icon-item">
                          <a href="#" className="social-icon-link bi-facebook"></a>
                        </li>
                        <li className="social-icon-item">
                          <a href="#" className="social-icon-link bi-pinterest"></a>
                        </li>
                      </ul>
                    </div>
                    <div className="section-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Advertising Div End */}

        {/* What Is Alumini Space Start */}
        <section className="timeline-section section-padding" id="section_2">
                    <div className="section-overlay"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="text-white mb-4"  >What Is Alumni Space?</h2>
                            </div>
                            <div className="col-lg-10 col-12 mx-auto">
                                <div className="timeline-container">
                                    <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                                        <div className="list-progress">
                                            <div className="inner"></div>
                                        </div>

                                        <li>
                                            <h4 className="text-white mb-3" id = "ss">Career Advancement and Networking</h4>
                                            <p className="text-white">
                                                The alumni website provides a timeline of alumni milestones, showcasing key achievements, career progress, and events. This platform connects alumni with industry professionals, mentors, and former classmates, fostering networking opportunities that can lead to career advancement, job referrals, and professional growth.
                                            </p>
                                            <div className="icon-holder">
                                                <i className="bi-search"></i>
                                            </div>
                                        </li>

                                        <li>
                                            <h4 className="text-white mb-3">Continued Learning and Skill Development</h4>
                                            <p className="text-white">
                                                Through the alumni website, alumni can access a timeline of educational opportunities, such as workshops, webinars, and certification courses. These resources help alumni stay updated with industry trends, learn new skills, and continue their professional development long after graduation.
                                            </p>
                                            <div className="icon-holder">
                                                <i className="bi-bookmark"></i>
                                            </div>
                                        </li>

                                        <li>
                                            <h4 className="text-white mb-3">Community Support and Engagement</h4>
                                            <p className="text-white">
                                                The alumni website offers a timeline of community events, reunions, and charitable initiatives, encouraging alumni to stay connected and engaged with their alma mater. Alumni can participate in volunteering opportunities, mentor current students, and give back to the university community.
                                            </p>
                                            <div className="icon-holder">
                                                <i className="bi-globe"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 text-center mt-5">
                               <p class="text-white">
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
                <section className="contact-section section-padding section-bg" id="section_5">
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
                </section>
                {/* Contact Us End */}

      </main>
      <Footer />
    </div>
  );
};

export default Logged;
