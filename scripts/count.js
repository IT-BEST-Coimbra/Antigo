// Get all the number elements
const numberElements = document.querySelectorAll('.number');

// Create an array to store the target numbers
const targetNumbers = [];

// Create an array to store the animation durations
const animationDurations = [];

// Populate the target numbers and animation durations arrays based on the number elements
numberElements.forEach((numberElement) => {
    const target = parseFloat(numberElement.textContent);
    targetNumbers.push(target);

    // Define the animation duration for each number element
    const duration = 2000; // Modify as needed
    animationDurations.push(duration);
});

// Calculate the increment values for each number element
const increments = targetNumbers.map((target, index) => {
    const duration = animationDurations[index];
    return target / (duration / 16);
});

// Function to update a number element
function updateNumber(numberElement, currentNumber) {
    numberElement.textContent = Math.round(currentNumber);
}

// Function to animate a number element
function animateNumber(numberElement, targetNumber, increment, animationDuration) {
    const startTimestamp = performance.now();

    function step(timestamp) {
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / animationDuration, 1);
        const currentNumber = progress * targetNumber;

        updateNumber(numberElement, currentNumber);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            updateNumber(numberElement, targetNumber);
        }
    }

    window.requestAnimationFrame(step);
}

// Delay the start of the animations
setTimeout(() => {
    // Start the animations for all number elements
    numberElements.forEach((numberElement, index) => {
        const targetNumber = targetNumbers[index];
        const increment = increments[index];
        const animationDuration = animationDurations[index];

        animateNumber(numberElement, targetNumber, increment, animationDuration);
    });
}, 1000); // Delay of 2 seconds (2000 milliseconds)
