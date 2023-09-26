/* Map, Reduce, Filter
    - functions that ac on array objs and help accomplish basic iterative tasks without loop setup 
    - based on ideas of first-class and anonymous functions
   
    Map: 
    - Modify an array (Same size array with modified elements)

   Filter:
    - Select from an array (no element is modified but size changed)

   Reduce:
    - Summarise an array (take a list and turn it into a single item)
*/
const tutors = [
    'Khaing',
    'Sean',
    'Clearence',
    'Noe'
]

// const shout = (str: string) => {
//     return `${str.toUpperCase()}!!!`;
// }

// const newList = []
// for (const tutor of tutors) {
//     const newtutor = shout(tutor);
//     newList.push(newtutor);
// }

// use map function instead (apply shout (anonymous function) to old list)
const newList = tutors.map((str: string) => `${str.toUpperCase()}!!!`)
console.log(tutors);
console.log(newList);

// filter function 
const marks = [65, 82, 71, 40, 56];
// const isPass = function (mark: number) {
//     return mark >= 50;
// };

// const newMark = [];
// for (const mark of marks) {
//     if (isPass(mark)) {
//         newMark.push(mark);
//     }
// }
const newMark = marks.filter((mark:number) => mark>=50);
console.log(newMark);

// Reduce function (not common)
type student = {
    name: string;
    mark: number;
};
const students = [
    {name: 'Khaing', mark: 90},
    {name: 'Hayden', mark: 85},
    {name: 'Sean', mark: 40}  
]

let single = 0;
for (const student of students) {
    single += student.mark;
}

const sum = (prev:number, curr:student) => {
    return prev + curr.mark;
};
const single1 = students.reduce(sum, 0);
const short_single = students.reduce((p, c)=> p + c.mark , 0); // shorthand !
console.log(short_single);
console.log(single, single1);