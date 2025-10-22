// Typing effect
const typingText = document.querySelector(".typing-text");
const textArray = [
  "Computer Science Student",
  "Java Developer",
  "Full Stack Learner",
  "Tech Enthusiast"
];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Navbar toggle for mobile
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Thank you, your message has been sent!");
  this.reset();
});
