import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './news.css';
import Footer from '../components/Footer';

function News() {
  const navigate = useNavigate();
  const [newsArticles, setNewsArticles] = useState([]);
  const [magazines, setMagazines] = useState([]);
  const [activeTab, setActiveTab] = useState('general');

  // Fetch news articles based on the selected type
  const fetchNews = async (type) => {
    try {
      const response = await axios.get(`http://localhost:5214/api/Alumnus/GetNewsByType/GetNews/${type}`);
      if (type === 'general') {
        setNewsArticles(response.data);
      } else if (type === 'magazine') {
        setMagazines(response.data);
      }
    } catch (error) {
      console.error(`Error fetching ${type} news:`, error);
    }
  };

  // Fetch news data when the component mounts
  useEffect(() => {
    fetchNews('general');
    fetchNews('magazine');
  }, []);

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
            {['general', 'magazine'].map((topic, index) => (
              <li className="nav-item" role="presentation" key={index}>
                <button
                  className={`nav-link ${activeTab === topic ? 'active' : ''}`}
                  id={`${topic}-tab`}
                  onClick={() => setActiveTab(topic)}
                  type="button"
                  role="tab"
                  aria-controls={`${topic}-tab-pane`}
                  aria-selected={activeTab === topic}
                >
                  {topic === 'general' ? 'General News' : 'Magazines'}
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
              {activeTab === 'general' && (
                <div className="tab-pane fade show active" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab" tabIndex="0">
                  <div className="row">
                    {newsArticles.map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">{item.headline}</h5>
                              <img src={`data:image/jpeg;base64,${item.media}`} alt="" style={{ width: "350px",height: "300px", margin: "10px 0" }} />
                              <p className="sub-description mb-1">{`Published: ${ new Date(item.publishedDate).toLocaleDateString("en-GB",{ day: "2-digit",month: "long",year: "numeric", })}, by ${item.publisher}`}</p>
                              <p className="description-text mb-0">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Magazine Tab */}
              {activeTab === 'magazine' && (
                <div className="tab-pane fade show active" id="magazine-tab-pane" role="tabpanel" aria-labelledby="magazine-tab" tabIndex="0">
                  <div className="row">
                    {magazines.map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="d-flex">
                              <div>
                                <img src={`data:image/jpeg;base64,${item.media}`} alt={`Magazine edition`} className="magimg" />
                                <p className="description-text mb-0">{item.description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default News;
