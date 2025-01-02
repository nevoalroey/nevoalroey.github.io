// Add an event listener to the "CLICK ME" div
document.getElementById('clickMe').addEventListener('click', divClicked);

// Function to handle the click event
function divClicked() {
    alert("The function is working!"); // Ensure the function runs
    
    // Get the element with the ID dorothy
    const dorothy = document.getElementById('dorothy');
    
    // Change the position of dorothy
    dorothy.style.left = '300px';
    dorothy.style.top = '400px';

    // Change the background color to a random color
    document.body.style.backgroundColor = getRandomColor();
}

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
