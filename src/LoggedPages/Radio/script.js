var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.swiper-slide.tranding-slide');
  
  // Define unique data for each slide
  const slideData = [
    {
      title: "Dr. Tshiamo Matiza’s 3rd Annual Legacy Lecture",
      description: "On October 11, Dr. Tlou Cholo, renowned anti-apartheid activist, delivered his 3rd Annual Legacy Lecture...",
      date: "11 October 2024",
      location: "Freedom Park, Pretoria",
      audioSrc: './radio podcast/Best of Oatile Jacob.mp3',
      imageSrc: './radio photos/op.png',
    },
    // Add data for other slides
    {
      title: "Slide 2 Title",
      description: "Description for Slide 2...",
      date: "Date for Slide 2",
      location: "Location for Slide 2",
      audioSrc: './radio podcast/slide2-audio.mp3',
      imageSrc: './radio photos/slide2-img.png',
    },
    // Repeat similar structure for additional slides
  ];

  slides.forEach((slide, index) => {
    const data = slideData[index % slideData.length]; // Cycle through slideData if slides > data items

    // Create and append the text element with unique content
    const textElement = document.createElement('div');
    textElement.classList.add('tranding-slide-text');
    textElement.style.zIndex = '6';
    textElement.innerHTML = `
      <b>${data.title}</b> - <b>${data.location} – ${data.date}</b><br><br>
      ${data.description}<br><br>
      <b>${data.date} • ENGLISH • SOUTH AFRICA • COMEDY INTERVIEWS</b>
    `;
    slide.appendChild(textElement);

    // Play button and other elements configuration
    const playButton = slide.querySelector('.play-button');
    const playButtonContainer = slide.querySelector('.play-button-container');

    playButton.addEventListener('click', () => {
      playButtonContainer.style.display = 'none';
      textElement.style.display = 'none';

      const audio = new Audio(data.audioSrc);
      audio.load();

      // Create rotating image, progress bar, and control buttons
      const rotatingImage = document.createElement('img');
      rotatingImage.src = data.imageSrc;
      rotatingImage.classList.add('rotating-image');

      const progressBar = document.createElement('input');
      progressBar.type = 'range';
      progressBar.classList.add('progress-bar');
      progressBar.min = 0;
      progressBar.max = 100;
      progressBar.value = 0;

      // Create time display elements
      const currentTimeDisplay = document.createElement('span');
      currentTimeDisplay.classList.add('current-time');
      currentTimeDisplay.textContent = "0:00";

      const durationDisplay = document.createElement('span');
      durationDisplay.classList.add('duration');
      durationDisplay.textContent = "0:00";

      const timeContainer = document.createElement('div');
      timeContainer.classList.add('time-container');
      timeContainer.appendChild(currentTimeDisplay);
      timeContainer.appendChild(durationDisplay);

      const playPauseButton = document.createElement('ion-icon');
      playPauseButton.name = 'pause-outline';
      playPauseButton.classList.add('play-pause-button');

      const skipButton = document.createElement('ion-icon');
      skipButton.name = 'play-forward-outline';
      skipButton.classList.add('skip-button');

      const rewindButton = document.createElement('ion-icon');
      rewindButton.name = 'play-back-outline';
      rewindButton.classList.add('rewind-button');

      const controlsContainer = document.createElement('div');
      controlsContainer.classList.add('controls-container');
      
      // Position buttons on either side of the play/pause button
      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('button-wrapper');
      buttonWrapper.appendChild(rewindButton);
      buttonWrapper.appendChild(playPauseButton);
      buttonWrapper.appendChild(skipButton);
      
      controlsContainer.appendChild(timeContainer);
      controlsContainer.appendChild(progressBar);
      controlsContainer.appendChild(buttonWrapper);

      slide.appendChild(rotatingImage);
      slide.appendChild(controlsContainer);

      audio.play();
      playPauseButton.name = 'pause-outline';
      rotatingImage.style.animationPlayState = 'running';

      // Update duration display when metadata is loaded
      audio.addEventListener('loadedmetadata', () => {
        const durationMinutes = Math.floor(audio.duration / 60);
        const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
        durationDisplay.textContent = `${durationMinutes}:${durationSeconds}`;
      });

      // Update current time and progress bar as the audio plays
      audio.addEventListener('timeupdate', () => {
        const currentMinutes = Math.floor(audio.currentTime / 60);
        const currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds}`;
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      });

      // Control progress bar interaction
      progressBar.addEventListener('input', (event) => {
        const newTime = (event.target.value / 100) * audio.duration;
        audio.currentTime = newTime;
      });

      // Control play/pause functionality
      playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
          audio.play();
          playPauseButton.name = 'pause-outline';
          rotatingImage.style.animationPlayState = 'running';
        } else {
          audio.pause();
          playPauseButton.name = 'play-outline';
          rotatingImage.style.animationPlayState = 'paused';
        }
      });

      // Control rewind and skip functionality
      rewindButton.addEventListener('click', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
      });

      skipButton.addEventListener('click', () => {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
      });

      // Cancel button to stop audio and reset elements
      const cancelButton = document.createElement('ion-icon');
      cancelButton.name = "close-outline";
      cancelButton.classList.add('cancel-button');
      cancelButton.style.position = "absolute";
      cancelButton.style.top = "10px";
      cancelButton.style.left = "10px";
      slide.appendChild(cancelButton);

      cancelButton.addEventListener('click', () => {
        playButtonContainer.style.display = 'block';
        textElement.style.display = 'block';
        rotatingImage.remove();
        controlsContainer.remove();
        cancelButton.remove();
        audio.pause();
        audio.currentTime = 0;
      });
    });
  });
});
