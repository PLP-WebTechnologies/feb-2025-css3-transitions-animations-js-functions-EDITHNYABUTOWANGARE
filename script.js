// script.js
document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box");
  const animateButton = document.getElementById("animateButton");
  const savePreferenceButton = document.getElementById("savePreference");
  const loadPreferenceButton = document.getElementById("loadPreference");

  // Trigger animation when button is clicked
  animateButton.addEventListener("click", () => {
    box.classList.add("animated"); // Adds the class to trigger the animation
    setTimeout(() => box.classList.remove("animated"), 2000); // Removes class after animation completes
  });

  // Save color preference to localStorage
  savePreferenceButton.addEventListener("click", () => {
    const userColor = prompt("Enter a color for the box (e.g., 'blue'): ");
    if (userColor) {
      localStorage.setItem("boxColor", userColor); // Save color in localStorage
      alert(`Color preference saved: ${userColor}`);
    }
  });

  // Load color preference from localStorage
  loadPreferenceButton.addEventListener("click", () => {
    const savedColor = localStorage.getItem("boxColor");
    if (savedColor) {
      box.style.backgroundColor = savedColor; // Apply saved color to box
      alert(`Loaded color preference: ${savedColor}`);
    } else {
      alert("No color preference found!");
    }
  });
});
