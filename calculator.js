// A calculator operation will consist of a number, an operator, and another number
const NUMBER = 0;
const OPERATOR = ['+', '-', '/', '*'];
const NUMBER_02 = 0;

// Function to run an addition on two numbers
function add(a, b) {
    return a + b;
}

// Function to run a substraction on two numbers
function subtract(a, b) {
    return a - b;
}

// Function to run a multiplication on two numbers
function multiply(a, b) {
    return a * b;
}

// Function to run a division on two numbers
function divide(a, b) {
    return Math.round((a / b), 4);
}

// Depending on what the user calls, the operate function runs
function operate(oper, num1, num2) {

    // num1 = prompt("Enter a number: ");
    // num2 = prompt("Enter another number: ");
    // oper = prompt("Enter a calculation symbol: ");

    // Run a switch case to run through the operations depending
    // on what the user selects
    switch (oper) {

        //Case add
        case OPERATOR[0]:
            return add(num1, num2);

        //Case subtract
        case OPERATOR[1]:
            return subtract(num1, num2);

        //Case divide
        case OPERATOR[2]:
            return divide(num1, num2);

        // Case multiply
        case OPERATOR[3]:
            return multiply(num1, num2);

        // Almost like an else
        default:
            console.log("Incorrect choice!");
    }
}

// alert("Your calculation result is: " + operate(OPERATOR, NUMBER, NUMBER_02));