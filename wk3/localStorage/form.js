let signupForm = document.forms.create_account;

Array.from(signupForm).forEach(element => {
    element.addEventListener('change', () => {
        console.log(element.name, element.value);

        localStorage.setItem(element.name, element.value);
    })
    if (element !== 'photo' && element.type !== 'submit') {
        element.value = localStorage.getItem(element.name);
    }
})



const isEmpty = (value) => value === "";

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