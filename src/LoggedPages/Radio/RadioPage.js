import React, { useEffect, useState, useRef } from "react";
import "./RadioPage.css";
import Footer from '../Footer';

import cardoImage1 from "./radio photos/photos/2.png";  // Add your image imports
import cardoImage2 from "./radio photos/photos/1.png";
import cardoImage3 from "./radio photos/photos/3.png";
import cardoImage4 from "./radio photos/photos/4.png";
import cardoImage5 from "./radio photos/photos/5.png";
import cardoImage6 from "./radio photos/photos/6.png";

import cardoImage7 from "./radio photos/1.jpg";  // Add your image imports
import cardoImage8 from "./radio photos/2.jpg";
import cardoImage9 from "./radio photos/3.jpg";
import cardoImage10 from "./radio photos/4.jpg";
import cardoImage11 from "./radio photos/5.jpg";
import cardoImage12 from "./radio photos/6.jpg";

import TutLogo from "./radio photos/fm logo.png";

import Audio1 from "./radio podcast/Dr Linda Meyer.mp3";
import Audio2 from "./radio podcast/Nokuthula Makhanya.mp3";
import Audio3 from "./radio podcast/Oupa Segalwe.mp3";
import Audio4 from "./radio podcast/Obakeng Aubrey Moeketsi.m4a";
import Audio5 from "./radio podcast/Rearabetswe Dire.mp3";
import Audio6 from "./radio podcast/Shalate Davhana.mp3";

import Video1 from "./radio photos/Short Video.mp4";
import Video2 from "./radio video/promo1.mp4";
import Video3 from "./radio video/promo 2.mp4";
import Video4 from "./radio photos/Short Video.mp4";
import Video5 from "./radio video/promo1.mp4";
import Video6 from "./radio video/promo 2.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBackward, faForward, faChevronDown, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

// Video data including descriptions
const videoData = [
  {
    src: Video1,
    description: "In this insightful interview on TUTFM, writer Mr. Oupa Segalwe discusses his book Plug-A-Graduate, offering valuable perspectives on the challenges and opportunities for graduates in today’s fast-paced world. Tune in as Mr. Segalwe explores how his book equips young professionals with practical tools and strategies to navigate the transition from university to the workforce.",
  },
  {
    src: Video2,
    description: "In this inspiring video, we hear from alumni who share their personal stories of growth and achievement since leaving university. Learn how they navigated their careers, faced challenges, and used their education to build successful futures. Whether you're a current student or a recent graduate, this video offers valuable lessons on leveraging your alumni network and staying connected to your roots.",
  },
  {
    src: Video3,
    description: "In this video, experts discuss the power of alumni networks and how they can open doors for career advancement. Discover the many ways alumni stay engaged with their alma mater, provide mentorship, and create opportunities for students and fellow graduates. If you're looking to build meaningful professional relationships, this is the video for you!",
  },
  {
    src: Video4,
    description: "Join a group of alumni as they discuss how they successfully navigated career changes, re-skilled, and reinvented themselves. In this session, they share advice on adapting to new industries, overcoming setbacks, and using your alumni community to accelerate career growth. Whether you’re considering a career switch or just starting out, you won’t want to miss these valuable insights.",
  },
  {
    src: Video5,
    description: "In this heartwarming video, alumni reflect on the importance of giving back to their university through mentorship programs. Hear how they help guide the next generation of students and recent graduates, sharing advice and offering support in everything from career advice to personal development. This video showcases how alumni can make a lasting impact on their communities.",
  },
  {
    src: Video6,
    description: "Watch inspiring stories from alumni who have turned their passions into successful careers. From entrepreneurship to leadership roles in major corporations, these stories highlight the diverse paths alumni have taken to achieve extraordinary success. Get motivated by real-life examples of how alumni are shaping industries and making a difference in the world.",
  },
];

