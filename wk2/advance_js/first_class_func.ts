/* First Class Functions
    - functions are treated like any other variables 
    (e.g. in js, a function can be passed as an argument to other function, can be returned by another function and can be assigned as a value to a variable)
    - used in terms of letting func takes in other function as arguments
    - allow us to create more concise and clear code 
    - fundamental part of understanding callback (i.e. passing func into other func)
*/

// Variable Definition 
const name1 = "Khaing";
console.log(name1);

// Function Definition 
const getName = () => {
    return "Khaing";
}
console.log(getName);

// function brackets(str: String) {
//     return `(${str})`;
// }
const brackets = (str: string) => `(${str})`;

// function allCaps(str: string) {
//     return `${str.toUpperCase()}`;
// }
const allCaps = (str: string) => `${str.toUpperCase()}`;

type Fmtr = (str: string) => string;

const formatNames = (list: string[], format: Fmtr) => {
    const newlist: string[] = [];
    for (const name of list) {
        newlist.push(format(name));
    }
    return newlist;
}

const names = ['Khaing', 'Myat', 'Noe'];
const newNames = formatNames(names, brackets);
const newCapNames = formatNames(names, allCaps);
console.log(newNames, newCapNames);