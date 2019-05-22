function myFunction(){
  let rows = document.getElementById('rows').value;
  calc(rows);
}

function calc(rows){
  let node = document.createElement("div"); 
  document.body.appendChild(node); 

  for(i=0; i <= rows; i++){
    for(a=0; a < i; a++){
      let content = document.createTextNode('+');
      node.appendChild(content);
    }
    let newBrake = document.createElement("br");
    node.appendChild(newBrake);
  }
}