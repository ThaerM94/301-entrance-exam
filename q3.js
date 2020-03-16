'use strict';

var firstDate = document.getElementById("currentDate");
    var date = new Date;
    var zz = `${date.getDay()+1}` `${date.getMonth()}` `${date.getUTCFullYear()}`


// form.appendChild(h2E1);
// var date = document
var currentDate = document.createElement('h2');
form.appendChild(currentDate);
currentDate.textContent=zz;



function activties (active,date){
    this.active=active;
    this.date=date;
    activties.all.push(this);
}

activties.all=[];

var box = document.getElementById("form");
box.addEventListener('submit',newAct);

function newAct (event){
    event.preventDefault();
    var input1 = event.target.act.value;
    var input2 = event.target.date0.value;

    new activties(input1,input2);
    console.log(activties.all)
    
    newAct();
    setInfo();
}
 
function setInfo (){
    var stringInfo = JSON.stringify(activties.all);
    localStorage.setItem('information',stringInfo);
}


function getInfo (){
    var parsInfo = localStorage.getItem('information')
    if (parsInfo) {
        activties.all=JSON.parse(parsInfo);
        render();
    }
}


function render (){
    var container = document.getElementById('list')
    var olE1 = document.createElement('ol');
    container.appendChild(olE1);
    for (var x=0; x<activties.all.length; x++)
    var liE1 = document.createElement('li')
    olE1.appendChild(liE1);
    var divE1 = document.createElement('div');
    liE1.appendChild(divE1);
    divE1.textContent = activties.all[x].active;
    var pE1 = document.createElement('p');
    liE1.appendChild(pE1);
    pE1.textContent = activties.all[x].date;
}


