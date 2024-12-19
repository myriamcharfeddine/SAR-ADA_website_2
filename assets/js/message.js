function playSoundAndShowSite() {
  var letterContainer = document.getElementById("initial-letter-container");
  var soundElement = document.getElementById("letter-sound");
  var mainSite = document.getElementById("main-site");

  // Play the sound
  soundElement.play();

  // Wait for the sound to finish
  soundElement.onended = function () {
      letterContainer.style.display = "none"; // Hide the letter container
      mainSite.style.display = "block"; // Show the main site content

      // Start the typing animation sequence
      simulateTyping();
  };
}

window.onload = function () {
  document.getElementById("initial-letter-container").style.display = "flex";
  document.getElementById("initial-letter").addEventListener("click", playSoundAndShowSite);
  simulateTyping();
};

function simulateTyping() {
  // Show typing animation
  document.getElementById("typing-indicator").style.display = "flex";

  // Hide typing animation after 3 seconds and show Marco's message
  setTimeout(() => {
    document.getElementById("typing-indicator").style.display = "none"; // Hide typing animation
    document.getElementById("marco-response").style.display = "flex"; // Show Marco's response
    
    // Show the rest of the content (everything that comes after Marco's response)
    setTimeout(() => {
      document.getElementById("additional-content").style.display = "block"; // Show additional content
    }, 0); // Delay for showing additional content (adjust as needed)
    
  }, 0); // 3 seconds delay for typing effect
}



