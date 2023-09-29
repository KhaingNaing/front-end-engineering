let signupForm = document.forms.create_account;

const isEmpty = (value) => {
    return value === "";
}

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = signupForm.elements.Username.value;
    const date = signupForm.elements.date.value;
    const pass1 = signupForm.elements.password_1.value;
    const pass2 = signupForm.elements.password_2.value;
    const state = signupForm.elements.state.value;
    const photo = signupForm.elements.photo.value;

    if (isEmpty(username) || isEmpty(date) ||
        isEmpty(pass1) || isEmpty(pass2) ||
        isEmpty(state) || isEmpty(photo)) {
            alert('Please enter all fields!');
    } 
    else if (pass1 !== pass2) {
        alert(`Passwords doesn't match`);
    }
    else {
        alert(`Form submitted!\n${username} ${date} ${pass1} ${pass2} ${state} ${photo}`);
    }

})