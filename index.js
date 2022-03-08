document.addEventListener('DOMContentLoaded', isDOMContentLoaded);

function isDOMContentLoaded() {
    const calculatorForm = document.querySelector('.calculatorForm');

    calculatorForm.addEventListener('submit', e => getResult(e));

    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
        '%': modulo,
    };

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function modulo(a, b) {
        return a % b;
    }

    function getResult(e) {
        e.preventDefault();
        const number1 = Number(e.target.elements.number1.value);
        const number2 = Number(e.target.elements.number2.value);
        const operationType = e.target.elements.operation.value;

        const result = operations[operationType](number1, number2);

        const resultEl = document.querySelector('.result');
        resultEl.innerText = result;
    }
}
