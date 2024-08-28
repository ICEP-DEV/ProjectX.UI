document.addEventListener('DOMContentLoaded', () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const links = document.querySelectorAll('.transition-link');
  const loadingSpinner = document.getElementById('loading-spinner');

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Add fade-out effect on link click
  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.add("fade-out");
       loadingSpinner.style.display = "block";

      setTimeout(() => {
        window.location.href = link.href;
      }, 1000); // Match this time with the CSS transition duration
    });
  });
});
