

// using promises 
const fs = require('fs').promises;

const file1 = fs.readFile('chapter1.txt', 'utf-8');

file1
    .then(data => {
        console.log('Chapter 1: ', data);
        return fs.readFile('chapter2.txt', 'utf-8');
    })
    .then(data => {
        console.log('Chapter 2: ', data);
        return fs.readFile('chapter3.txt', 'utf-8');
    })
    .then(data => {
        console.log('Chapter 3: ', data);
        return fs.readFile('chapter4.txt', 'utf-8');
    })    
    .then(data => {
        console.log('Chapter 4: ', data);
        return fs.readFile('chapter5.txt', 'utf-8');
    })    
    .then(data => {
        console.log('Chapter 5: ', data);
    })
    .catch(error => {
        console.log("Error: ", error);
    })

