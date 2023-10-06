//Ejercicio1

console.log(document.getElementById('lipsum')); 
console.log(document.getElementsByClassName('error')); 
console.log(document.getElementsByTagName('p'));
console.log(document.querySelector('.error'));
console.log(document.querySelectorAll('p.error'));


console.log(document.getElementById('input2'));
console.log(document.querySelector('#input2'));

console.log(document.querySelectorAll('p'));
console.log(document.getElementsByTagName('p'));

console.log(document.querySelectorAll('#lipsum p'));
console.log(document.getElementById('lipsum').getElementsByTagName('p'));

console.log(document.querySelector('form'));
console.log(document.getElementsByTagName('form')[0]);

console.log(document.querySelectorAll('input'));
console.log(document.getElementsByTagName('input'));

console.log(document.getElementsByName('sexo'));
console.log(document.querySelectorAll("[name='sexo']"));

console.log(document.querySelectorAll('li.important'));
//console.log(document.getElementsByClassName('important').getElementsByTagName('li'));


//Ejercicio2
console.log('------------------------------------');


let parrafo = document.querySelector('#lipsum p')
console.log(parrafo);

let parrafoHerm=parrafo.nextElementSibling;
console.log(parrafoHerm);

console.log(parrafoHerm.parentElement);

console.log(document.querySelector('#lipsum p'));
console.log(document.getElementById('lipsum').getElementsByTagName('p')[0]);

console.log(document.getElementById('lipsum').getElementsByTagName('p')[1]);
console.log(document.querySelectorAll('#lipsum p')[1]);

let items1 =document.getElementsByTagName('li')
console.log(items1[items1.length-1]);
let items2 = document.querySelectorAll('li') 
console.log(items2[items1.length-1]);

console.log(document.querySelectorAll('label').textContent="Escoge sexo");

