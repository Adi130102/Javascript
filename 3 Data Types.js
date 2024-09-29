
// 2 Type of Data types mainly :
//     primitive data types
//     non-primitive data types


// 1. **Primitive Data Types**
// Primitive data types represent simple, immutable values. 
// They are not objects and don't have methods.

// a) Number
//    - Represents both integer and floating-point numbers.
//    - Example: `42`, `3.14`
//    - Special values: 
//      - `Infinity` (e.g., `1/0`)
//      - `-Infinity`
//      - `NaN` (Not a Number, e.g., `0/0`)

   let x = 5;       // Integer
   let y = 3.14;    // Floating-point
   let z = NaN;     // Not a Number

   console.log(x, y + " & " + z);

// b) String
//    - Represents text data enclosed in quotes (single, double, or backticks for template literals).
//    - Example: `"Hello"`, `'World'`, \`Template Literals\`

//    **Example**:
   let names = "Aditya";
   let greeting = `Hello, ${names}!`;  // Template literal

   console.log(names);
   console.log(greeting);


// c) Boolean
//    - Represents logical values: `true` or `false`.
//    - Example: `true`, `false`

    let isStudent = true;
    console.log(isStudent);

//  d) Undefined
//    - A variable that has been declared but not assigned a value has the type `undefined`.
//    - Example: `let a;  // a is undefined`

   let k;  // Undefined
   console.log(k);  // Outputs: undefined

// e) Null
//    - Represents the intentional absence of any object value. It's used when you want to explicitly assign "nothing" or "empty" to a variable.
//    - Example: `let y = null;`

   let l = null;
   console.log(l);  // Outputs: null

// f) Symbol (ES6)
//    - Represents a unique, immutable value used primarily as object keys. Every `Symbol` is guaranteed to be unique.
//    - Example: `Symbol('description')`

    let sym = Symbol('unique');
    console.log(sym);  // Outputs: null

// #### g) **BigInt** (ES2020)
//    - Used for arbitrarily large integers. It can represent numbers larger than the `Number` type can handle.
//    - Example: `123n`, `BigInt(123)`

//    **Example**:
//    ```javascript
//    let bigNumber = 1234567890123456789012345678901234567890n;
//    ```

// ### 2. **Non-Primitive Data Types (Objects)**
// Non-primitive data types are objects. Objects are mutable and store collections of data or more complex entities.

// #### a) **Object**
//    - A collection of key-value pairs, where values can be any data type.
//    - Example:
//      ```javascript
//      let person = {
//          name: "Aditya",
//          age: 22,
//          isStudent: true
//      };
//      ```

// #### b) **Array**
//    - A special type of object used to store lists of values (indexed by numbers).
//    - Example:
//      ```javascript
//      let colors = ["red", "green", "blue"];
//      ```

// #### c) **Function**
//    - In JavaScript, functions are objects. They can be assigned to variables, passed as arguments, or returned from other functions.
//    - Example:
//      ```javascript
//      function greet() {
//          return "Hello";
//      }
//      ```

// #### d) **Date**
//    - A built-in object for handling dates and times.
//    - Example:
//      ```javascript
//      let currentDate = new Date();
//      ```

// ### 3. **Special Types**
// #### a) **Array**
//    - Arrays in JavaScript are objects but with special methods and properties to work with ordered collections of values.
//    - Example:
//      ```javascript
//      let numbers = [1, 2, 3];
//      ```

// #### b) **Function**
//    - Functions are a special type of object in JavaScript. They can be assigned to variables, passed as arguments, and returned from other functions.
//    - Example:
//      ```javascript
//      function add(a, b) {
//          return a + b;
//      }
//      ```

// // ### Type Detection
// // To check the type of a value, you can use the `typeof` operator.

console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (this is a known JavaScript quirk)
console.log(typeof Symbol());     // "symbol"
console.log(typeof 123n);         // "bigint"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object" (arrays are also objects)
console.log(typeof function(){}); // "function"

// ### Summary:
// - **Primitive types**: `Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`
// - **Non-Primitive types**: `Object` (including `Array`, `Function`, `Date`)