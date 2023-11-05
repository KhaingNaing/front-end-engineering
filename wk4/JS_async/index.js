

function textInject(tag, str) {
    const elem = document.createElement(tag);
    elem.textContent = str;
    document.body.append(elem);
    
}

function bar() {
    textInject("h2", "bar");
}

function boz() {
    console.log("Bye!!!")

    textInject("h3", "boz");
}


// use the event loop to makr bar and boz appear at diff times 
function foo() {
    textInject("h1", "foo");

    setTimeout(boz, 1000);
    console.log("Hello!!!")

    setTimeout(bar, 2500);

    // boz();
}

foo();