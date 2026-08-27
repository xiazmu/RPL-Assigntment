/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let gradeA: number = 0
let gradeB: number = 0
let gradeC: number = 0
let gradeD: number = 0

let highestScore: number = students[0].score
let lowestScore: number = students[0].score
let totalScore: number = 0;

for (let i: number = 0; i < students.length; i++) {

    totalScore += students[i].score

    if (students[i].score >= 90) {
        gradeA++
    } else if (students[i].score >= 80) {
        gradeB++
    } else if (students[i].score >= 70) {
        gradeC++
    } else {
        gradeD++
    }

    if (students[i].score > highestScore) {
        highestScore = students[i].score
    }

    if (students[i].score < lowestScore) {
        lowestScore = students[i].score
    }
}

const averageScore: number = totalScore / students.length

console.log("=== Backend Development Course Report ===")
console.log(`Grade A Students : ${gradeA}`)
console.log(`Grade B Students : ${gradeB}`)
console.log(`Grade C Students : ${gradeC}`)
console.log(`Grade D Students : ${gradeD}`)
console.log(`Highest Score    : ${highestScore}`)
console.log(`Lowest Score     : ${lowestScore}`)
console.log(`Average Score    : ${averageScore}`)
