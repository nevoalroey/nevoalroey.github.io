document.addEventListener("DOMContentLoaded", () => {
    // Poly sprite: toggles idle to walk on click
    const poly = document.getElementById("poly");
    poly.addEventListener("click", () => {
      poly.classList.remove("idle");
      poly.classList.add("walk");
    });
    
    // Jeep sprite: starts the moving animation on click
    const jeep = document.getElementById("jeep");
    jeep.addEventListener("click", () => {
      jeep.classList.add("moving");
    });
  });
  
