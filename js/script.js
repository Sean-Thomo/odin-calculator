const numberButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('operator');
const clearBtn = document.getElementById('clr');
const removeNum = document.getElementById('remove');
const equalsBtn = document.getElementById('equals');
const operationScreen = document.getElementById('calculation');
const resultScreen = document.getElementById('result');

let operationOne = '';
let operationTwo = '';
let currentOperation = null;

equalsBtn.addEventListener('click', testCalc);
clearBtn.addEventListener('click', clear);
// equalsBtn.addEventListener('click', remove);

// listen for click events in buttons
numberButtons.forEach(number => {
  number.addEventListener('click', () => {
    populateDisplay(number.textContent);
  });
});

// display clicked numbers on screen
function populateDisplay(value) {
  operationScreen.textContent += value;
}

operators.forEach(operand => {
  operand.addEventListener('click', addOperation(operand.textContent))
})

function addOperation(operand){
  if (currentOperation !== null) {
    testCalc()
  }
  operationOne = result.textContent;
  result.textContent = `${operationOne} ${operand}`;
}

function testCalc() {
  if (currentOperation === null) {
    return;
  }
  if (currentOperation === "÷" && result.textContent == "") {
    alert(`Can't divide by zero`);
    return;
  }
  operationTwo = result.textContent;
  result.textContent = operate(currentOperation, operationOne, operationTwo);
  operationScreen.textContent = `${operationOne} ${currentOperation} ${operationTwo}`;
  currentOperation = null;
}

function clear() {
  operationOne = '';
  operationTwo = '';
  currentOperation = null;
  operationScreen.textContent = '';
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