const RadioPage = () => {
  const [currentcardo, setCurrentcardo] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false); // Manage text visibility
  const [hoveredcardo, setHoveredcardo] = useState(null); // Track hovered cardo
  const cardoWrapperRef = useRef();  
  const [activePlayercardo, setActivePlayercardo] = useState(null); // Track cardo with active audio player
  const [animationClass, setAnimationClass] = useState(""); // Track animation
  const [audioProgress, setAudioProgress] = useState(0); // Track the progress of audio
  const [audioDuration, setAudioDuration] = useState(0); // Track the duration of audio
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRefs = useRef({}); // Store references to all audio elements

  // Handle play button click for audio
  const handlePlayButtonClick = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle close player
  const handleClosePlayer = () => {
    setAnimationClass("fade-out"); // Trigger fade-out animation
    setTimeout(() => {
      setActivePlayercardo(null); // Remove audio player after animation ends
      setAnimationClass(""); // Reset animation class
    }, 300); // Match animation duration
  };

  // Handle forward button click (10 seconds forward)
  const handleForwardButtonClick = (id) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].currentTime += 10;
    }
  };

  // Handle back button click (10 seconds backward)
  const handleBackButtonClick = (id) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].currentTime -= 10;
    }
  };

  // Update audio progress and duration on timeupdate
  const handleTimeUpdate = (id) => {
    if (audioRefs.current[id]) {
      setAudioProgress(audioRefs.current[id].currentTime);
      setAudioDuration(audioRefs.current[id].duration);
    }
  };

  const handleSeek = (e, id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      const progressBar = e.target.getBoundingClientRect();
      const clickX = e.clientX - progressBar.left;
      const newTime = (clickX / progressBar.width) * audio.duration;
      audio.currentTime = newTime;
      setAudioProgress(newTime);
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    if (hours > 0) {
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const cardos = [
    { 
      id: 1, 
      title: "Dr Linda Mayer", 
      talks: "Guidance for career success", 
      hostedBy: "Zenzo Matiza", 
      image: cardoImage1,
      description: "On the Ground Breaker Show this past Wednesday...",
      description2: "We took a deep dive into diverse fields of study with Plug-A-Graduate, hosted by Polelo N Madisa. Listeners joined us from 7 pm to 9 pm, gaining valuable insights from special guest Dr. Linda Mayer, Managing Director at IIE Rosebank College. It was an enlightening evening packed with inspiration and expert advice for graduates and aspiring professionals alike!",
      date: "2 October 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio1,
    },
    { 
      id: 2, 
      title: "Mrs Nokuthula Makhanya", 
      talks: "Educational strategies", 
      hostedBy: "Mbali Mbele", 
      image: cardoImage2,
      description: "Last night on the Ground Breaker Show...",
      description2: "PLUG-A-GRADUATE with Polelo N Madisa featured a captivating segment from 19:00 to 21:00. The spotlight was on Nokuthula Makhanya, Managing Director at NPM Consulting (PTY) LTD, as she shared invaluable insights on how to break into the job market. With a deep commitment to professional integrity.",
      date: "5 October 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio2,
    },
    { 
      id: 3, 
      title: "Mr Oupa Segalwe", 
      talks: "Biography", 
      hostedBy: "Galaletsang Shadi", 
      image: cardoImage3,
      description: "Earlier, on PLUG-A-GRADUATE...",
      description2: "Polelo N Madisa on the Ground Breaker, featuring his guest, Oupa Segalwe, the Head of Communication and Stakeholder Relations at the South African Weather Service. Mr. Segalwe shared insights from his new book, Lucas Mangope: A Life – Unpacking the Biography and the Journey to Publication.",
      date: "12 October 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio3,
    },
    { 
      id: 4, 
      title: "Mr Obakeng Aubrey Moeketsi", 
      talks: "Industry experts share insights", 
      hostedBy: "Mathekga Senyolo", 
      image: cardoImage4,
      description: "Earlier this month, listeners tuned in for a special live broadcast...",
      description2: "The popular weekly show, Plug-A-Graduate, hosted by Obakeng Aubrey Moeketsi, straight from the Tshwane University of Technology Pretoria Campus on Friday, June 7th. On TUT FM 96.2, we brought you a dynamic event with industry experts and seasoned entrepreneurs.",
      date: "03 November 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio4,
    },
    { 
      id: 5, 
      title: "Mrs Reabetswe Dire", 
      talks: "Turning knowledge into income", 
      hostedBy: "Obakeng Mooketsi", 
      image: cardoImage5,
      description: "Earlier on today’s insightful episode of Plug-A-Graduate...",
      description2: "The Ground Breaker Show, hosted Obakeng Mooketsi, also known as OBK, had the pleasure of welcoming Reabetswe Dire, the CEO of Edenvinne. They dove deep into how to transform your academic knowledge into a source of income.",
      date: "19 November 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio5,
    },
    { 
      id: 6, 
      title: "Mrs Shalate Davhana", 
      talks: "Crime Protection", 
      hostedBy: "Khuthadzo Tshianzi", 
      image: cardoImage6,
      description: "The show discussed how it became a game-changer for recent graduates...",
      description2: "Seasoned job seekers, and aspiring entrepreneurs navigating the competitive job market. In our pilot episode, we welcomed esteemed guests: Mrs. Kedibone Mahapa, TUT FM 96.2 Station Manager; Dr. Roelien Brink, Director of Cooperative Education.",
      date: "15 November 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio6,
    },
  ];

  const cardos2 = [
    { 
      id: 1, 
      title: "Mr Mashitishi Benson Phurutsi", 
      talks: "Website Projects", 
      hostedBy: "Tshiamo Matiza", 
      image: cardoImage7,
      description: "On the Ground Breaker Show this past Wednesday...",
      description2: "We took a deep dive into diverse fields of study with Plug-A-Graduate, hosted by Polelo N Madisa. Listeners joined us from 7 pm to 9 pm, gaining valuable insights from special guest Dr. Linda Mayer, Managing Director at IIE Rosebank College. It was an enlightening evening packed with inspiration and expert advice for graduates and aspiring professionals alike!",
      date: "2 October 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio1,
    },
    { 
      id: 2, 
      title: "Mrs Phumla Nonkululeko Msibi", 
      talks: "Academic Excellence Awards", 
      hostedBy: "Mbali Mbele", 
      image: cardoImage8,
      description: "Last night on the Ground Breaker Show...",
      description2: "PLUG-A-GRADUATE with Polelo N Madisa featured a captivating segment from 19:00 to 21:00. The spotlight was on Nokuthula Makhanya, Managing Director at NPM Consulting (PTY) LTD, as she shared invaluable insights on how to break into the job market. With a deep commitment to professional integrity.",
      date: "5 October 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio2,
    },
    { 
      id: 3, 
      title: "Mrs Phaphama Tshisikhawe", 
      talks: "Academic Tutors", 
      hostedBy: "Galaletsang Shadi", 
      image: cardoImage9,
      description: "Earlier, on PLUG-A-GRADUATE...",
      description2: "Polelo N Madisa on the Ground Breaker, featuring his guest, Oupa Segalwe, the Head of Communication and Stakeholder Relations at the South African Weather Service. Mr. Segalwe shared insights from his new book, Lucas Mangope: A Life – Unpacking the Biography and the Journey to Publication.",
      date: "12 October 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio3,
    },
    { 
      id: 4, 
      title: "Dr Eric Pule", 
      talks: "Talks Alumni Space", 
      hostedBy: "Mathekga Senyolo", 
      image: cardoImage10,
      description: "Earlier this month, listeners tuned in for a special live broadcast...",
      description2: "The popular weekly show, Plug-A-Graduate, hosted by Obakeng Aubrey Moeketsi, straight from the Tshwane University of Technology Pretoria Campus on Friday, June 7th. On TUT FM 96.2, we brought you a dynamic event with industry experts and seasoned entrepreneurs.",
      date: "03 November 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio4,
    },
    { 
      id: 5, 
      title: "Mr Pearl Thulani Ngathi", 
      talks: "Sports Management Opportunities", 
      hostedBy: "Obakeng Mooketsi", 
      image: cardoImage11,
      description: "Earlier on today’s insightful episode of Plug-A-Graduate...",
      description2: "The Ground Breaker Show, hosted Obakeng Mooketsi, also known as OBK, had the pleasure of welcoming Reabetswe Dire, the CEO of Edenvinne. They dove deep into how to transform your academic knowledge into a source of income.",
      date: "19 November 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio5,
    },
    { 
      id: 6, 
      title: "Mrs Hapiness Thema", 
      talks: "Arts Making Money", 
      hostedBy: "Khuthadzo Tshianzi", 
      image: cardoImage12,
      description: "The show discussed how it became a game-changer for recent graduates...",
      description2: "Seasoned job seekers, and aspiring entrepreneurs navigating the competitive job market. In our pilot episode, we welcomed esteemed guests: Mrs. Kedibone Mahapa, TUT FM 96.2 Station Manager; Dr. Roelien Brink, Director of Cooperative Education.",
      date: "15 November 2024",
      location: "Pretoria, Soshanguve",
      audioSrc: Audio6,
    },
  ];

  const handleNext = () => {
    setCurrentcardo((prev) => (prev + 1) % cardos.length);
    setDragDistance(0);
  };

  const handlePrev = () => {
    setCurrentcardo((prev) => (prev - 1 + cardos.length) % cardos.length);
    setDragDistance(0);
  };

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX); // Track initial cursor/touch position
    setDragDistance(0); // Reset drag distance
  };

  const handleDragMove = (e) => {
    if (dragStartX !== null) {
      const currentX = e.clientX || e.touches[0].clientX;
      setDragDistance(currentX - dragStartX); // Update drag distance
    }
  };

  const handleDragEnd = () => {
    if (dragDistance > 50) {
      // Swipe right
      handlePrev();
    } else if (dragDistance < -50) {
      // Swipe left
      handleNext();
    }
    setDragDistance(0); // Reset drag distance after swipe
    setDragStartX(null);
  };

  const toggleTextVisibility = () => {
    setIsTextVisible((prev) => !prev); // Toggle the visibility of the text
  };

  const handleMouseEnter = (id) => {
    setHoveredcardo(id); // Set hovered cardo
  };

  const handleMouseLeave = () => {
    setHoveredcardo(null); // Reset hovered cardo
  };

  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
