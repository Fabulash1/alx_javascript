/*Closure and loops:
 Write a function named createClassRoom*/

const createClassRoom = (numbersOfStudents) => {
    const studentSeat = (seat) => {
        return function () {
            return seat;
        }
    }
    let students = []
    for (let i = 0; i <= numbersOfStudents; i++) {
        students.push(studentSeat(i + 1))
    }
    return students
}

let classRoom = createClassRoom(10)
