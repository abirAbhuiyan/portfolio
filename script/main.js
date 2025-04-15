const phrases = [
  "Hello there...",
  "I'm Abir.",
  "A developer in the making."
];

let index = 0;
let charIndex = 0;
const typingContainer = document.getElementById("typing-container");
const signature = document.getElementById("signature");
const learnMoreBtn = document.getElementById("learn-more-btn");
const headshot = document.querySelector('.fade-in-image'); // Get the headshot image element

// Typing effect function
function typeLine() {
  if (index < phrases.length) {
    if (charIndex < phrases[index].length) {
      typingContainer.innerHTML += phrases[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 60);
    } else {
      typingContainer.innerHTML += "<br />";
      index++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  } else {
    signature.style.opacity = 1;
    learnMoreBtn.style.opacity = 1;
    learnMoreBtn.style.pointerEvents = "auto";
  }
}

// Scroll trigger for headshot fade-in
window.addEventListener('scroll', () => {
  const sectionTop = headshot.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8; // Trigger when image is 80% visible

  if (sectionTop < triggerPoint) {
    headshot.style.opacity = 1;
    headshot.style.filter = "none";  // Fade in the headshot
  }
});

// Start the typing animation on page load
window.onload = typeLine;
