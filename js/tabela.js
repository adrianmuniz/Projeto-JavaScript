const getID1 = document.querySelector('#personagensDados');
console.log(getID1);

const getID2 = document.getElementById('personagensDados');
console.log(getID2);

// pegar pela classe CSS
// query selector recupera apenas o primeiro elemento encontrado
// Use all para pegar  todos
const getPersonagem1 = document.querySelectorAll('.nome-personagem');
console.log(getPersonagem1);

const getPersonagem2 = document.getElementsByClassName('nome-personagem');
console.log(getPersonagem2);

console.log(getPersonagem1[3]);
getPersonagem1[3].textContent = 'R2D2'

// pegar pela tag
const getTDS = document.querySelectorAll('td');
console.log(getTDS);

const getTDS2  = document.getElementsByTagName('td');
console.log(getTDS2);

