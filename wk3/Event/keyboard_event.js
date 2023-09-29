let square = document.getElementById('square');

const move = (left, top) => {
    const currentLeft = parseInt(square.style.left, 10) + left + "px";
    square.style.left = currentLeft;

    const currentTop = parseInt(square.style.top, 10) + top + "px";
    square.style.top = currentTop;
};

const handler = (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowDown':
            move(0, 5);
            break;
        case 'ArrowUp':
            move(0, -5);
            break;
        case 'ArrowLeft':
            move(-5, 0);
            break;
        case 'ArrowRight':
            move(5, 0);
            break;
    }
};

document.addEventListener('keydown', handler);