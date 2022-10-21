const programs = document.querySelector(".programs");
const readMoreBtn = document.querySelectorAll(".read-more-btn");
const firstText = document.querySelectorAll(".first-text");
const secondText = document.querySelectorAll(".second-text");
const programsContainer = document.querySelector(".programs-page");

programsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".read-more-btn");
  if (!clicked) return;

  // Remove active classes
  /* secondText.forEach((c) => c.classList.remove("show")); */

  // Show more text
  document
    .querySelector(`.program-${clicked.dataset.btn}`)
    .classList.add("show");
});
