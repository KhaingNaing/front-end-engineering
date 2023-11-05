# The Fetch API
* Promise-based native JS API to download remote resources
* Resolves if a Response is received, even if the HTTP status code is not 200
* Rejects if there is any network error
* Access the result of the request via chaining then()s
* Optional 2nd argument to fetch() can control the Request options e.g. 
    * Authentication
    * CORS
    * HTTP Method

e.g. 
    fetch(url, {
        method: "POST";     // this obj is optional

    })
        .then(res => res.json())        // return the body as JSON
        .then(js => console.log(js))    // finally access the JSON

## FETCH LIMITATIONS
XMLHttpRequest
- works even on very old browsers
- gives large download progress
- easily cancelled

FETCH 
- only work on browsers with promise support 
- promises not easily cancellable 
- More complex functionality implemented via the Streams API which has a non-trivial learning curve