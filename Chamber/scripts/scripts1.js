
date = new Date(Date.now());
document.querySelector('#©').textContent = date.getFullYear();

const opciones = 
{ weekday: 'long', 
year: 'numeric', 
month: 'numeric', 
day: 'numeric' };

let currentDate = document.lastModified;
document.querySelector('#dateMod').textContent = currentDate;

const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#datetime').textContent = 
new Date(Date.now()).toLocaleString('en-UK',opciones2);

function toggleMenu() {
    document.getElementById('first-nav').classList.toggle('open');
    document.getElementById('button-1').classList.toggle('open');
}

const x = document.getElementById('button-1');

x.onclick = toggleMenu;