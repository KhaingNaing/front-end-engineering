import { isValid } from 'date-fns';

function dateValid(y, m, d) {
    const date = new Date(y, m, d);
    console.log(date);
    return isValid(date);
}

console.log(dateValid('2022','14', '02'));