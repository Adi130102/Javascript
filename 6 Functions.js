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
    // This is a function that is defined and immediately executed. 
    // It’s often used to create a local scope and avoid polluting the global namespace.
    (function () {
        console.log("Immediately Invoked Function Expression (IIFE)");
    })();
// error might arise due to another issue in your code or environment, 
// such as console being overridden elsewhere in your script.




// 5. Generator Function
// Generator functions can pause and resume execution using the yield keyword. They are defined using the function* syntax.
function* generateAditya() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const adi = generateAditya();
console.log(adi.next().value);
console.log(adi.next().value);
console.log(adi.next().value);
console.log(adi.next().value);


// 6. Function Constructor
// Functions can also be created using the Function constructor, although this method is rarely used in modern JavaScript 
// because it introduces security risks and poor performance.
const functionName = new Function('a', 'b', 'return a+b');
console.log(functionName)


// 7. Object Method Shorthand (ES6)
// When defining methods inside objects, you can use a shorthand syntax for functions.
const adit = {
    adityaName(num12, num22) {
        return num12 + num22;
    }
};
console.log(adit.adityaName(12, 3));


// 8. Anonymous Functions
// Anonymous functions are functions without a name. They are typically used in callbacks, event handlers, and function expressions.
setTimeout(function () {
    console.log("Anonymous function after 1 second");
}, 1000);


// 9. Async Functions (ES6)
// Async functions allow you to work with asynchronous code in a more readable way using async and await.
var fetchDataAdi = async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json()
    console.log(data)
}
fetchDataAdi();



// Summary
// Function Declaration: function myFunc() { }
// Function Expression: const myFunc = function() { }
// Arrow Function: const myFunc = () => { }
// Immediately Invoked Function Expression (IIFE): (function() { })();
// Generator Function: function* myGenerator() { }
// Function Constructor: const myFunc = new Function('a', 'b', 'return a + b');
// Object Method Shorthand: const obj = { myMethod() { } }
// Anonymous Function: setTimeout(function() { }, 1000);
// Async Function: const myFunc = async () => { }
// Each method has its own use case and benefits depending on what you're trying to achieve in your code.








