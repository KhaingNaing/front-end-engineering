## What we know
JS has asynchronicity built in by default 
- meaning things tend to be async by default (e.g. callbacks)
- meaning not linear and all things happen at the same time (not executing in order)
- to solve you can use nested-if (very ugly and complicated code)

# Promises: Evolution of callbacks
- Promises like callbacks help to manage delayed completion of blocking code (IO events)
- Promises provides callback pattern like solution but with more powerful capabilities and cleaner code 

## const fs = require('fs').promises;
- e.g. Linear Case
    cost file1 = fs.readFile();     // this return your promise (i.e. a delayed piece of info that hasn't been finished or executed)
    file1.then(data => {});
    file1.catch(err => {})

    cost file2 = fs.readFile();     // this return your promise (i.e. a delayed piece of info that hasn't been finished or executed)
    file2.then(data => {});
    file2.catch(err => {})
    OR 

    fs.readFile() .then(data => {}) .catch(err => {})
    // Promise { ... }. then (if success). catch (if error)


- e.g. Nested case
    const file1 = fs.readFile();
        file1
        .then(data => {
            // do something with file1 data

            // open file2 
            const file2 = fs.readFile();
            file2
            .then(data => {
                // do something with file2 data

            })
            // err for file2
            .catch (err => {})
        })
        // err for file1
        .catch (err => {})

## How are promises written?
- Constructor: 
    - accepts a callback that takes resolve() and reject() funcs
    - Fulfillment = calling resolve()
    - Rejection = calling reject()

- .then:
    - most common way to chain promises
    - executes the nest action if previous one fulfilled

- .catch:
    - catch all error handler for the chain promises 

- e.g. 
    // create a new Promise
    const myPromise = new Promise( (resolve, reject) => {
        // if action succeeds, call resolve() with the result 
        // error, if action failed, call reject() with the reason
    }
    );

    myPromise.then(
        () => {
            // this callback will be called if myPromise is fulfilled
        },
        () => {
            // this specific callback will be called if myPromise is rejected
        }
    );

    // In addition to giving a callback for errors in .then(), can add a 
    // catch-all error handler as .catch()
    myPromise.catch(
        () => {
            // handle the problem here 
        }
    )
### Promise Example
- e.g. 
    const readFilePromise = (filename, encoding) => {
        return new Promise(resolve, reject) => {
            fs.readFile(filename, encoding, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })
        }
    }

### Promise states
- Pending: still executing 
- Settled: 
    - fulfilled: Done! call resolve()
    - rejected: Error! call reject()

## Promise Chaining
e.g 
    file1
    .then (data => {
        ///
        return file2promise
    })
    .then (data => {
        ///
        return file3promise
    })
    .then (data => {
        /// final file 
    })
    .catch (err => {
        /// error 
    })

## Promise branching
e.g.
    const dinnerPlans = startToPrepareDinner();
    // all three execute at the same time 
    dinnerPlans
        .then(lightBBQ).then(cookSteak);    // execute sequently (all then)
    
    dinnerPlans
        .then(startMusic);

    dinnerPlans
        .then(watchSunset).then(reflect);


## Promise Error handling 
- Errors/Exceptions always cause rejections 
see mdm promises 

## Promise Orchestration 
* Promise.all([...])
    - returns a promise that resolves iff all of promises passed to it resolve 
* Promise.allSettled([...])
    - returns a promise that resolve once all of the promises passed to it are resolved or rejected
* Promise.any([...])
    - returns a promise that resolves if at least one of the promises passed to it resolves
* Promise.race([...])
    - returns a promise which resolves as soon as one of the promises passed to it resolves
* Promise.reject(val)
    - immediately return a rejected promise with a value 
* Promise.resolve(val)
    - immediately return a resolved promised with a value 
