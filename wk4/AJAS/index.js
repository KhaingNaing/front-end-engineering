

function textInject(tag, str) {
    const elem = document.createElement(tag);
    elem.textContent = str;

    document.body.appendChild(elem);
};

function fetchIP() {
    // create a XMLHttpRequest (XHR) and fetch your IP
    const url = "https://api.ipify.org/?format=json";       // {"ip":"129.94.8.0"}

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            console.log(result);
            document.getElementById('ip-txt').textContent = result.ip;

            textInject("h3", "We know where you are...");
        } else {
            console.error("Could not get IP. RIP")
        }
    }

    try {
        xhr.send();
    }
    catch (e) {
         console.error("Could not get IP address.")
    }
}

function main() {
    document.getElementById("ip-fetch-btn").addEventListener('click', fetchIP);
}

main();