document.addEventListener('DOMContentLoaded', function() {
  // Apply the fade-in effect on page load
  document.body.classList.add('fade-in');

  // Find the anchor with the specific class
  const smoothScrollLink = document.querySelector('.d-none.d-lg-block a.smoothscroll');

  if (smoothScrollLink) {
    smoothScrollLink.addEventListener('click', function(event) {
      event.preventDefault();

      // Fade out the current page
      document.body.classList.remove('fade-in');
      document.body.style.transition = 'opacity 1s ease-in-out';
      document.body.style.opacity = 0;

      // Navigate to the next page after the fade-out effect
      setTimeout(function() {
        window.location.href = smoothScrollLink.href;
      }, 1000); // Match this with the transition duration
    });
  }

  // Handle sticky navbar
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust this value as needed
      navbar.classList.add('is-sticky');
    } else {
      navbar.classList.remove('is-sticky');
    }
  });
});

