const fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'cocomero', 'mandarino', 'limone', 'fragola'];
const table = ['pesca'];
console.log(fridge);
const moveToFridge = table.shift();
fridge.push(moveToFridge);
let checkFruit = false;
let msg;


for (let i = 0; i <= fridge.length - 1; i++) {
  console.log(fridge[i]);
  if (fridge[i] === 'cocomero') {
    checkFruit = true;
  } else {
    checkFruit = false;
  }
}

if (checkFruit = true) {
  msg = 'Trovato! Devo solo preparare il cocktail.'
} else {
  msg = 'Oh no, devo uscire a comprare il cocomero!'
}

console.log(msg);



