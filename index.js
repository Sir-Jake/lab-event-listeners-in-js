/*Functions
 changing the background color when a button is clicked*/
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// resetting the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// displaying the key pressed by the user
function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  display.textContent = `Key pressed: ${event.key}`;
}

// displaying user input in real-time
function displayUserInput() {
  const input = document.getElementById("textInput");
  const display = document.getElementById("textInputDisplay");
  display.textContent = `You typed: ${input.value}`;
}

// Setting up event listeners
function setupEventListeners() {
  // changing background color when the button is clicked
  document
    .getElementById("changeColorButton")
    .addEventListener("click", changeBackgroundColor);

  // resetting background color when the body is double-clicked
  document
    .getElementById("resetColorButton")
    .addEventListener("dblclick", resetBackgroundColor);

  // displaying key pressed when a key is pressed down
  document.addEventListener("keydown", displayKeyPress);

  // displaying user input in real-time as they type
  document
    .getElementById("textInput")
    .addEventListener("input", displayUserInput);
}

// Initializing event listeners when DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
