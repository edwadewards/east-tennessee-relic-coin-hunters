// Intersection Observers
const headerImg = document.querySelectorAll('[data-header-img]');
const intersectionTarget = document.querySelectorAll('[data-intersection-target]')

const options = {
  root: null,
  threshold: 1,
  rootMargin: "0px" 
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


const submit = document.querySelector('.btn-submit');
const success = document.querySelector('.success-animation');

submit.addEventListener('click', () => {
  submit.style.display = 'none';
  success.style.display = 'inline-block';
});


const scroller = document.querySelector('.scroll-container');

window.addEventListener('scroll', () => {
  scroller.style.scale = '1';
});