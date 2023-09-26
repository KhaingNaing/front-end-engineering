/*  Higher Order function 
    - functions that return functions (like a mini function factory)
*/

function congradMarkPS(name: string) {
    return `Congradulations ${name} on your pass`;
}
function congradMarkCR(name: string) {
    return `Congradulations ${name} on your credit`;
}
function congradMarkDN(name: string) {
    return `Congradulations ${name} on your distinction`;
}
console.log(congradMarkCR('Khaing'));

// other way
function congradMark(name: string, grade: 'pass'|'credit'|'distinction') {
    return `Congradulations ${name} on your ${grade}`;
}
console.log(congradMark('Khaing', 'distinction'));
console.log(congradMark('Khaing', 'credit'));
console.log(congradMark('Hayden', 'pass'));

// another way (creating a wrapper) Higher Order Func
// this function return a function 
function genCongradMark(markstr: 'pass'|'credit'|'distinction') {
    const ret = function(name: string) {
        return `Congradulations ${name} on your ${markstr}`;
    }
    return ret;
}

const congradMarkPS1 = genCongradMark('pass');
const congradMarkCR1 = genCongradMark('credit');
const congradMarkDN1 = genCongradMark('distinction');

console.log(congradMarkPS1('Khaing'));
console.log(congradMarkCR1('Khaing'));
console.log(congradMarkDN1('Khaing'));