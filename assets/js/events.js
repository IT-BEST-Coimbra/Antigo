// Get the carousel elements
const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselDots = document.querySelectorAll(".carousel-dot");

// Set the current carousel item index
let currentIndex = 0;

// Show the first carousel item
carouselItems[currentIndex].style.display = "block";
carouselDots[currentIndex].classList.add("active");

// Add event listeners to the carousel dots
carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(autoSwitchTimer); // Clear the timer
    currentIndex = index;
    updateCarousel(false); // Pass false to disable animation
    autoSwitchTimer = setInterval(() => {
      // Reset the timer
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel(true); // Pass true to enable animation
    }, 7500); // 10 seconds
  });
});

// Update the carousel items display
function updateCarousel(animate) {
  carouselItems.forEach((item) => {
    item.style.display = "none";
    item.classList.remove("animate-in");
    item.classList.remove("animate-out");
    item.classList.remove("slide-in");
  });
  const currentItem = carouselItems[currentIndex];
  const previousItem =
    carouselItems[
      (currentIndex - 1 + carouselItems.length) % carouselItems.length
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
  carouselDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  carouselDots[currentIndex].classList.add("active");
}

// Auto-switch images every 10 seconds
let autoSwitchTimer = setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel(true); // Pass true to enable animation
}, 7500); // 10 seconds
