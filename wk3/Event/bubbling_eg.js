let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');

first.onclick = () => {
    alert('First');
};

second.onclick = () => {
    alert('Second');
};

third.onclick = (event) => {
    event.stopPropagation();
    alert('Third');
};