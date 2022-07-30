const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');
const operators = document.querySelectorAll('operator');

let numbersOne = null;
let numbersTwo = null;
let total = 0;
let operation = ''

// listen for click events in number btns
buttons.forEach(number => {
  number.addEventListener('click', () => {
    numbersOne += number.textContent;
    populateDisplay(number.textContent);
  })
})

// display clicked numbers on screen
function populateDisplay(value) {
  result.textContent += value;
}

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function operate(operator, num1, num2){
  switch (true) {
    case (operator == '+'):
      return add(num1, num2);
    case (operator == '-'):
      return subtract(num1, num2);
    case (operator == '*'):
      return multiply(num1, num2);
    case (operator == '/'):
      if (num2 === 0) return null;
      else return divide(num1, num2);
  }
}
