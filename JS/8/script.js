const base = 32;
const conversion = 9.0/5.0;

function myFunction(){
  let min = document.getElementById('min').value;
  let max = document.getElementById('max').value;
  calc(min, max);
}

function calc(min, max){
  let newTable = document.createElement("table");
  document.body.appendChild(newTable);

  let i = min;
  while(i <= max){
    let newTr = document.createElement('tr');
    newTable.appendChild(newTr);

    let newTd1 = document.createElement('td');
    newTr.appendChild(newTd1);
    let newContent = document.createTextNode(i);
    newTd1.appendChild(newContent);

    newTd2 = document.createElement('td');
    newTr.appendChild(newTd2);
    newContent = document.createTextNode((i*conversion+base).toFixed(1));
    newTd2.appendChild(newContent);

    i++;
  }
}