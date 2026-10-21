// Function to detect Firefox browser
function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

// Remove the "bg__gradient" class if the browser is Firefox
function removeBgGradient() {
    if (isFirefox()) {
        var element = document.getElementsByClassName('bg_filter'); // Replace with the ID of the element containing the class
        element.classList.remove('bg__gradient');
    }
}

// Attach the event listener once the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    removeBgGradient();
});

// Detect if the browser is Firefox
var isFirefox = typeof InstallTrigger !== 'undefined';

// Remove the class if the browser is Firefox
if (isFirefox) {
    window.addEventListener('DOMContentLoaded', function () {
        var element = document.querySelector('.bg__gradient');
        if (element) {
            element.classList.remove('bg__gradient');
        }
    });
}

