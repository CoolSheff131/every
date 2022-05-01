import './reset.scss';
import './main.scss';
console.log('Hello main.js!');

document.querySelectorAll('#emailForm').forEach((emailForm) =>
  emailForm.addEventListener('submit', (e) => {
    console.log(e);
    e.target[0].style.display = 'none';
    e.target[1].style.display = 'none';
    e.target.querySelector('.completedMsg').style.display = 'flex';
  }),
);

document.querySelector('#menu__toggle').addEventListener('change', (e) => {
  document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});
document.querySelector('.menu__box').addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {
    document.querySelector('#menu__toggle').checked = false;
    document.body.style.overflow = false;
    document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
  }
});

const buttonsWrapper = document.querySelector('.map');
const slides = document.querySelector('.carousel__content');
const casesButtonsWrapper = document.querySelector('.cases__map');
const casesSlides = document.querySelector('.cases .blocks__wrapper .blocks');

buttonsWrapper.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    Array.from(buttonsWrapper.children).forEach((item) => item.classList.remove('active'));
    if (e.target.classList.contains('first')) {
      slides.style.transform = 'translateX(-0%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('second')) {
      slides.style.transform = `translateX(-${100 * 1}vw)`;
      e.target.classList.add('active');
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = `translateX(-${100 * 2}vw)`;
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fourth')) {
      slides.style.transform = `translateX(-${100 * 3}vw)`;
      e.target.classList.add('active');
    }
  }
});
casesButtonsWrapper.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    Array.from(casesButtonsWrapper.children).forEach((item) =>
      item.classList.remove('cases__active'),
    );
    if (e.target.classList.contains('cases__first')) {
      casesSlides.style.transform = 'translateX(-0%)';
      e.target.classList.add('cases__active');
    } else if (e.target.classList.contains('cases__second')) {
      casesSlides.style.transform = `translateX(-${33 * 1}vw)`;
      e.target.classList.add('cases__active');
    } else if (e.target.classList.contains('cases__third')) {
      casesSlides.style.transform = `translateX(-${33 * 2}vw)`;
      e.target.classList.add('cases__active');
    }
  }
});

(function () {
  var throttle = function (type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle('resize', 'optimizedResize');
})();
let breakPoint = true;
window.addEventListener('optimizedResize', function () {
  const width = window.innerWidth;
  if (width > 768 && breakPoint) {
    breakPoint = false;
    Array.from(buttonsWrapper.children).forEach((item) => item.classList.remove('active'));
    buttonsWrapper.children[0].classList.add('active');
    slides.style.transform = 'translateX(-0%)';
    Array.from(casesButtonsWrapper.children).forEach((item) =>
      item.classList.remove('cases__active'),
    );
    casesButtonsWrapper.children[0].classList.add('cases__active');
    casesSlides.style.transform = 'translateX(-0%)';
  } else if (width <= 768) {
    breakPoint = true;
  }
});

var modal = document.getElementById('myModal');
var footerForm = document.getElementById('footer__form');
footerForm.addEventListener('submit', (e) => {
  modal.style.display = 'block';
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
