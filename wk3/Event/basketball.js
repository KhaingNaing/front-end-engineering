const HOOP_OFFSET_MAX_Y = 161;
const HOOP_OFFSET_MIN_Y = 148;
const HOOP_OFFSET_MAX_X = 227;
const HOOP_OFFSET_MIN_X = 73;

let cursorInBallOffsetY = 0;
let cursorInBallOffsetX = 0;
let score = 0;
let hasScore = false;

const ball = document.getElementById('basketball');
const hoop = document.getElementById('hoop');
const scoreboard = document.getElementById('scoreboard');

const onMouseMove = (event) => {
    // console.log('mouse move');
    event.preventDefault();

    ball.style.left = event.clientX - cursorInBallOffsetX + 'px';
    ball.style.top = event.clientY - cursorInBallOffsetY + 'px';

    const hoopRect = hoop.getBoundingClientRect();

    if (event.clientX > hoopRect.left + HOOP_OFFSET_MIN_X
        && event.clientX < hoopRect.left + HOOP_OFFSET_MAX_X
        && event.clientY > hoopRect.top + HOOP_OFFSET_MIN_Y
        && event.clientY < hoopRect.left + HOOP_OFFSET_MAX_Y) {
        if (!hasScore) {
            score += 1;
            scoreboard.textContent = `Score: ${score}`;
        }
        hasScore = true;
    }
    else {
        hasScore = false;
    }
}

ball.addEventListener('mousedown', () => {
    // console.log('mouse down');
    document.addEventListener('mousemove', onMouseMove);

    // prevent ball jumping on first mouse down 
    const ballRect = ball.getBoundingClientRect();
    cursorInBallOffsetX = event.clientX - ballRect.left;
    cursorInBallOffsetY = event.clientY - ballRect.top;
});

ball.addEventListener('mouseup', () => {
    // console.log('mouse up');
    document.removeEventListener('mousemove', onMouseMove);
});
