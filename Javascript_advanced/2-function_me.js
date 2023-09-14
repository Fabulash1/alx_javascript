/*Closure:
 a function called welcome Message*/ 

const welcomeMessage = (fullName) => {
    const name = () => {
        alert(`Welcome ${fullName}`)
    }
    return name
}

let guillaume = welcomeMessage('Guillaume')
let alex = welcomeMessage('Alex')
let fred = welcomeMessage('Fred')
