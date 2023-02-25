/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);


// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum1 = addTwoNumbers(3, 5);
console.log(sum);


// Single Line Arrow Function With Parameters
//const addTwoNumbers2 = (a + b) => (a + b); Also valid
const addTwoNumbers2 = (a + b) => a + b;
let sum2 = addTwoNumbers2(4, 6);
console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(saySomething);
saySomething("Hello world!");

const sayHello = () => console.log("Hello!")


// Returning Multiple Lines
const multiLineReturn = () => (
    `<p>
        This is a multiline string.
    <p>`
)
console.log(multiLineReturn());
