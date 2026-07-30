// Scroll-triggered reveals
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Hero elements are above the fold — reveal on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal, .ticker').forEach((el) => el.classList.add('in'));
});

document.getElementById('year').textContent = new Date().getFullYear();
