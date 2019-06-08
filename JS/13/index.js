const app = document.getElementById('app');
const products = document.getElementById('products');
const addButton = document.querySelector('input[type=submit]');
var pizzaName;

addButton.addEventListener('click', addPizza);

function addPizza(){
  pizzaName = document.getElementById('name').value;
  products.insertAdjacentHTML('afterBegin', '<div class="product"><div>');
  document.querySelector('.product').innerHTML = pizzaName;
}