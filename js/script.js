let runningTotal = 0;
let buffer = "0";
let previousOperator;

const operationBtns = document.querySelectorAll('.operator');
const operationScreen = document.getElementById('calculation');
const result = document.querySelector('#result');

function buttonClick(value) {
    if(isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    result.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            operationScreen.textContent = '';
            break;
        case '=':
            if (previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMath(symbol);
            break
    }
}

function handleMath(symbol){
    if(buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}


function flushOperation(intBuffer){
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === 'x') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '÷') {
        if (runningTotal <= 0 || runningTotal === '') {
            operationScreen.textContent = `Can't divide by zero`
        }
        runningTotal /= intBuffer
    }
    operationScreen.textContent += ` ${intBuffer}`;

}


function handleNumber(numberString) {
    if(buffer === '0') {
        buffer = numberString;
    }else {
        buffer += numberString;
    }
}


function init() {
    document.querySelector('.btn-grid').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

operationBtns.forEach(operator => {
    operator.addEventListener('click', (e) => {
        addOperation(e.target.innerText);
    });
});

function addOperation(operator){
    operationScreen.textContent = `${buffer} ${operator}`;
}

init();