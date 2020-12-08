//changing the classes of the time period payed
const linkMonth = document.querySelector('.price--link--monthly');
const linkYear = document.querySelector('.price--link--yearly');

function changeClass() {
  linkMonth.classList.toggle('price--active');
  linkYear.classList.toggle('price--active');
}

const cardsItemMonthly = document.querySelector(
  '.container__card--cards-monthly'
);
const cardsItemYearly = document.querySelector(
  '.container__card--cards-yearly'
);

function changePricing() {
  cardsItemMonthly.classList.toggle('container__cards--active');
  cardsItemYearly.classList.toggle('container__cards--active');
  console.log(cardsItemMonthly);
}

const links = document.querySelectorAll('.price--link');

links.forEach(el =>
  el.addEventListener('click', function (e) {
    if (!e.target.classList.contains('price--active')) {
      changeClass();
      changePricing();
    }
  })
);
