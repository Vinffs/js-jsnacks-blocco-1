const fridge = ['banana', 'mela', 'pera', 'ciliegia', 'cocomero', 'arancia', 'mandarino', 'limone', 'fragola'];
const table = ['pesca'];
const moveToFridge = table.shift();
fridge.push(moveToFridge);
const btn = document.querySelector('.checkButton')
const result = document.querySelector('.alert')
console.log(fridge);


btn.addEventListener('click', function () {
  let checkFruit = false;

  for (let i = 0; i <= fridge.length - 1; i++) {
    if (fridge[i] === 'cocomero') {
      checkFruit = true;
    } else { }
  }

  let msg = document.createElement('div')

  if (checkFruit == true) {
    msg.innerText = 'Trovato! Devo solo preparare il cocktail.'
  } else {
    msg.innerText = 'Oh no, devo uscire a comprare il cocomero!'
  }
  console.log(msg);
  result.appendChild(msg);
}
)



