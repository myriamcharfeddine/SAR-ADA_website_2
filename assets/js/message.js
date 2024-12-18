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
      }, 1000); // Delay for showing additional content (adjust as needed)
      
    }, 3000); // 3 seconds delay for typing effect
}
  
// Simulate typing when page loads
window.onload = function() {
  simulateTyping();
};

