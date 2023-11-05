const fs = require('fs').promises;

const file1 = fs.readFile('chapter1.txt', 'utf-8');
file1
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

const file2 = fs.readFile('chapter2.txt', 'utf-8');
file2
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

const file3 = fs.readFile('chapter3.txt', 'utf-8');
file3
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

const file4 = fs.readFile('chapter4.txt', 'utf-8');
file4
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

const file5 = fs.readFile('chapter5.txt', 'utf-8');
file5
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

console.log("Promises allSettled demo: ");
const allSettle = Promise.allSettled([file1, file2, file3, file4, file5]);

allSettle.then(results => {
    results.forEach(result => console.log(result.status))
})

console.log("Promises all demo: ");
const all = Promise.all([file1, file2, file3, file4, file5]);

all.then(result => console.log(result))
