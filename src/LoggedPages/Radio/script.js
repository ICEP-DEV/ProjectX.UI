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

  slides.forEach(slide => {
    const textElement = document.createElement('div');
    textElement.classList.add('tranding-slide-text');
    textElement.style.zIndex = '6';
    textElement.innerHTML = `
      <b>Dr. Tshiamo Matiza’s 3rd Annual Legacy Lecture</b> - <b>Freedom Park, Pretoria – 11 October 2024</b><br><br>
      On October 11, Dr. Tlou Cholo, renowned anti-apartheid activist, delivered his 3rd Annual Legacy Lecture, reflecting on his work in justice and workers' rights. The lecture, blending humor and insight, inspired future generations to continue the fight for equality.<br><br>
      <b>11 OCT • ENGLISH • SOUTH AFRICA • COMEDY INTERVIEWS</b>
    `;
    slide.appendChild(textElement);

    const playButton = slide.querySelector('.play-button');
    const playButtonContainer = slide.querySelector('.play-button-container');

    playButton.addEventListener('click', () => {
      playButtonContainer.style.display = 'none';
      textElement.style.display = 'none';

      // Create the audio element (replace with your actual path to audio file)
      const audio = new Audio('./radio podcast/Best of Oatile Jacob.mp3'); // Update the path to your audio file
      audio.load();

      // Create cancel button
      const cancelButton = document.createElement('ion-icon');
      cancelButton.name = "close-outline";
      cancelButton.classList.add('cancel-button');
      cancelButton.style.position = "absolute";
      cancelButton.style.top = "10px";
      cancelButton.style.left = "10px";
      slide.appendChild(cancelButton);

      // Create progress bar
      const progressBar = document.createElement('input');
      progressBar.type = 'range';
      progressBar.classList.add('progress-bar');
      progressBar.min = 0;
      progressBar.max = 100;
      progressBar.value = 0;

      // Create rotating image (update with your actual path to the image)
      const rotatingImage = document.createElement('img');
      rotatingImage.src = './radio photos/op.png';  // Path to the image
      rotatingImage.classList.add('rotating-image');  // This class will make the image rotate

      // Create control buttons (play/pause, skip, rewind)
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
      controlsContainer.appendChild(rewindButton);
      controlsContainer.appendChild(playPauseButton);
      controlsContainer.appendChild(skipButton);

      // Append controls to slide
      slide.appendChild(rotatingImage);
      slide.appendChild(progressBar);
      slide.appendChild(controlsContainer);

      // Play the audio and start the rotation
      audio.play();
      playPauseButton.name = 'pause-outline';
      rotatingImage.style.animationPlayState = 'running';

      // Add class to prevent background color change when audio is playing
      slide.classList.add('audio-playing');

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

      rewindButton.addEventListener('click', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
      });

      skipButton.addEventListener('click', () => {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
      });

      audio.addEventListener('timeupdate', () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      });

      progressBar.addEventListener('input', (event) => {
        const newTime = (event.target.value / 100) * audio.duration;
        audio.currentTime = newTime;
      });

      cancelButton.addEventListener('click', () => {
        playButtonContainer.style.display = 'block';
        textElement.style.display = 'block';
        rotatingImage.remove();
        progressBar.remove();
        controlsContainer.remove();
        cancelButton.remove();
        audio.pause();
        audio.currentTime = 0;
        slide.classList.remove('audio-playing');
      });
    });
  });
});


