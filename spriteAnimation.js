// Function to restart the animations of the .move divs
function startOver() {
    // Select all the .move divs and reset the animation
    const moves = document.querySelectorAll('.move');
    moves.forEach((move, index) => {
        // Remove animation
        move.style.animation = 'none';
        move.offsetHeight; // Trigger reflow to reset the animation
        // Reapply the animation with a delay based on its index
        move.style.animation = `slideInOut 3s linear ${index * 1.5}s forwards`;
    });
    
    // Optionally, reset any other animations (e.g., Dorothy)
    const dorothy = document.querySelector('.dorothy');
    dorothy.style.animation = 'none';  // Stop Dorothy's animation
    dorothy.offsetHeight; // Trigger reflow
    dorothy.style.animation = 'walkAnimation 1s steps(10) infinite'; // Restart the animation
}
