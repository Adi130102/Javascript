// Functions & its implementations


// 1. Function Declaration
// This is the most traditional way of defining a function, and it gets hoisted, meaning you can call it before it is defined in the code.
function aditya() {
    console.log("My name is Aditya");
}
console.log(aditya)


// 2. Function Expression
// In this case, the function is assigned to a variable. Unlike function declarations, function expressions are not hoisted.
function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(4, 5))


// 3. Arrow Function (ES6)
// Arrow functions provide a more concise syntax and have different behavior regarding the this keyword. They are often used in callbacks and functional programming contexts.
const minus = (num1, num2) => {
    return num1 - num2
}
console.log(minus(6, 3))

// If there is only one parameter, you can omit the parentheses, 
// and if the function only returns a value, you can omit the curly braces and the return keyword:
const squareKarBhai = num => num * num
console.log(squareKarBhai(5))

// 4. Immediately Invoked Function Expression (IIFE)
// This is a function that is defined and immediately executed. It’s often used to create a local scope and avoid polluting the global namespace.
(function () {
    console.log("Immediate Invoked Function");
})();



function* generateAditya() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let adi = generateAditya();
console.log(adi.next().value);
