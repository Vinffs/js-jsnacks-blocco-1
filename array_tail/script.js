/* utente ci fornisce un numero
attraverso la casella di input ci fornisce un numero

questo numero corrisponde alla lunghezza dell'array
per fare questo si potrebbe creare un array vuoto con X posizioni vuote dove X è il numero fornito dall'utente.
Si potrebbe poi utilizzare le proprietà delle array per riempire gli slot ( slot = X ) e per ciascun slot dare il valore della funzione getRndInteger con valori da 1 a 100

stampiamo solo gli ultimi 5 numeri dell'array */


const userNumber = document.getElementById('data');
const btn = document.querySelector('button')
let n = 10
let userArray = new Array(n);
userArray = userArray.fill(0).map(() => getRndInteger(1, 100));
console.log(userArray);

const lastFive = userArray.slice(-5);
console.log(lastFive);