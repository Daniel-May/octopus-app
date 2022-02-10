import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var addToCartButton = document.getElementById('add-to-cart-button');
var modal = document.getElementById('modal');
var basketImage = document.getElementById('basket');

addToCartButton.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);
basketImage.addEventListener('click', viewModal);

function openModal() {
  var bulbQuantity = document.getElementById('quantity-counter').innerHTML;
  var convertedQuantity = parseInt(bulbQuantity);
  var totalCost = convertedQuantity * 12.99;
  modal.innerHTML = `
  <button id="close-modal">x</button>
  <h2>Your Basket</h2>
  <p>Total: £${totalCost}</p>
  <p>Quantity: ${bulbQuantity} Bulbs</p>
  `
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
}

function viewModal() {
  modal.style.display = 'block';
}

