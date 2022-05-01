import './reset.scss';
import './main.scss';
console.log('Hello main.js!');
document.querySelector('#menu__toggle').addEventListener('change', function (e) {
  document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});
