document.addEventListener("DOMContentLoaded", () => {
    // Poly sprite: toggles idle to walk on click
    const poly = document.getElementById("poly");
    const jeep = document.getElementById("jeep");
    const fillGasButton = document.getElementById("fillgas");

    // Start with idle animation
    poly.classList.add("idle");

    // Hint buttons functionality
    const hintButtons = document.querySelectorAll('.hint-button');
    const hints = [
        "This object has many keys...",
        "You can type on it...",
        "It's used for entering information..."
    ];

    hintButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(hints[index]);
        });
    });

    fillGasButton.addEventListener("click", () => {
        if (fillGasButton.textContent === "Go to Car") {
            // First click - move to car
            poly.classList.remove("idle");
            poly.classList.add("walk");

            // Show alert after Poly finishes moving (4 seconds)
            setTimeout(() => {
                alert("The Car is out of gas!");
                // Change button text after alert
                fillGasButton.textContent = "Fill Gas";
            }, 4000);
        } else {
            // Second click - fill gas movement
            poly.classList.remove("walk");
            poly.classList.add("fill-gas");

            // Show riddle after Poly finishes moving (2 seconds)
            setTimeout(() => {
                const answer = prompt("Riddle: What has keys, but no locks; space, but no room; and you can enter, but not go in?");
                if (answer !== null) {  // If user didn't click Cancel
                    const correctAnswer = "keyboard";
                    if (answer.toLowerCase().trim() === correctAnswer) {
                        alert("Correct! The car is now fueled up!");
                        // Make Poly disappear
                        poly.classList.add("disappear");
                        // Start the jeep animation and move it
                        jeep.classList.add("moving");
                        jeep.classList.add("move-right");
                        
                        // Add 4 second delay and then redirect
                        setTimeout(() => {
                            window.location.href = "https://nirgi6599.github.io/twist/poly/page1.html"; // Replace with your desired URL
                        }, 2000);
                    } else {
                        alert("That's not correct. Try again!");
                    }
                }
            }, 2000);  // Match the transition duration of fill-gas class
        }
    });
});
  
