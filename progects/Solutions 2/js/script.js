const link = document.querySelector('a[href="#title-section"]');
link.addEventListener('click', (event) => {
  event.preventDefault();
  const targetElement = document.querySelector('#title-section');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});


function cardsAnimation() {
  document.querySelector(".registration__card--1").classList.toggle("registration__card__animation--1");
  document.querySelector(".registration__card--3").classList.toggle("registration__card__animation--3");
}
