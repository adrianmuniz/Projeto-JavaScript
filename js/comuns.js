//escrevendo no console
console.log("Olá, eu sou o console");
console.log("Posso te ajudar");

let nomeUsuario = 'Israel Marques';
let idadeUsuario = 50;
let email = 'profisrael.copi@fiap.com';
let noite = true;


console.log(nomeUsuario);
console.log(idadeUsuario);
console.log(email);
console.log(noite);

console.log(typeof nomeUsuario, nomeUsuario);
console.log(typeof(email), email);

const dataNascimento = '02/12/1970';
console.log(dataNascimento);

console.log(`Usuario: ${nomeUsuario}`);

let n1 = 10;
let n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} / ${n2} = ${n1 / n2}`);
console.log(`${n1} % ${n2} = ${n1 % n2}`);


const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós','Eles'];

console.log(pessoas);
console.log(pessoas.length);
console.table(pessoas);

// inserir apos o ultimo indice
pessoas.push('Eu mesmo');
console.log(pessoas);

// Inserindo no inicio
pessoas.unshift('Eu mesmo');
console.log(pessoas);

// retirando o primeiro indice
const retirado = pessoas.shift();
pessoas.shift();
console.log(retirado);

// retirando ou inserindo em uma posição
pessoas.splice(2,2);
console.log(pessoas);

// inserindo
pessoas.splice(2,0, 'Ele', 'Nós');


