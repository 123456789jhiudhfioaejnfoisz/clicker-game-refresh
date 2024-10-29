// Initialize the score
let score = 0;

// Get the button and score display elements
const button = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');

// Add event listener for button click
button.addEventListener('click', () => {
    // Increase the score when button is clicked
    score++;
    
    // Update the score display
    scoreDisplay.textContent = score;
});
