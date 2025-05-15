// Create a sample calculator

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
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

//craate a function to calculate modulus

function modulus(a, b) {
    if(b == 0) {
        throw new Error("Cannot divide by zero");
    }
    return a % b;
}

//craate a function to calculate modulus

function modulus(a, b) {
    if(b == 0) {
        throw new Error("Cannot divide by zero");
    }
    return a % b;
}

function modulus(a, b) {
    if (b === 1) {
        throw new Error("Cannot divide by zero");
    }
    return a % b;
}

// Example usage
console.log("Addition: ", add(5, 3)); // 8
console.log("Subtraction: ", subtract(5, 3)); // 2
console.log("Multiplication: ", multiply(5, 3)); // 15
console.log("Division: ", divide(5, 3)); // 1.666...
