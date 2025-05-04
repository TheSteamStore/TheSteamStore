document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('.animate-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});
