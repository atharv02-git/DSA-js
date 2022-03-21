// Working with classes
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName; 
        this.birthYear = birthYear;
    }
}

let firstStudent = new Student('Atharv', 'Bhandare', 2001);
let secondStudent = new Student('Virat', 'Kohli', 1988)

firstStudent.birthYear = 2002;
console.log(firstStudent)
console.log(secondStudent)