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
      add(num1, num2)
      break;
    case (operator == '-'):
      subtract(num1, num2)
      break;
    case (operator == '*'):
      multiply(num1, num2)
      break;
    case (operator == '/'):
      divide(num1, num2)
      break;
  }
}