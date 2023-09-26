/* Function Syntax */

// Method 1 (old school)
function sum(a,b) {
    return a + b;
}

// Method 2 (treat functions like variables)
const sum1 = function (a, b) {
    return a + b;
}

// Method 3 (more modern)
const sum2 = (a, b) => {
    return a + b;
}
// method 3 (Compact: so short!)
const sum3 = (a, b) => a + b;

console.log(sum3(3,4));