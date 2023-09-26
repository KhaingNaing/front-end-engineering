// const greeting = () => {
//     return 'hello';
// };

const printThere = () => {
    return 'there';
}

const greeting = (fn) => {
    return 'hello ' + fn();
}

// console.log(greeting(printThere));

const printName = (fn, name) => {
    console.log(fn(), name);
};

// This DOESN'T WORK!
// printName(greeting(printThere), 'Khaing');

const arg = greeting(printThere);
console.log(arg);
// because greeting return a value not a function and printName expects a function 

// a func that return another function 
const argfunc = () => {
    return greeting(printThere);
};
console.log(argfunc);

printName(argfunc, 'Khaing');
// use shorthand function 
printName(() => greeting(printThere), 'Khaing');


