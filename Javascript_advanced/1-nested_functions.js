/* This assigns a variable globalVariable with value welcome */

let globalVariable = 'Welcome';

const outer = () => {
    alert(globalVariable)
    let course = 'Holberton';

    const inner = () => {
        alert(`${globalVariable} ${course}`);
        let exclamation = '!';

        const inception = () => {
            alert(`${globalVariable} ${course} ${exclamation}`);
        }
        inception();
    }
    inner();
}
outer();
