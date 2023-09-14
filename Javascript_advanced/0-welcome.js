/*Lexical scoping and welcome message
This script creates a function call welcome*/

const welcome = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;

    const displayFullName = () => {
        alert(`Welcome ${fullName}!`)
    }
    displayFullName()
}