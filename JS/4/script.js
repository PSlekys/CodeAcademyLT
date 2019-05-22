let randomNumber = Math.floor(Math.random()*15+1);
console.log(randomNumber);

if (randomNumber === 1){
  alert('You win three tickets');
}
else if(randomNumber === 2 || randomNumber === 3){
  alert('You win two tickets');
}
else if(randomNumber >= 4 && randomNumber <= 6){
  alert('you win one ticket');
}
else{
  alert('you win nothing');
}