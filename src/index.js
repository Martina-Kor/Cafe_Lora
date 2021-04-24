import './style.css';
//import './Layer/index';

//console.log('funguju');

// 3) Zprovoznění navigace

const navBtnElm = document.querySelector('#nav-btn');
//console.log(navBtnElm);

const navElm = document.querySelector('#nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navLinkElms = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinkElms.length; i++) {
  navLinkElms[i].addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
}

// 4) Objednávání
const orderBtnElm = document.querySelector('#order-btn');
//console.log(orderBtnElm);

const drinkCupElm = document.querySelector('.drink__cup');

//console.log(drinkCupElm);

let ordered = false;
//console.log(ordered);

orderBtnElm.addEventListener('click', () => {
  if (!ordered) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
});

// Ingredience jako komponenty
