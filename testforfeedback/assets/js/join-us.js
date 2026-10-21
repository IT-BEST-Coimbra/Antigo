let currentIndex = 0;
let currentCountry = "valencia";
const images = document.querySelectorAll(".join-us-carousel-images img");
const dots = document.querySelectorAll(
  ".join-us-carousel-indicators .join-us-dot"
);

document.querySelector(".join-us-prev").addEventListener("click", () => {
  showImage(currentIndex - 1);
});

document.querySelector(".join-us-next").addEventListener("click", () => {
  showImage(currentIndex + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showImage(index);
  });
});

function showImage(index) {
  const countryImages = Array.from(images).filter((img) =>
    img.classList.contains(currentCountry)
  );
  if (index < 0) {
    index = countryImages.length - 1;
  } else if (index >= countryImages.length) {
    index = 0;
  }

  countryImages[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");
  countryImages[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;
}

function changeCarousel(country) {
  currentCountry = country;
  currentIndex = 0;

  images.forEach((img) => {
    img.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  const countryImages = Array.from(images).filter((img) =>
    img.classList.contains(currentCountry)
  );
  if (countryImages.length > 0) {
    countryImages[0].classList.add("active");
    dots[0].classList.add("active");
  }
}

// Event listeners for map pins
document
  .querySelector(".join-us-pin-1")
  .addEventListener("click", () => changeCarousel("valencia"));
document
  .querySelector(".join-us-pin-2")
  .addEventListener("click", () => changeCarousel("belgica"));
document
  .querySelector(".join-us-pin-3")
  .addEventListener("click", () => changeCarousel("athenas"));
document
  .querySelector(".join-us-pin-4")
  .addEventListener("click", () => changeCarousel("grenoble"));
document
  .querySelector(".join-us-pin-5")
  .addEventListener("click", () => changeCarousel("torino"));
