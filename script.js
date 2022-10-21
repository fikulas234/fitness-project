const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-links");
const navLinks = document.querySelectorAll(".nav-link");
const programs = document.querySelector(".programs");
const clicked = document.querySelectorAll(".read-more-btn");
const firstText = document.querySelectorAll(".first-text");
const secondText = document.querySelectorAll(".second-text");
const programsContainer = document.querySelector(".programs-page");

// event listeners
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// functions

programsContainer?.addEventListener("click", function (e) {
  const clicked = e.target.closest(".read-more-btn");
  if (!clicked) return;

  // Show more text
  const btns = document.querySelectorAll(`.program-${clicked.dataset.btn}`);
  btns.forEach(function (btn) {
    btn.classList.toggle("show");
  });

  // Changing btn text to read more or read less
  if (clicked.innerText === "Pročitaj više") {
    clicked.innerText = "Pročitaj manje";
  } else {
    clicked.innerText = "Pročitaj više";
  }
});

navLinks.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

new Swiper(".swiper", {
  // slidesPerView: 3,
  // centeredSlides: true,
  // spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".right-arrow",
    prevEl: ".left-arrow",
  },

  breakpoints: {
    400: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});
