const button = document.querySelector('input[type=submit]');
const answer = document.getElementById('answer');

button.addEventListener('click', displayResult);

function displayResult(){
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);
  let action = document.querySelector('input[type=radio]:checked').value;
  let result;

  if (action === "multiply"){
    result = multiply(n1, n2);
  }
  else if (action === "divide"){
    result = divide(n1, n2);
  }
  else if (action === "add"){
    result = add(n1, n2);
  }
  else{
    result = subtract(n1, n2);
  }

  answer.innerHTML = result;
}

function multiply(n1, n2){
  return n1 * n2;
}

function divide(n1, n2){
  return n1 / n2;
}

function add(n1, n2){
  return n1 + n2;
}

function subtract(n1, n2){
  return n1 - n2;
}