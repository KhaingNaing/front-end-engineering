/*
    Whilst promises are an improvement from callbacks, they can still create unnecessarily verbose code for trying to use async code synchronously in simple ways.
    (e.g. .then(..).then(...).then(...).catch(error ...))

    Benefit of async/await becomes more noticeable when doing substantially more async calls that you want to process linearly 

    Below is the equivalent to Promises chaining (await do not have equivalent code for branching)
*/

const { read } = require('fs');

// await means stop and wait until the current promise done 
const fs = require('fs').promises;

const readFiles = async () => {
    let data = '';
    try {
        data = await fs.readFile('chapter1.txt', 'utf-8');
        console.log(data);
        data = await fs.readFile('chapter2.txt', 'utf-8');
        console.log(data);
        data = await fs.readFile('chapter3.txt', 'utf-8');
        console.log(data);
        data = await fs.readFile('chapter4.txt', 'utf-8');
        console.log(data);
        data = await fs.readFile('chapter5.txt', 'utf-8');
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }

    return '7';
}


// similar to branching
readFiles().then(data => console.log(data));
