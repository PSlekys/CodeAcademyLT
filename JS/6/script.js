function myFunction(){
  let year = document.getElementById('year').value;
  document.getElementById('result').innerHTML = calc(year);
}

function calc(year){
  let result;
  if (year % 4 == 0 && year % 100 !== 0){
    result = 'Leap year';
  }
  else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
    result = 'Leap year';
  }
  else{
    result = 'Not leap year';
  }
  return result;
}