let blueSquare = document.querySelector(".second");
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    let pos = blueSquare.getBoundingClientRect();
    console.log(pos);

    window.scrollTo({
        top: pos.top,
        behavior: 'smooth',
    })
})