import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './news.css';
import FooterLogged from './FooterLogged';

import news1 from '../images/news1.jpg';
import news2 from '../images/news2..png';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpg';

import mag1 from '../images/mag1.jpg';
import mag2 from '../images/mag2.jpg';
import mag3 from '../images/mag3.jpg';
import mag4 from '../images/mag4.jpg';

import hist1 from '../images/hist1.jpeg';
import hist2 from '../images/hist2.jpeg';
import hist3 from '../images/hist3.jpeg';
import hist4 from '../images/hist4.jpeg';
import hist5 from '../images/hist5.jpeg';
import hist6 from '../images/hist6.jpeg';

import hist7 from '../images/hist7.jpeg';
import hist8 from '../images/hist8.jpeg';
import hist9 from '../images/hist9.jpeg';
import hist10 from '../images/hist10.jpeg';

 import hist13 from '../images/hist13.jpeg';
import hist14 from '../images/hist14.jpeg';
import hist15 from '../images/hist15.jpeg';
import hist16 from '../images/hist16.jpeg';


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
  const historicalArchives1 = [
    {
      // description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.",
      img: hist1,
    },
    {
      // description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.",
      img: hist2,
    },
    {
      // description: "On 13 November 2024, the Tshwane University of Technology (TUT) Academic Excellence Awards will recognize exceptional academic staff.",
      img: hist3,
    },
    {
      // description: "The Tshwane University of Technology (TUT) – renowned for grooming elite athletes that compete on national and international stages – is inviting corporations, foundations, and individuals to partner with it to improve its sports programmes and facilities.",
      img: hist4,
    },
    {
      // description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.",
      img: hist5,
    },
    {
      // description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.",
      img: hist6,
    },
  ]
    const historicalArchives2 = [
      {
        // description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.",
        img: hist7,
      },
      {
        // description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.",
        img: hist8,
      },
      {
        // description: "On 13 November 2024, the Tshwane University of Technology (TUT) Academic Excellence Awards will recognize exceptional academic staff.",
        img: hist9,
      },
      {
        // description: "The Tshwane University of Technology (TUT) – renowned for grooming elite athletes that compete on national and international stages – is inviting corporations, foundations, and individuals to partner with it to improve its sports programmes and facilities.",
        img: hist10,
      },
      {
        // description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.",
        img: hist6,
      },
      {
        // description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.",
        img: hist4,
      },

  ];

  const historicalArchives3 = [
    {
      // description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.",
      img: hist13,
    },
    {
      // description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.",
      img: hist14,
    },
    {
      // description: "On 13 November 2024, the Tshwane University of Technology (TUT) Academic Excellence Awards will recognize exceptional academic staff.",
      img: hist15,
    },
    {
      // description: "The Tshwane University of Technology (TUT) – renowned for grooming elite athletes that compete on national and international stages – is inviting corporations, foundations, and individuals to partner with it to improve its sports programmes and facilities.",
      img: hist8,
    },
    {
      // description: "The first cohort of structured Master’s students in the Department of Performing Arts (DPA) in 2024 have all enthusiastically embraced their two first-year modules. One of these modules is Embodied Technologies, which requires students to conceptualise and manage a project that involves a technology as a composite performer.",
      img: hist9,
    },
    {
      // description: "The Hacker Society of the Faculty of ICT at Tshwane University of Technology hosted the “Why Women” event on 15 October 2024 at the Student Centre, in Soshanguve South.",
      img: hist10,
    },

];


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
            {["General", "Magazine", "Historical Archives"].map((topic, index) => (
              <li className="nav-item" role="presentation" key={index}>
                <button
                  className={`nav-link ${activeTab === topic.toLowerCase() ? 'active' : ''}`}
                  id={`${topic.toLowerCase()}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${topic.toLowerCase()}-tab-pane`}
                  type="button"
                  role="tab"
                  aria-controls={`${topic.toLowerCase()}-tab-pane`}
                  aria-selected={activeTab === topic.toLowerCase() ? 'true' : 'false'}
                  onClick={() => setActiveTab(topic.toLowerCase())}
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
              {activeTab === 'general' && (
                <div className="tab-pane fade show active" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab">
                  <div className="row">
                    {newsArticles.map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <h5 className="mb-2">{item.headline}</h5>
                          <img src={`data:image/jpeg;base64,${item.media}`} alt="" style={{ width: "400px", height: "300px", margin: "10px 0" }} />
                          <p className="sub-description mb-1">
                            {`Published: ${new Date(item.publishedDate).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            })}, by ${item.publisher}`}
                          </p>
                          <p className="description-text mb-0">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Magazine Tab */}
              {activeTab === 'magazine' && (
                <div className="tab-pane fade show active" id="magazine-tab-pane" role="tabpanel" aria-labelledby="magazine-tab">
                  <div className="row">
                    {magazines.map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx}>
                        <div className="custom-block bg-white shadow-lg">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={`data:image/jpeg;base64,${item.media}`} alt="Magazine edition" className="magimg" />
                            <p className="description-text mb-0">{item.description}</p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Historical Archives Tab */}
              {activeTab === 'historical archives' && (
                <>
                  {/* 2004 - 2008 */}
                  <div className="tab-pane fade show active" id="historicalarchives-tab-pane" role="tabpanel" aria-labelledby="historicalarchives-tab">
                    <h5>2004 - 2008</h5>
                    <p id='hist'>Established on January 1, 2004, TUT resulted from the merger of Technikon Northern Gauteng, Technikon North-West, and Technikon Pretoria. This consolidation aimed to transform and restructure higher education in post-apartheid South Africa, fostering inclusivity and diversity.During this period, TUT expanded by establishing satellite campuses in Mbombela, Emalahleni, and Polokwane, extending its educational reach. </p>
                    <div className="row">
                      {historicalArchives1.map((image, idx) => (
                      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
                        <div className="card shadow-sm">
                        <img
                      src={image.img} // Use 'img' as defined in historicalArchives1
                      alt="Historical Archive" // Provide a meaningful alt text
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                      />

                    </div>
                  </div>
                  ))}
                  </div>
                  </div>

                  {/* 2009 - 2013 */}
                  <div className="tab-pane fade show active" id="historicalarchives-tab-pane" role="tabpanel" aria-labelledby="historicalarchives-tab">
                    <h5>2009 - 2013</h5>
                    <p id='hist'>By 2012, TUT's enrollment surged to approximately 88,078 students, reflecting its growing reputation and accessibility.The university predominantly offered vocational qualifications, including three-year diplomas, advanced diplomas, and postgraduate degrees, aligning with industry needs.In 2010, Webometrics ranked TUT as the 15th best university in South Africa and 5,662nd globally, indicating its emerging presence in the academic community.  </p>
                    <div className="row">

                      {historicalArchives2.map((image, idx) => (
                      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
                        <div className="card shadow-sm">
                        <img
                        src={image.img} // Use 'img' as defined in historicalArchives1
                        alt="Historical Archive" // Provide a meaningful alt text
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                        />

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                   {/* 2009 - 2013 */}
                  <div className="tab-pane fade show active" id="historicalarchives-tab-pane" role="tabpanel" aria-labelledby="historicalarchives-tab">
                  <h5>2014 - 2018</h5>
                  <p id='hist'>TUT continued its upward trajectory, with first-year applications reaching around 80,000 in 2014, underscoring its appeal among prospective students.Tshwane University of Technology (TUT) was significantly impacted by the national #FeesMustFall movement, which began in October 2015.This student-led protest aimed to halt increases in university tuition fees and advocate for greater government funding for higher education institutions across South Africa.In 2018, Times Higher Education ranked TUT among the top 1,000 universities globally and eighth in South Africa, highlighting its academic advancements 
WIKIPEDIA
 The university diversified its program offerings, emphasizing distance and blended learning to accommodate a broader student base </p>
                    <div className="row">
                      {historicalArchives3.map((image, idx) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
                          <div className="card shadow-sm">
                          <img
                        src={image.img} // Use 'img' as defined in historicalArchives1
                        alt="Historical Archive" // Provide a meaningful alt text
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                        />

                          </div>
                        </div>

                      ))}
                    </div>
                  </div>


                  {/* 2018 - 2023 */}
                  <div className="tab-pane fade show active" id="historicalarchives-tab-pane" role="tabpanel" aria-labelledby="historicalarchives-tab">
                    <h5>2019 - 2023</h5>
                    <p id='hist'>The historical archives of Tshwane University of Technology (TUT) preserve the university's rich legacy since its formation in 2004. They contain records, research, photographs, and artifacts that reflect TUT's growth and contributions to education, technology, and community development. The archives are a valuable resource for researchers and students, offering insight into the university's role in South Africa's post-apartheid educational landscape</p>
                    <div className="row">

                      {historicalArchives1.map((image, idx) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
                          <div className="card shadow-sm">
                          <img
                        src={image.img} // Use 'img' as defined in historicalArchives1
                        alt="Historical Archive" // Provide a meaningful alt text
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                        />

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterLogged />
    </div>
  );
}

export default News;
