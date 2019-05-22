function myFunction(){
  let age = document.getElementById('age').value;
  document.getElementById('result').innerHTML = calc(age);
}

function calc(age){
  let result;
  if (age >= 20){
    result = 150;
  }
  else if (age >= 10){
    result = 100;
  }
  else{
    result = 50;
  }
  return result;
}