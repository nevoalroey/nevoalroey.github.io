document.addEventListener("DOMContentLoaded", () => {
    const character = document.getElementById("character");
    const jeep = document.getElementById("jeep");

    // Animation states
    const characterAnimations = [
        "Final_Project/Assets/man/walking_sheet.png",
        "Final_Project/Assets/man/smoking_sheet.png",
    ];

    const jeepAnimations = [
        "Final_Project/Assets/Jeep/Idle.png",
        "Final_Project/Assets/Jeep/Ride.png",
        
    ];

    let currentAnimation = 0;

    document.addEventListener("click", () => {
        // Change animation frame
        currentAnimation = (currentAnimation + 1) % characterAnimations.length;

        // Apply new animations
        character.style.backgroundImage = `url('${characterAnimations[currentAnimation]}')`;
        jeep.style.backgroundImage = `url('${jeepAnimations[currentAnimation]}')`;
    });
});
