import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useLocation } from 'react-router-dom';

// Import images
import aluminiCommunityImage from '../images/topics/undraw_Remote_design_team_re_urdx.png';
import graduationImage from '../images/5.jpg';
import graduationImage1 from '../images/tut_graduate.jpg';
import graduationImage2 from '../images/2.JPG';
import graduationImage3 from '../images/1.jpg';
import graduationImage4 from '../images/6.jpeg';
import graduationImage5 from '../images/3.png';
import graduationImage6 from '../images/4.jpeg';
import faqGraphic from '../images/faq_graphic.jpg';

const backgroundImages = [
  graduationImage,
  graduationImage1,
  graduationImage2,
  graduationImage3,
  graduationImage4,
  graduationImage5,
  graduationImage6,
];

// Corresponding text information for each slide
const slideTexts = [
  {
    title: "Graduation",
    description: "The time has finally come for the 2024 Second Semester group of graduates.",
    link: "https://www.youtube.com/live/aZCSDU_fskM?si=Lkrj-K0I_z7ibReQ"
  },
  {
    title: "Plug A Graduate",
    description: "Catch PLUG-A-GRADUATE with Polelo N Madisa on the Ground Breaker Show tonight",
    link: "https://tutfm962.co.za/"
  },
  {
    title: "Celebration",
    description: "We are thrilled to announce the release of 𝑶𝒖𝒓 𝑩𝒆𝒂𝒕 alumni profiling magazine, 𝑽𝒐𝒍 8 𝑰𝒔𝒔𝒖𝒆 2!",
    link: "https://heyzine.com/flip-book/ba71bd51a3.html#page/1"

  },
  {
    title: "Connect with Alumni",
    description: "Reconnect with old friends and expand your professional network.",
    link: "https://www.linkedin.com/in/tut-alumni-44bb19244/"
  },
  {
    title: "Continued Learning",
    description: "Take advantage of workshops and resources available to alumni.",
    link: "https://www.youtube.com/live/aZCSDU_fskM?si=Lkrj-K0I_z7ibReQ"
  },
  {
    title: "Stay Updated",
    description: "Stay informed about upcoming events and opportunities. 𝒀𝒐𝒖'𝒓𝒆 𝒄𝒐𝒓𝒅𝒊𝒂𝒍𝒍𝒚 𝒊𝒏𝒗𝒊𝒕𝒆𝒅 𝒕𝒐 𝒕𝒉𝒆 𝑻𝑼𝑻 𝑷𝒓𝒆𝒕𝒐𝒓𝒊𝒂 𝑭𝒖𝒏𝒅𝒓𝒂𝒊𝒔𝒊𝒏𝒈 𝑮𝒐𝒍𝒇 𝑫𝒂𝒚 𝒂𝒕 𝒕𝒉𝒆 𝒑𝒓𝒆𝒔𝒕𝒊𝒈𝒊𝒐𝒖𝒔 𝑾𝒐𝒐𝒅𝒉𝒊𝒍𝒍 𝑮𝒐𝒍𝒇 𝑬𝒔𝒕𝒂𝒕𝒆 𝒂𝒏𝒅 𝑪𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒍𝒖𝒃.",
    link: "https://docs.google.com/forms/d/1j5O_VVKmhI4hkn1X4p3pHCIlkkNf2Qk9N9KcmoRt-rM/viewform?edit_requested=true"
 
  },
  {
    title: "Community Support",
    description: "Get involved with our alumni community and support future graduates.",
    link: "https://tut.devman.co.za/Devman/online/findme/"
  },
];

const HomePage = () => {
  const sibanda = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow function to switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
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

    if (sibanda.hash) {
      const targetElement = document.querySelector(sibanda.hash);
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

        const mainTimelineContainer = document.querySelector(
          '#vertical-scrollable-timeline'
        );
        const mainTimelineContainerBottom =
          mainTimelineContainer.getBoundingClientRect().bottom -
          window.innerHeight * 0.5;
        const innerElement = mainTimelineContainer.querySelector('.inner');
        if (innerElement) {
          innerElement.style.height = `${mainTimelineContainerBottom}px`;
        }
      };

      const timelineItems = document.querySelectorAll(
        '#vertical-scrollable-timeline li'
      );
      timelineItems.forEach(isScrollIntoView);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener('click', function () {});
      });
    };
  }, [sibanda]);

  return (
    <div>
      <main>
        {/* Search Start */}
        <section
          className="hero-section  justify-content-center align-items-center"
          id="section_1"
        >
<div className="container">
  <div className="row">
    <div className="col-lg-8 col-12 mx-auto">
      <h1 className="text-white text-center">
        Connect. Inspire. Celebrate.
      </h1>
      <h6 className="text-center mb-4">A Hub for TUT Graduates</h6>
    </div>
  </div>
</div>

          
       
  <div className="container" >
    <div className="row justify-content-center">
      <div className="col-lg-15 col-20">
        <div className="custom-block custom-block-overlay" style={{ zIndex: 10 }}>
          <div className="d-flex flex-column h-100 ">
            {/* Slideshow */}
            <img
              src={backgroundImages[currentIndex]}
              className="custom-block-image img-fluid"
              alt="Graduation Slideshow"
            />
            <div className="custom-block-overlay-text"style={{ textAlign: "center", marginTop: 200 }}>
              <h5 className="text-white mb-2" style={{ textAlign: "center"  }}>
                {slideTexts[currentIndex].title}
              </h5>
              <p className="text-white">
                {slideTexts[currentIndex].description}
              </p>
              <div>
                <Link
                  to={slideTexts[currentIndex].link}
                  className="btn custom-btn mt-2 mt-lg-3"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div style={{ backgroundColor: 'black', marginTop: 10, zIndex: 10}}>
            <div className="social-share d-flex  moving-text" >
  <p className="text-white me-4 " >Follow Us @:</p>
  <ul className="social-icon">
    <li className="social-icon-item">
      <a href="https://x.com/TUTalumni" className="social-icon-link bi-twitter"></a>
    </li>
    <li className="social-icon-item">
      <a href="https://www.facebook.com/TUTAlumni" className="social-icon-link bi-facebook"></a>
    </li>
    <li className="social-icon-item">
      <a href="https://www.instagram.com/tutalumni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon-link bi-instagram"></a>
    </li>
  </ul>
  </div>
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
                                <h2 className="text-white mb-4">What Is Alumni Space?</h2>
                            </div>
                            <div className="col-lg-10 col-12 mx-auto">
                                <div className="timeline-container">
                                    <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                                        <div className="list-progress">
                                            <div className="inner"></div>
                                        </div>

                                        <li>
                                            <h4 className="text-white mb-3">Career Advancement and Networking</h4>
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
     <section className="faq-section section-padding" id="section_3">
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
                <section className="contact-section section-padding section-bg" id="section_4">
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

export default HomePage;
