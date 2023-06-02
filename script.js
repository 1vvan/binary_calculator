// let expression = '';
// let operatorSelected = false;

// function addNumber(number) {
//     const binaryInput = document.getElementById('binaryInput');
//     binaryInput.textContent += number;
//     operatorSelected = false;
// }

// function addOperator(operator) {
//     if (!operatorSelected) {
//         const binaryInput = document.getElementById('binaryInput');
//         binaryInput.textContent += operator;
//         operatorSelected = true;
//     }
// }

// function clearCalculator() {
//     const binaryInput = document.getElementById('binaryInput');
//     const decimalResultInput = document.getElementById('decimalResult');
//     decimalResultInput.textContent = '';
//     binaryInput.textContent = '';
//     operatorSelected = false;
// }

// function calculate() {
//     const binaryInput = document.getElementById('binaryInput');
//     const binaryResultInput = document.getElementById('binaryResult');
//     const expression = binaryInput.textContent;

//     try {
//         const result = evalBinaryExpression(expression);
//         binaryInput.textContent = result;
//     } catch (error) {
//         binaryResultInput.value = 'Ошибка';
//     }
// }

// function evalBinaryExpression(expression) {
//     const parts = expression.split(/([\+\-\*\/])/);
//     let result = parseInt(parts[0], 2);

//     for (let i = 1; i < parts.length; i += 2) {
//         const operator = parts[i];
//         const operand = parseInt(parts[i + 1], 2);

//         switch (operator) {
//             case '+':
//                 result += operand;
//                 break;
//             case '-':
//                 result -= operand;
//                 break;
//             case '*':
//                 result *= operand;
//                 break;
//             case '/':
//                 result /= operand;
//                 break;
//         }
//     }

//     return result.toString(2);
// }

// function convertToDecimal() {
//     const binaryResultInput = document.getElementById('binaryInput');
//     const binaryResult = binaryResultInput.textContent;

//     const decimalResultInput = document.getElementById('decimalResult');
//     const decimalResult = parseInt(binaryResult, 2);
//     decimalResultInput.textContent = decimalResult;
// }
// function convertToBase() {
//     const decimalResultInput = document.getElementById('decimalResult');
//     const decimalResult = parseInt(decimalResultInput.textContent);

//     const base = prompt('Выберите систему счисления (от 2 до 16):');
//     if (base >= 2 && base <= 16) {
//         const convertedResult = decimalResult.toString(base);
//         alert(convertedResult);
//     } else {
//         alert('Некорректный выбор системы счисления');
//     }
// }

let expression = '';
let operatorSelected = false;
let calculationPerformed = false;

function addNumber(number) {
    const binaryInput = document.getElementById('binaryInput');
    binaryInput.textContent += number;
    operatorSelected = false;
    calculationPerformed = false;
}

function addOperator(operator) {
    if (!operatorSelected) {
        const binaryInput = document.getElementById('binaryInput');
        binaryInput.textContent += operator;
        operatorSelected = true;
        calculationPerformed = false;
    }
}

function clearCalculator() {
    const binaryInput = document.getElementById('binaryInput');
    const decimalResultInput = document.getElementById('decimalResult');
    decimalResultInput.textContent = '';
    binaryInput.textContent = '';
    operatorSelected = false;
    calculationPerformed = false;
    enableConvertToDecimalButton(false);
    enableConvertToBaseButton(false)
}

function calculate() {
    const binaryInput = document.getElementById('binaryInput');
    const expression = binaryInput.textContent;

    try {
        const result = evalBinaryExpression(expression);
        binaryInput.textContent = result;
        calculationPerformed = true;
        enableConvertToDecimalButton(true);
    } catch (error) {
        prompt('Ошибка');
    }
}

function evalBinaryExpression(expression) {
    const parts = expression.split(/([\+\-\*\/])/);
    let result = parseInt(parts[0], 2);

    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const operand = parseInt(parts[i + 1], 2);

        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                result /= operand;
                break;
        }
    }

    return result.toString(2);
}

function convertToDecimal() {
    if (calculationPerformed) {
        const binaryResultInput = document.getElementById('binaryInput');
        const binaryResult = binaryResultInput.textContent;

        const decimalResultInput = document.getElementById('decimalResult');
        const decimalResult = parseInt(binaryResult, 2);
        decimalResultInput.textContent = decimalResult;

        enableConvertToBaseButton(true)
    }
}

function convertToBase() {
    const decimalResultInput = document.getElementById('decimalResult');
    const decimalResult = parseInt(decimalResultInput.textContent);

    const base = prompt('Выберите систему счисления (от 2 до 16):');
    if (base >= 2 && base <= 16) {
        const convertedResult = decimalResult.toString(base);
        alert(convertedResult);
    } else {
        alert('Некорректный выбор системы счисления');
    }
}

function enableConvertToDecimalButton(enabled) {
    const convertToDecimalBtn = document.getElementById('convertToDecimalBtn');
    convertToDecimalBtn.disabled = !enabled;
}

function enableConvertToBaseButton(enabled) {
    const convertToBaseBtn = document.getElementById('convertToBaseBtn');
    convertToBaseBtn.disabled = !enabled;
}