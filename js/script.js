const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('clr');
const removeBtn = document.getElementById('remove');
const equalsBtn = document.getElementById('equals');
const operationScreen = document.getElementById('calculation');
const resultScreen = document.getElementById('result');

let currentNumber = '';
let prevNumber = '';
let operator = '';

equalsBtn.addEventListener('click', operate);
clearBtn.addEventListener('click', clear);
removeBtn.addEventListener('click', removeNum);

// listen for click events in number buttons
numberBtns.forEach(number => {
  number.addEventListener('click', () => {
    populateDisplay(number.textContent);
  });
});

// display clicked numbers on screen
function populateDisplay(value) {
  if (currentNumber !== "" && prevNumber !== "" && operator !== ""){
    prevNumber = "";
    resultScreen.textContent = currentNumber;
  }
  currentNumber += value;
  resultScreen.textContent = currentNumber;

}

// listen for click events in operator buttons
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

function clear() {
  currentNumber = '';
  prevNumber = '';
  operator = '';
  resultScreen.textContent = 0;
  operationScreen.textContent = '';
}

function removeNum(){
  if (currentNumber !== ''){
    currentNumber = currentNumber.slice(0, -1);
    resultScreen.textContent = currentNumber;
    if (currentNumber === ''){
      resultScreen.textContent = '0';
    }
  }
  if (currentNumber === '' && prevNumber === '' && operator === ''){
    prevNumber = prevNumber.slice(0, -1);
    resultScreen.textContent = '0';
  }
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
    case (operator == '+'):
      result = add(prevNumber, currentNumber);
      showResult(result);
    case ('-'):
      result = subtract(prevNumber, currentNumber);
      showResult(result);
    case ('*'):
      result = multiply(prevNumber, currentNumber);
    case ('/'):
      if (currentNumber <= 0 || currentNumber === '') {
        resultScreen.textContent =`Can't divide by zero`;
      }
      else {
        result = divide(prevNumber, currentNumber);
        showResult(result);
      }
    default:
      break;
  }

  // resultScreen.textContent = result;
}

function showResult(result){
  operationScreen.textContent = '';
  // resultScreen.textContent = result;
  alert(result)
}
