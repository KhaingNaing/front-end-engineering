/*Language: Javascript
    intrepreted/compiled:
    * Web Browser 
        - using html <script></script>
    * Command line (Nodejs)
        - node file.js
*/

console.log('Hello');
console.log(1 + 2);

// An immutable value (cannot be modified)
const constValue = 'hey'

// A mutable value (can be modified)
let variableValue = 0

// A mutable value (old syntax)
var anotherVariableValue = false;

const name = 'Khaing';
let age = 25;
// An object (key:value store)
let wildlifeWarriror = {
    name: name,
    age: age,
    gender: 'f',
};

console.log('name: ',name);
console.log('age: '+age);

console.log('Person: ', wildlifeWarriror);

let value;
value = 0.1;            // decimal 
value = 'some-string'   // string
value = true;           // boolean value 

// null value is kind of a value that define nothing (separate from undefined)
value = null;

// undefined represents no value and no variable  
value = undefined;

/*  ways to define JS function 
    1. An anonymous func 
    2. normal function 
    3. function defined without assignment to a variable 
*/

// anonymous func (encourage to use this since this is more compact)
value = (para1, para2) => {
    console.log(para1, para2);
};

// normal func 
value = function(para) {
    console.log('param = ', para);
}

// function without assignment 
function foo(bar) {
    return bar + 1;
}

// Calling a function 
const result = foo(10);
// pass result into value func define before that print para
value(result);          // print 11


let val1 = 10;
// change num to string 
let strVal = val1.toString();

// change string to num ( parseInt(string_value, base), use 10 base normally )
let numVal = parseInt(strVal, 10);

// JS Comparison (==) or (===)
/* 
    double equal:
        - if the values are the same?
    triple equal: (USE THIS!!!)
        - if the values and the types are the same?
*/
console.log(val1 == strVal);        // print true (10. '10')  
console.log(val1 === strVal);       // print false 
