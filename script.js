// Nav: frosted glass on scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// Reveal on scroll with stagger for grid siblings
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.active)')];
    const delay = siblings.indexOf(entry.target) * 80;
    setTimeout(() => entry.target.classList.add('active'), delay >= 0 ? delay : 0);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Collapsible "The Engineering" sections
document.querySelectorAll('.engineering-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.engineering-collapsible').classList.toggle('open');
  });
});
