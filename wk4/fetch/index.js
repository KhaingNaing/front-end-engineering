function getFile() {
    // {"categories":[],"created_at":"2020-01-05 13:42:25.352697","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"amuiE9JxT-66CTvrnGLQlg","updated_at":"2020-01-05 13:42:25.352697","url":"https://api.chucknorris.io/jokes/amuiE9JxT-66CTvrnGLQlg","value":"Chuck Norris likes to drop kick nuns at the full moon. The craters are direct hits."}
    const url = "https://api.chucknorris.io/jokes/random/bob";

    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error(`Error: ${res.status}`);
            }
        })
        .then(data => {
            document.getElementById('meme-txt').textContent = data.value;
        })
        .catch (err => {
            console.error("There was a network error!!!")
        })


    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", url);

    // xhr.onload = () => {
    //     if (xhr.status === 200) {
    //         const meme = JSON.parse(xhr.response);

    //         document.getElementById('meme-txt').textContent = meme.value;
    //     }
    //     // for when things go wrong at the end of the way
    //     else {
    //         console.error(`${xhr.status}: ${xhr.statusText}`)
    //     }
    // }

    // // for when things go wrong along the way
    // xhr.onerror = () => {
    //     console.error("Could not complete sending request");
    // }

    // // for when things go wrong at the start of the way 
    // try {
    //     xhr.send();
    // }
    // catch (e) {
    //     console.error("Cannot send request!");
    // }
}

function main() {
    document.getElementById('fetch-btn').addEventListener('click', getFile)
}

main();