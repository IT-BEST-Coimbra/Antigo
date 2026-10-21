const slideTrack = document.querySelector('.slide-track');
const slides = slideTrack.querySelectorAll('.slide');
const numSlides = slides.length;
const slideWidth = 250;
const numSlidesToDuplicate = 14 - numSlides + 1;

if (numSlides < 14) {
  for (let i = 0; i < numSlidesToDuplicate; i++) {
    const duplicateSlide = slides[i % numSlides].cloneNode(true);
    slideTrack.appendChild(duplicateSlide);
  }
}

slideTrack.style.width = `${slideWidth * 14}px`;
