const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-links");
const navLinks = document.querySelectorAll(".nav-link");
const programs = document.querySelector(".programs");
const clicked = document.querySelectorAll(".read-more-btn");
const firstText = document.querySelectorAll(".first-text");
const secondText = document.querySelectorAll(".second-text");
const programsContainer = document.querySelector(".programs-page");
const btnBackTop = document.querySelector(".btn-back-to-top");

// event listeners
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

btnBackTop?.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);

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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    btnBackTop.style.display = "block";
  } else {
    btnBackTop.style.display = "none";
  }
}
