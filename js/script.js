const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('clr');
const removeBtn = document.getElementById('remove');
const equalsBtn = document.getElementById('equals');
const operationScreen = document.getElementById('calculation');
const resultScreen = document.getElementById('result');

let currentNumber = '';
let prevNumber = '';
let operator = null;

equalsBtn.addEventListener('click', operate);

// listen for click events in buttons
numberBtns.forEach(number => {
  number.addEventListener('click', () => {
    populateDisplay(number.textContent);
  });
});

// display clicked numbers on screen
function populateDisplay(value) {
  currentNumber += value;
  operationScreen.textContent = currentNumber;
}

operationBtns.forEach(operator => {
  operator.addEventListener('click', () => {
    addOperation(operator.textContent);
  });
});

function addOperation(operator){
  operator = operator;
  prevNumber = currentNumber;
  operationScreen.textContent = `${prevNumber} ${operator}`;
  currentNumber = '';
  resultScreen.textContent = '';
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

function operate(){
  switch (operator) {
    case ('+'):
      result = add(prevNumber, currentNumber);
    case ('-'):
      result = subtract(prevNumber, currentNumber);
    case ('*' || 'x'):
      result = multiply(prevNumber, currentNumber);
    case ('/' || "÷"):
      if (currentNumber === 0 ||currentNumber === '') alert(`Can't divide by zero`);
      else result = divide(prevNumber, currentNumber);
    default:
      return
  }

  operationScreen.textContent = '';
  resultScreen.textContent = `${result}`
}
