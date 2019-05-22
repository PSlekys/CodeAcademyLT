let randomNumber = Math.floor(Math.random()*15+1);
console.log(randomNumber);

switch (randomNumber) {
  case 1:
    alert('You win three tickets');
    break;
  case 2:
  case 3:
    alert('You win two tickets');
    break;
  case 4:
  case 5:
  case 6:
    alert('You win one ticket');
    break;
  default:
    alert('you win NOTHING');
}