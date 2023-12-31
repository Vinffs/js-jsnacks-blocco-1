/* utente ci fornisce un numero
attraverso la casella di input ci fornisce un numero

questo numero corrisponde alla lunghezza dell'array
per fare questo si potrebbe creare un array vuoto con X posizioni vuote dove X è il numero fornito dall'utente.
Si potrebbe poi utilizzare le proprietà delle array per riempire gli slot ( slot = X ) e per ciascun slot dare il valore della funzione getRndInteger con valori da 1 a 100

stampiamo solo gli ultimi 5 numeri dell'array */


const btn = document.querySelector('.generatorButton');
const result = document.querySelector('.alert')


btn.addEventListener('click', function () {
  const userNumber = document.getElementById('dataInput').value;
  const userArrayNum = document.getElementById('arrayInput').value;
  let userArray = new Array();
  const resultText = document.createElement('p')

  for (let i = 0; i < userNumber; i++) {
    let random = getRndInteger(1, 100);
    userArray.push(random);
  }

  if (parseInt(userNumber) <= parseInt(userArrayNum)) {
    resultText.innerHTML = `Numbers inserted cannot be inferior or equal to numbers to display.`
  } else {
    let displayArray = userArray.slice((userNumber - userArrayNum));
    resultText.innerHTML = `${displayArray}`;
  }
  result.appendChild(resultText);
})

