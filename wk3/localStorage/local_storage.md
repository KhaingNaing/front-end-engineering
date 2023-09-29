# Persistance 
* state in React and JS is transient, meaning we lose it after a page refresh 
* sometimes we want data to be persistent between sessions
* This can be done using database (server-side) or via localstorage i.e. on user's machine (client-side)

# Local Storage 
* window.localStorage is an API (allows read/write to a storage obj in the document)
* stored data in this storage obj is persisted between sessions, meaning we can save and retrieve data when use closes browser or tag

### when to use it 
    - when there is no server 
    - for data which is not crucial if it is lost 
    - for data specific to one user only

### when not to use 
    - when security of data is important 
    - for large amounts of data
    - for complex data
    - data needed on multiple devices 

## Localstorage API
```
// add a data item given the key and value
localStorage.setItem(key, value);

// Retrieves an item from localstorage given a key 
const value = localStorage.getItem(key);

// Remove an item given a key from localstorage
localStorage.removeItem(key);

// Remove all items from localStorage
localStorage.clear();
```