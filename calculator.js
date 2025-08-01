// A calculator operation will consist of a number, an operator, and another number
const NUMBER = 0;
const OPERATOR = ['+', '-', '/', '*'];
const NUMBER_02 = 0;

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

function operate(oper, num1, num2) {

    num1 = prompt("Enter a number: ");
    num2 = prompt("Enter another number: ");
    oper = prompt("Enter a calculation symbol: ");

    if (oper == OPERATOR[0]) {
        return add(num1, num2);
    }
    else if (oper == OPERATOR[1]) {
        return subtract(num1, num2);
    }
    else if (oper == OPERATOR[2]) {
        return divide(num1, num2);
    }
    else if (oper == OPERATOR[3]) {
        return multiply(num1, num2);
    }
    else {
        console.log("Incorrect choice!");
    }
}

console.log(operate(OPERATOR, NUMBER, NUMBER_02));
