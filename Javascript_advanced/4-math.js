/*Complex Closure:
This creates 2 functions divideBy, addBy and 4 closures*/

const divideBy = (firstNumber) => {
    return function (secondNumber) {
        return secondNumber / firstNumber;
    }
}

const addBy = (firstNumber) => {
    return function (secondNumber) {
        return firstNumber + secondNumber;
    }
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100)