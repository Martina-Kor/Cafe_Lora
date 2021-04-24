import './style.css';
import { Layer } from './../Layer/index.js';

// 7) Drink komponenta

export const Drink = (props) => {
  let layersHtml = '';

  props.layers.forEach((layer) => {
    layersHtml += Layer(layer);
  });

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup">
    <img src="/assets/cups/${props.id}.png" />
  </div>
  <div id="drink__info" class="drink__info">
    <h3>${props.name}</h3>
    ${layersHtml}
  </div>
</div>
<div class="drink__controls">
  <button id="order-btn" class="order-btn">Objednat</button>
</div>
  
  `;
  const btn = element.querySelector('order-btn');
  btn.addEventListener('click', () => {
    props.ordered = !props.ordered;

    if (props.ordered) {
      btn.textContent = 'Zrušit';
    } else {
      btn.textContent = 'Objednej';
    }
  });

  return element;
};
