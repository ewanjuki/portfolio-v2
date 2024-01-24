function runTypingEffect() {
  const text = "I am Edwin Wanjuki.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);

const year = new Date().getFullYear();

document.querySelector('.year').innerText = year;

if (window.innerWidth > 767) {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      project.classList.add("change");
    });

    project.addEventListener("mouseleave", () => {
      project.classList.remove("change");
    });
  });
}
