const price = 6.00;
const studentDiscount = 0.5;
const retiredDiscount = 0.3;
let displayPrice;

function myFunction(){
  let age = document.getElementById('age').value;
  if (age < 16){
    displayPrice = price / 2;
  }
  else if (age > 60){
    displayPrice = 2/3 * price;
  }
  else{
    displayPrice = price;
  }
  document.getElementById('price').innerHTML = displayPrice;
}