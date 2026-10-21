var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0; // Set initial opacity to 0
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
  fadeSlide(x[slideIndex[no] - 1]); // Call the fadeSlide function
}

function fadeSlide(element) {
  var op = 0; // Initial opacity
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
      setTimeout(function () {
        fadeOut(element);
      }, 4000); // Wait for 4 seconds before fading out
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")"; // For older IE
    op += 0.05; // Increment opacity (adjust this value to change the fade speed)
  }, 50); // Interval between opacity increments (adjust this value to change the fade speed)
}

function fadeOut(element) {
  var op = 1; // Initial opacity
  var timer = setInterval(function () {
    if (op <= 0.3) {
      clearInterval(timer);
      element.style.display = "none";
      plusSlides(1, 0); // Go to the next slide
      plusSlides(1, 1);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")"; // For older IE
    op -= 0.05; // Decrement opacity (adjust this value to change the fade speed)
  }, 50); // Interval between opacity decrements (adjust this value to change the fade speed)
}

plusSlides(1, 0);
plusSlides(1, 1);
