var cars = document.getElementById("cars");
var i = 1;

function addCar(){
  // Getting all values
  let brand = document.getElementById('brand').value;
  let model = document.getElementById('model').value;
  let doors = document.getElementById('doors').value;
  let price = document.getElementById('price').value;

  let row = cars.insertRow(-1);
  let j = 'a' + i;
  row.setAttribute("id", j);
  let cell1 = row.insertCell(0);
  cell1.innerHTML = i;
  i++;
  let cell2 = row.insertCell(1);
  cell2.innerHTML = brand;
  let cell3 = row.insertCell(2);
  cell3.innerHTML = model;
  let cell4 = row.insertCell(3);
  cell4.innerHTML = doors;
  let cell5 = row.insertCell(4);
  cell5.innerHTML = price;

  document.getElementById(j).addEventListener("click", function(){ alert(document.getElementById(j).textContent); });
}

function removeCar(){
  let did = document.getElementById('did').value;
  cars.deleteRow(did);
}