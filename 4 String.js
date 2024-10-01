let firstName="Aditya Patel"


// Use of == in String
console.log(5 == '5');              //5 == '5';        // true (number 5 is converted to string '5')
console.log(true == 1);             //true == 1;       // true (true is coerced to 1)
console.log(false == 0);            //false == 0;      // true (false is coerced to 0)
console.log(null == undefined);     //null == undefined; // true (they are considered equivalent)

// Use of === in String
console.log(5 === '5');             // 5 === '5';       // false (different types: number and string)
console.log(true === 1);            // true === 1;      // false (different types: boolean and number)
console.log(false === 0);           // false === 0;     // false (different types: boolean and number)
console.log(null === undefined);    // null === undefined; // false (different types: null and undefined)
console.log(5 === 5);               // 5 === 5;         // true (same type and value)




console.log(firstName.trim);
console.log(firstName.toLowerCase);
console.log(firstName.toUpperCase);

console.log(firstName.charAt(0));   //returns the character at particular index
console.log(firstName.charAt(1));   //returns the character at particular index
console.log(firstName.charAt(2));   //returns the character at particular index

console.log(firstName.charCodeAt(0));   //returns a UTF-16 code (an integer between 0 and 65535).
console.log(firstName.charCodeAt(1));   //returns a UTF-16 code (an integer between 0 and 65535).
console.log(firstName.charCodeAt(2));   //returns a UTF-16 code (an integer between 0 and 65535).

console.log(firstName.at(0));   //returns the character at particular index introduced in ES2022 
console.log(firstName.at(1));   //returns the character at particular index introduced in ES2022 
console.log(firstName.at(2));   //returns the character at particular index introduced in ES2022 

// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).


console.log(firstName.length);
console.log(firstName.length);
console.log(firstName.length);
console.log(firstName.length);
console.log(firstName.length);

