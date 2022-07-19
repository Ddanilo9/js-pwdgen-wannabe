//Chiediamo all'utente il suo nome

let nomeUtente = prompt ('Come ti chiami?');
console.log(nomeUtente);
//Chiediamo all'utente i suoi anni

let anniUtente = prompt ('Quanti anni hai?');
//trasformiamo il numero da stringa a number

anniUtente = parseInt(anniUtente);
console.log(anniUtente);

//Chiediamo all'utente il suo colore preferito
let coloreUtente = prompt('Quale è il tuo colore preferito?');
console.log(coloreUtente);

//aggiungiamo il calcolatore di un numero random da 1a 100
let numRandom = Math.floor(Math.random()*100);

console.log(numRandom);

//prendo nell'html l'elemento che voglio sovrascrivere tramite l'ID
let password = document.getElementById(psw);

//stampo il contenuto di quello che voglio esca scritto 
console.dir(password);

psw.innerHTML = nomeUtente + anniUtente + coloreUtente + numRandom;

