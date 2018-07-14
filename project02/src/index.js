/*function sayHello() {
    console.log('chuje');
}

sayHello();

const person = {
    name: 'Rafal',
    sayChuj() { console.log('No mowie!!') },
    showThis() { console.log(this) }
};

person.showThis();*/

/*const first = [1, 2, 3];
const clone = [...first];

first[1] = 5;

console.log(first);
console.log(clone);*/

// ------

import {Teacher} from './teacher'

const teacher01 = new Teacher("Emilia", "BSc");

teacher01.teach();
