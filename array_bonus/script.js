const btn = document.querySelector('.generatorButton');
const result = document.querySelector('.alert');

btn.addEventListener('click', function () {
  const inputOne = parseInt(document.getElementById('dataInput').value);
  const inputTwo = parseInt(document.getElementById('arrayInput').value);

  const arrayOne = new Array();
  const arrayTwo = new Array();

  for (let i = 0; i < inputOne; i++) {
    let numOne = i;
    arrayOne.push(numOne);
  }
  for (let x = 0; x < inputTwo; x++) {
    let numTwo = x;
    arrayTwo.push(numTwo);
  }


  let resultText = document.createElement('div');

  if (arrayOne > arrayTwo) {
    let oneBigger = arrayOne.length - arrayTwo.length;
    for (let y = 0; y < oneBigger; y++) {
      let additionalNum1 = getRndInteger(1, 100);
      arrayTwo.push(additionalNum1);
    }
    resultText.innerHTML = `
    Array 1 : ${arrayOne} <br>
    Array 2: ${arrayTwo}`;

  } else if (arrayOne < arrayTwo) {
    let twoBigger = arrayTwo.length - arrayOne.length;
    for (let z = 0; z < twoBigger; z++) {
      let additionalNum2 = getRndInteger(1, 100);
      arrayOne.push(additionalNum2);
    }
    resultText.innerHTML = `
    Array 1 : ${arrayOne} <br>
    Array 2: ${arrayTwo}`;

  } else {
    resultText.innerHTML = `Both arrays have the same length.`;
  }
  console.log(arrayOne, arrayTwo);

  result.appendChild(resultText);

})