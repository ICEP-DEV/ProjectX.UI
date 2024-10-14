import React , { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import Footer from '../components/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useLocation } from 'react-router-dom';

// Import images
import aluminiCommunityImage from '../images/topics/undraw_Remote_design_team_re_urdx.png';
import graduationImage from '../images/tut_graduate.jpg';
// import faqGraphic from '../images/faq_graphic.jpg';

const Logged = () => {
  const smoothS = useLocation();

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

    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', function () {});
      });
    };
  }, [smoothS]);

  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto text-center">
              </div>
              <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-white text-center">Connect. Inspire. Celebrate.</h1>
                <h6 className="text-center">A Hub for TUT Graduates</h6>
              </div>
            </div>
          </div>
        </section>

        
                {/* Search End */}

                {/* Advertising Div Start */}
                <section className="featured-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                                <div className="custom-block bg-white shadow-lg">
                                    <Link to="/topics-detail">
                                        <div className="d-flex">
                                            <div>
                                                <h5 className="mb-2">Alumni Community</h5>
                                                <p className="mb-0">
                                                    Welcome to the Alumni Workspace—where you can connect with fellow graduates, explore career opportunities, and celebrate the achievements of our university community.
                                                    <br />
                                                    <br />
                                                
                                                </p>
                                            </div>
                                        </div>
                                        <img
                                            src={aluminiCommunityImage}
                                            className="custom-block-image img-fluid"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="custom-block custom-block-overlay">
                                    <div className="d-flex flex-column h-100">
                                        <img
                                            src={graduationImage}
                                            className="custom-block-image img-fluid"
                                            alt=""
                                        />
                                        <div className="custom-block-overlay-text d-flex">
                                            <div>
                                                <h5 className="text-white mb-2">Graduation</h5>
                                                <p className="text-white">
                                                    The time has finally come for the 2025 group of graduates.
                                                </p>
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


        
      </main>
      <Footer/>
    </div>
  );
};

export default Logged;
