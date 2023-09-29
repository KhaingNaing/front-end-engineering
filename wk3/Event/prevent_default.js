const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', (event) => {
    event.preventDefault();
})

const textbox = document.getElementById('textbox');

textbox.addEventListener('keypress', (event) => {
    // event.preventDefault();
    
    // not allow upper case letter
    if (event.charCode < 97 || event.charCode > 122) {
        event.preventDefault();
        alert('please only use lowercase letter');
    }
})