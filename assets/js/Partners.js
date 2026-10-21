document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? "flex" : "none";
      dots[i].classList.toggle("active", i === index);
    });
  }

  document.querySelector(".prev").addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    showItem(currentIndex);
  });

  document.querySelector(".next").addEventListener("click", function () {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    showItem(currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      showItem(currentIndex);
    });
  });

  showItem(currentIndex);
});

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
      membership: "LOOP",
    },
    {
      quote:
        "“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
      author: "Maria Silva",
      membership: "BORDER",
    },
    {
      quote:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”",
      author: "João Pereira",
      membership: "AFAPLAN",
    },
    {
      quote:
        "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”",
      author: "Ana Costa",
      membership: "FFONSECA",
    },
    {
      quote:
        "“Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.”",
      author: "Rui Fernandes",
      membership: "ACCENTURE",
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

// Get the carousel elements
const carousel1 = document.querySelector(".carousel1");
const carouselInner1 = document.querySelector(".carousel1-inner");
const carouselItems1 = document.querySelectorAll(".carousel1-item");
const carouselDots1 = document.querySelectorAll(".carousel1-dot");

// Set the current carousel item index
let currentIndex = 0;

// Show the first carousel item
carouselItems1[currentIndex].style.display = "block";
carouselDots1[currentIndex].classList.add("active");

// Add event listeners to the carousel dots
carouselDots1.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(autoSwitchTimer); // Clear the timer
    currentIndex = index;
    updateCarousel1(false); // Pass false to disable animation
    autoSwitchTimer = setInterval(() => {
      // Reset the timer
      currentIndex = (currentIndex + 1) % carouselItems1.length;
      updateCarousel1(true); // Pass true to enable animation
    }, 7500); // 10 seconds
  });
});

// Update the carousel items display
function updateCarousel1(animate) {
  carouselItems1.forEach((item) => {
    item.style.display = "none";
    item.classList.remove("animate-in");
    item.classList.remove("animate-out");
    item.classList.remove("slide-in");
  });
  const currentItem = carouselItems1[currentIndex];
  const previousItem =
    carouselItems1[
      (currentIndex - 1 + carouselItems1.length) % carouselItems1.length
    ];
  if (animate) {
    previousItem.style.display = "block";
    previousItem.classList.add("animate-out");
    setTimeout(() => {
      previousItem.style.display = "none";
      previousItem.classList.remove("animate-out");
      currentItem.style.display = "block";
      currentItem.classList.add("slide-in");
      setTimeout(() => {
        currentItem.classList.remove("slide-in");
      }, 500); // 0.5 seconds
    }, 500); // 0.5 seconds
  } else {
    previousItem.style.display = "none";
    currentItem.style.display = "block";
  }
  carouselDots1.forEach((dot) => {
    dot.classList.remove("active");
  });
  carouselDots1[currentIndex].classList.add("active");
}

// Auto-switch images every 10 seconds
let autoSwitchTimer = setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems1.length;
  updateCarousel1(true); // Pass true to enable animation
}, 7500); // 10 seconds
