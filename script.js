const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));