// Play the current video when it becomes active
useEffect(() => {
  videoRefs.current.forEach((video, index) => {
    if (video) {
      if (index === currentVideoIndex) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0; // Reset other videos
      }
    }
  });
}, [currentVideoIndex]);

// Change to the next video every 10 seconds
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  }, 10000);

  return () => clearInterval(timer);
}, []);

const handleVideoHover = (isHovering) => {
  setIsHovered(isHovering);
};


const goToNextSlide = () => {
  setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoData.length);
};

const goToPreviousSlide = () => {
  setCurrentVideoIndex((prevIndex) =>
    prevIndex === 0 ? videoData.length - 1 : prevIndex - 1
  );
};

const handleIndicatorClick = (index) => {
  setCurrentVideoIndex(index);
};

  return (
    <div className="radio-page">
      {/* Divider Photo 1 */}
      <div style={{ width: "100vw", height: "65vh", overflow: "hidden" , marginTop:"30px"}}>
      <div className="pod-body">
        <header className="pod-header1">
          <div className="pod-inner-header pod-flex">

              <i class="fas fa-plug pod-logo"></i>

            <h1 className="pod-h1">Plug an Alumni</h1>
          </div>
          <div>
            <svg
              className="pod-waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="pod-parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </header>
        <div className="pod-area">
          <ul className="pod-circles">
            {[...Array(10)].map((_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>

      {/* Text Section */}
      <div className="text-section">
        <h2>What is Plug an Alumni?</h2>
        <p>
          Plug an Alumni is the space to catch up with inspiring voices from our
          TUT alumni! Here, you'll find both podcast and radio recordings where
          graduates share their experiences, insights, and achievements. In the
          Podcasts section, explore in-depth interviews and discussions, while
          the Radio Recordings section offers highlights and memorable moments
          from live broadcasts on TUT FM. It's your go-to spot for staying
          connected and motivated by the journeys of those who have walked the
          path before you!
        </p>
      </div>

      <div style={{ width: "100vw", height: "65vh", overflow: "hidden" }}>
      <div className="pod-body">
        <header className="pod-header2">
          <div className="pod-inner-header pod-flex">
          
            {/* <i class="fa-solid fa-briefcase pod-logo"></i> */}

            <h1 className="pod-h1">Plug a Graduate</h1>
          </div>
          <div>
            <svg
              className="pod-waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="pod-parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </header>
        <div className="pod-area">
          <ul className="pod-circles">
            {[...Array(10)].map((_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>

      {/* Text Section 2 */}
      <div className="text-section1">
        <div className="info-icon-container">
          <button
            className="info-icon"
            onClick={toggleTextVisibility} // Toggle text visibility when clicked
            data-tooltip= "What is Plug a Graduate all about?"
          >
           <FontAwesomeIcon icon={faChevronDown} className="chevron-icon"/> About Section
          </button>
        </div>
        <div className="isTextVisible-container">
        <div
          className={`text-content ${isTextVisible ? "show" : "hide"}`} // Add smooth transition classes
        >
          <h2>What is Plug a Graduate all about?</h2>
          <p>
            <b>Plug a Graduate</b> is the space to catch up with inspiring voices from our
            TUT alumni! Here, you'll find both podcast and radio recordings where
            graduates share their experiences, insights, and achievements. In the
            Podcasts section, explore in-depth interviews and discussions, while
            the Radio Recordings section offers highlights and memorable moments
            from live broadcasts on TUT FM. It's your go-to spot for staying
            connected and motivated by the journeys of those who have walked the
            path before you!
          </p>
        </div>
        </div>

      </div>

      {/* cardo Section */}
      <div
        className="cardo-section"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
<div className="cardo-wrapper" ref={cardoWrapperRef}>
  {cardos.map((cardo, index) => (
    <div
      key={cardo.id}
      className={`cardo ${index === currentcardo ? "active" : ""}`}
      style={{
        transform: `translateX(${
          (index - currentcardo) * 120 + (index === currentcardo ? dragDistance / 5 : 0)
        }%)`,
        opacity: index === currentcardo ? 1 : 0.5,
      }}
      onMouseEnter={() => handleMouseEnter(cardo.id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cardo-image-container">
        <img
          src={cardo.image}
          alt={cardo.title}
          className="cardo-image"
        />
      </div>

      <h3 className="person-name">{cardo.title}</h3>
      <p className="position">
        (<b>Talks:</b> {cardo.talks})
      </p>
      <p className="position2">
        <span className="hostedby"><b>Hosted By: </b></span>{cardo.hostedBy}
      </p>

      {hoveredcardo === cardo.id && (
  <div className="cardo-hover">
    {activePlayercardo === cardo.id ? ( // Only show the audio player if this cardo is active
      <div className={`audio-player ${animationClass}`}>
        <div className="audio-player-header">
       

        <a href="https://tutfm962.co.za/" target="_blank" rel="noopener noreferrer">
          <img src={TutLogo} alt="TUT Logo" className="tut-logo" />
        </a>
        <h3><span className="hc-np-1">Now Playing</span></h3>
    <button className="close-button" onClick={handleClosePlayer}>
      &times; {/* Close icon */}
    </button>
        </div>

          {/* Artist Image */}
        <div className="audio-player-artist-image-container">
            {hoveredcardo && (
            <img
                src={cardos.find((cardo) => cardo.id === hoveredcardo)?.image}
                alt="Artist"
                className="audio-player-artist-image"
            />
            )}
        </div>

            {/* Audio Player */}
            {activePlayercardo === cardo.id && (
                <div className="audio-player1">
                        <div className="audio-player-song-info">
                        <h3><span className="hc-np-1">{cardo.title}</span></h3>
                        <p><span className="hc-np-1"><b>Talks:</b> {cardo.talks}</span></p>
                        </div>
                  <audio
                    ref={(ref) => (audioRefs.current[activePlayercardo] = ref)}
                    src={cardo.audioSrc}
                    onTimeUpdate={() => handleTimeUpdate(activePlayercardo)}
                    onEnded={() => setIsPlaying(false)}
                    />

                    <div className="progress-bar" onClick={(e) => handleSeek(e, activePlayercardo)}>
                      <div
                        className="progress"
                        style={{ width: `${(audioProgress / audioDuration) * 100}%` }}
                      ></div>
                    </div>
                    <div className="time-info">
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    <div className="controls">
                      <button onClick={() => handleBackButtonClick(activePlayercardo)}>
                        <FontAwesomeIcon icon={faBackward} />
                      </button>
                      <button onClick={() => handlePlayButtonClick(activePlayercardo)}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                      </button>
                      <button onClick={() => handleForwardButtonClick(activePlayercardo)}>
                        <FontAwesomeIcon icon={faForward} />
                      </button>
                    </div>
                </div>
              )}
      </div>
    ) : (
      <div className="cardo-details">
        <p><strong className="hc-para1">{cardo.title}</strong></p>
        <p><strong className="hc-para2">{cardo.description}</strong></p>
        <p><strong className="hc-para4">{cardo.description2}</strong></p>
        <p><strong className="hc-para3"><b>Date:</b> {cardo.date}</strong></p>
        <p><strong className="hc-para3"><b>Location:</b> {cardo.location}</strong></p>
        <div className="play-button-container">
          <button
            className="play-button"
            onClick={() => {
              setActivePlayercardo(cardo.id);
              setAnimationClass("fade-in"); // Trigger fade-in animation
            }}
          >
            <i className="bi bi-play-fill"></i>
          </button>
        </div>
      </div>
    )}
  </div>
)}



    </div>
  ))}
</div>


        {/* Navigation Buttons */}
        <div className="cardo-navigation">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>

      <div style={{ width: "100vw", height: "65vh", overflow: "hidden" }}>
      <div className="pod-body">
        <header className="pod-header1">
          <div className="pod-inner-header pod-flex">
          
            <h1 className="pod-h1">Catch Up With an Alumni</h1>
          </div>
          <div>
            <svg
              className="pod-waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="pod-parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </header>
        <div className="pod-area">
          <ul className="pod-circles">
            {[...Array(10)].map((_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>

      {/* Text Section 2 */}
      <div className="text-section1">
        <div className="info-icon-container">
          <button
            className="info-icon"
            onClick={toggleTextVisibility} // Toggle text visibility when clicked
            data-tooltip= "What is Catch Up With an Alumni all about?"
          >
           <FontAwesomeIcon icon={faChevronDown} className="chevron-icon"/> About Section
          </button>
          
        </div>
        <div className="isTextVisible-container">
        <div
          className={`text-content ${isTextVisible ? "show" : "hide"}`} // Add smooth transition classes
        >
          <h2>What is Catch Up With an Alumni all about?</h2>
          <p>
            <b>Catch Up with an Alumni</b> is your gateway to reconnecting with inspiring voices from <b>TUT alumni</b>! This platform brings you <i>podcasts</i> and <i>radio recordings</i> where graduates share their unique experiences, valuable insights, and remarkable achievements. In the <b>Podcasts</b> section, dive into engaging conversations and stories that offer a deeper look into their journeys, while the <b>Radio Recordings</b> section features highlights and memorable snippets from live broadcasts on <b>TUT FM</b>. Whether you're seeking <i>motivation</i>, <i>guidance</i>, or a sense of connection, <b>Catch Up with an Alumni</b> is the perfect place to celebrate and learn from the paths paved by those who came before you!
          </p>

        </div>
        </div>

      </div>

      {/* cardo Section */}
      <div
        className="cardo-section"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
<div className="cardo-wrapper" ref={cardoWrapperRef}>
  {cardos2.map((cardo, index) => (
    <div
      key={cardo.id}
      className={`cardo ${index === currentcardo ? "active" : ""}`}
      style={{
        transform: `translateX(${
          (index - currentcardo) * 120 + (index === currentcardo ? dragDistance / 5 : 0)
        }%)`,
        opacity: index === currentcardo ? 1 : 0.5,
      }}
      onMouseEnter={() => handleMouseEnter(cardo.id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cardo-image-container">
        <img
          src={cardo.image}
          alt={cardo.title}
          className="cardo-image"
        />
      </div>

      <h3 className="person-name">{cardo.title}</h3>
      <p className="position">
        (<b>Talks:</b> {cardo.talks})
      </p>
      <p className="position2">
        <span className="hostedby"><b>Hosted By: </b></span>{cardo.hostedBy}
      </p>

      {hoveredcardo === cardo.id && (
  <div className="cardo-hover">
    {activePlayercardo === cardo.id ? ( // Only show the audio player if this cardo is active
      <div className={`audio-player ${animationClass}`}>
        <div className="audio-player-header">
       

        <a href="https://tutfm962.co.za/" target="_blank" rel="noopener noreferrer">
          <img src={TutLogo} alt="TUT Logo" className="tut-logo" />
        </a>
        <h3><span className="hc-np-1">Now Playing</span></h3>
    <button className="close-button" onClick={handleClosePlayer}>
      &times; {/* Close icon */}
    </button>
        </div>

          {/* Artist Image */}
        <div className="audio-player-artist-image-container">
            {hoveredcardo && (
            <img
                src={cardos2.find((cardo) => cardo.id === hoveredcardo)?.image}
                alt="Artist"
                className="audio-player-artist-image"
            />
            )}
        </div>

            {/* Audio Player */}
            {activePlayercardo === cardo.id && (
                <div className="audio-player1">
                        <div className="audio-player-song-info">
                        <h3><span className="hc-np-1">{cardo.title}</span></h3>
                        <p><span className="hc-np-1"><b>Talks:</b> {cardo.talks}</span></p>
                        </div>
                  <audio
                    ref={(ref) => (audioRefs.current[activePlayercardo] = ref)}
                    src={cardo.audioSrc}
                    onTimeUpdate={() => handleTimeUpdate(activePlayercardo)}
                    onEnded={() => setIsPlaying(false)}
                    />

                    <div className="progress-bar" onClick={(e) => handleSeek(e, activePlayercardo)}>
                      <div
                        className="progress"
                        style={{ width: `${(audioProgress / audioDuration) * 100}%` }}
                      ></div>
                    </div>
                    <div className="time-info">
                      <span>{formatTime(audioProgress)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                    <div className="controls">
                      <button onClick={() => handleBackButtonClick(activePlayercardo)}>
                        <FontAwesomeIcon icon={faBackward} />
                      </button>
                      <button onClick={() => handlePlayButtonClick(activePlayercardo)}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                      </button>
                      <button onClick={() => handleForwardButtonClick(activePlayercardo)}>
                        <FontAwesomeIcon icon={faForward} />
                      </button>
                    </div>
                </div>
              )}
      </div>
    ) : (
      <div className="cardo-details">
        <p><strong className="hc-para1">{cardo.title}</strong></p>
        <p><strong className="hc-para2">{cardo.description}</strong></p>
        <p><strong className="hc-para4">{cardo.description2}</strong></p>
        <p><strong className="hc-para3"><b>Date:</b> {cardo.date}</strong></p>
        <p><strong className="hc-para3"><b>Location:</b> {cardo.location}</strong></p>
        <div className="play-button-container">
          <button
            className="play-button"
            onClick={() => {
              setActivePlayercardo(cardo.id);
              setAnimationClass("fade-in"); // Trigger fade-in animation
            }}
          >
            <i className="bi bi-play-fill"></i>
          </button>
        </div>
      </div>
    )}
  </div>
)}
    </div>
  ))}
</div>
        {/* Navigation Buttons */}
        <div className="cardo-navigation">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>

      <div style={{ width: "100vw", height: "65vh", overflow: "hidden" }}>
      <div className="pod-body">
        <header className="pod-header1">
          <div className="pod-inner-header pod-flex">
           
            <h1 className="pod-h1">Videos for an Alumni</h1>
          </div>
          <div>
            <svg
              className="pod-waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="pod-parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </header>
        <div className="pod-area">
          <ul className="pod-circles">
            {[...Array(10)].map((_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>

      {/* Text Section 3 */}
      <div className="text-section1">
        <div className="info-icon-container">
          <button
            className="info-icon"
            onClick={toggleTextVisibility} // Toggle text visibility when clicked
           data-tooltip= "What is Videos for an Alumni all about?"
          >
           <FontAwesomeIcon icon={faChevronDown} className="chevron-icon"/> About Section
          </button>
          
        </div>
        <div className="isTextVisible-container">
        <div
          className={`text-content ${isTextVisible ? "show" : "hide"}`} // Add smooth transition classes
        >
          <h2>What is Videos for an Alumni all about?</h2>
          <p>
            <b>Videos for an Alumni</b> is your gateway to reconnecting with inspiring voices from <b>TUT alumni</b>! This platform brings you <i>podcasts</i> and <i>radio recordings</i> where graduates share their unique experiences, valuable insights, and remarkable achievements. In the <b>Podcasts</b> section, dive into engaging conversations and stories that offer a deeper look into their journeys, while the <b>Radio Recordings</b> section features highlights and memorable snippets from live broadcasts on <b>TUT FM</b>. Whether you're seeking <i>motivation</i>, <i>guidance</i>, or a sense of connection, <b>Catch Up with an Alumni</b> is the perfect place to celebrate and learn from the paths paved by those who came before you!
          </p>

        </div>
        </div>

      </div>

      <div
        className="video-container1"
        onMouseEnter={() => handleVideoHover(true)}
        onMouseLeave={() => handleVideoHover(false)}
      >
        {videoData.map((video, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.src}
            className={`short-video ${index === currentVideoIndex ? "active" : ""} ${isHovered ? "blurred" : ""}`}
            muted
            loop
          />
        ))}

        {isHovered && (
          <div className="overlay">
           
            <div className="overlay-content">
              <div> <p>{videoData[currentVideoIndex].description}</p></div>
              <button
                className="view-full-video-btn"
                onClick={() => window.open('https://www.youtube.com/watch?v=csquC7HfazE&t=2s', '_blank')}
              >
                <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" /> View Full Video
              </button>
            </div>
          </div>
        )}

      </div>

           {/* Navigation Buttons */}
           <div className="navigation-buttons">
        <button className="nav-button prev" onClick={goToPreviousSlide}>
          &#8592; Previous
        </button>
        <button className="nav-button next" onClick={goToNextSlide}>
          Next &#8594;
        </button>
      </div>

      {/* Video Indicators */}
      <div className="video-indicators">
        {videoData.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentVideoIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

<Footer />
    </div>
  );
};

export default RadioPage;
