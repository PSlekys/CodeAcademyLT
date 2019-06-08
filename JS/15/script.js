'use strict';

const app = document.getElementById("app");
const clear = () => app.innerHTML = "";
const removeStorage = () => {localStorage.clear(); createTable()};

const button = document.querySelector("input[type=submit]");
button.addEventListener("click", fn);

const reset = document.querySelector("input[type=reset]");
reset.addEventListener("click", removeStorage);

var i, j;

createTable();

function Guest(id, name, surname){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.save = function(){localStorage.setItem(this.id, this.name.concat(",",this.surname))};
}

function getData(){
    let guestList = Array();
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key) && !isNaN(key)) {
            let id = key;
            let name = localStorage.getItem(key).split(',',1)[0];
            let surname = localStorage.getItem(key).replace(name + ",","");
            let fullNameObject = new Guest(id, name, surname);
            guestList.push([key, fullNameObject]);
        }
    }
    guestList.sort((a, b) => a[0] - b[0]);
    if(guestList.length !== 0){
        i = guestList[0][0];
        j = guestList[(guestList.length - 1)][0];
    }
    else{
        i = 1000;
        j = 1000;
    }
    return guestList;
}

function fn(){
    let fullName = document.getElementById("fullname").value;
    let location = document.querySelectorAll("input[type=radio]");

    let name = fullName.split(" ")[0];
    let surname = fullName.replace(name, "").trim();

    if(!location[0].checked && !location[1].checked){
        app.innerHTML = "Please go back and fill out the fields";
    }
    else if(location[0].checked){
        let id = --i;
        let fullNameObject = new Guest(id, name, surname);
        fullNameObject.save();
        createTable();
    }
    else{
        let id = ++j;
        let fullNameObject = new Guest(id, name, surname);
        fullNameObject.save();
        createTable();
    }
}

function createTable(){
    clear();
    let guestList = getData();

    var table = app.appendChild(document.createElement("table"));
    let tr = table.appendChild(document.createElement("tr"));
    let th1 = tr.appendChild(document.createElement("th"));
    th1.appendChild(document.createTextNode("ID"));
    let th2 = tr.appendChild(document.createElement("th"));
    th2.appendChild(document.createTextNode("Name"));
    let th3 = tr.appendChild(document.createElement("th"));
    th3.appendChild(document.createTextNode("Surname"));
    let th4 = tr.appendChild(document.createElement("th"));
    th4.appendChild(document.createTextNode("Remove Button"));

    guestList.forEach(function(v, i){
        let tr = table.appendChild(document.createElement("tr"));

        let td1 = tr.appendChild(document.createElement("td"));
        td1.appendChild(document.createTextNode(i));

        let td2 = tr.appendChild(document.createElement("td"));
        td2.appendChild(document.createTextNode(v[1].name));

        let td3 = tr.appendChild(document.createElement("td"));
        td3.appendChild(document.createTextNode(v[1].surname));

        let td4 = tr.appendChild(document.createElement("td"));
        td4.appendChild(document.createTextNode("Remove"));
        td4.addEventListener("click", function(){
            this.parentNode.parentNode.removeChild(this.parentNode);
            localStorage.removeItem(v[0]);
        });
    });
}