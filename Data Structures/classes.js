// Working with classes
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName; 
        this.birthYear = birthYear;
        this.scores = []
    }
    // adding instance methods
    fullName() {
        return `Your full Name is ${this.firstName}`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAvg(){
        let sum = this.scores.reduce((prevVal, currentVal) => {return prevVal + currentVal })
        return sum/this.scores.length;
    }
}

let firstStudent = new Student('Atharv', 'Bhandare', 2001);
let secondStudent = new Student('Virat', 'Kohli', 1988)

// // firstStudent.birthYear = 2002;
// console.log(firstStudent)
// // console.log(secondStudent)
// console.log(firstStudent.fullName())

console.log(firstStudent.addScore(45))
console.log(firstStudent.addScore(65))
console.log(firstStudent.addScore(95))
console.log(firstStudent.calculateAvg())
