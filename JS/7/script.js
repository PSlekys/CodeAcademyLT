//Not in function, thus you can guess multiple times a single answer;
let number = Math.floor(Math.random() * 5);

function myFunction(){
  let guess = document.getElementById('guess').value;
  console.log(number);
  document.getElementById('result').innerHTML = calc(guess, number);
}

function calc(guess, number){
  let result;
  if (guess == number){
    result = 'correct';
  }
  else{
    result = 'incorrect';
  }
  return result;
}