function myFunction(){
  let age = document.getElementById('age').value;
  let gender = document.querySelector('input[name=gender]:checked').value;
  console.log(age + gender);
  document.getElementById('result').innerHTML = calc(age, gender);
}

function calc(age, gender){
  let result;
  if (age >= 18 && age <=30 && gender == "male"){
    result = 'To military!';
  }
  else{
    result = 'No military!';
  }
  return result;
}