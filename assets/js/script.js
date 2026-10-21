(function () {
  "use strict";
  //===== Prealoder =====
  var loader = document.querySelector(".loader");
  window.addEventListener("load", vanish);
  function vanish() {
    loader.classList.add("disappear");
  }
})();
const navbarPhone = document.querySelector(".options-phone");
const optionsPhone = document.querySelectorAll(".nav-option2");

function showLanguageOptions() {
  var languageOptions = document.getElementById("languageOptions");
  if (languageOptions.style.display === "none") {
    languageOptions.style.display = "block";
  } else {
    languageOptions.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      quote:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”",
      author: "Hugo Teixeira",
      membership: "BEST Coimbra Alumnus Member",
    },
    {
      quote:
        "“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
      author: "Maria Silva",
      membership: "BEST Porto Member",
    },
    {
      quote:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”",
      author: "João Pereira",
      membership: "BEST Lisbon Coordinator",
    },
    {
      quote:
        "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”",
      author: "Ana Costa",
      membership: "BEST Braga Organizer",
    },
    {
      quote:
        "“Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.”",
      author: "Rui Fernandes",
      membership: "BEST Aveiro Alumnus",
    },
  ];

  let currentIndex = 0;

  const quoteElement = document.querySelector(".quote");
  const authorElement = document.querySelector(".author");
  const membershipElement = document.querySelector(".membership");
  const dots = document.querySelectorAll(".dot");

  function updateTestimonial(index) {
    quoteElement.textContent = testimonials[index].quote;
    authorElement.textContent = testimonials[index].author;
    membershipElement.textContent = testimonials[index].membership;

    // Update dots
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
  });

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
  });

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Initialize first testimonial
  updateTestimonial(currentIndex);
});
