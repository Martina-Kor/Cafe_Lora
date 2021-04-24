import { Layer } from './Layer/index';
import { Drink } from './Drink/index';
import './style.css';

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
console.log('funguju-po 4!!');
// 5) Ingredience jako komponenty
// dělá to samé, co 6
const drinkInfoElm = document.querySelector('#drink__info');

/* drinkInfoElm.innerHTML +=
  Layer({
    color: '#feeeca',
    label: 'mléčná pěna',
  }) +
  Layer({
    color: '#fed7b0',
    label: 'teplé mléko',
  }) +
  Layer({
    color: '#613916',
    label: 'espresso',
  });
 */

// 6) Seznam ingrediencí

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

//console.log(layers);

layers.forEach((layer) => {
  drinkInfoElm.innerHTML += Layer(layer);
});

console.log('funguju-po 6!!');

// 7) Nápoj
// viz. komponenta Drink v samostatném adresáři
document.querySelector('.drinks-list').append(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);
