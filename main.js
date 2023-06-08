// Intersection Observers
const headerImg = document.querySelectorAll('[data-header-img]');
const intersectionTarget = document.querySelectorAll('[data-intersection-target]')

const options = {
  root: null,
  threshold: 1,
  rootMargin: "-10px" 
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('observed');
  });
}, options);


intersectionTarget.forEach(el => {
  observer.observe(el);
});