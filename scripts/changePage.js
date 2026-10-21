// Add event listener for page load
window.addEventListener('DOMContentLoaded', function () {
  // Select the loader element
  var loader = document.querySelector('.loader');

  // Add fade-in class to the loader
  loader.classList.add('fade-in');

  // Hide the loader after 1 second (1000 milliseconds)
  setTimeout(function () {
    // Remove fade-in class and add fade-out class
    loader.classList.remove('fade-in');
    loader.classList.add('fade-out');

    // Remove the loader from the DOM after the fade-out animation completes
    setTimeout(function () {
      loader.classList.add('hidden');
    }, 500);
  }, 1000);
});
