/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedCount: number = 0
let notSubmittedCount: number = 0
let passedCount: number = 0
let reviseCount: number = 0
let totalScore: number = 0

console.log("=== LMS Assignment Report ===")
console.log("Students Who Did Not Submit:")

for (let i: number = 0; i < submissions.length; i++) {

    totalScore += submissions[i].score

    if (submissions[i].submitted) {
        submittedCount++

        if (submissions[i].score >= 75) {
            passedCount++
        } else {
            reviseCount++
        }

    } else {
        notSubmittedCount++
        console.log(`- ${submissions[i].student}`)
    }
}

console.log("\nStudents Who Must Revise:")

for (let i: number = 0; i < submissions.length; i++) {
    if (submissions[i].submitted && submissions[i].score < 75) {
        console.log(`- ${submissions[i].student}`)
    }
}

const averageScore: number = totalScore / submissions.length

console.log(`\nSubmitted Assignments : ${submittedCount}`)
console.log(`Did Not Submit        : ${notSubmittedCount}`)
console.log(`Passed Students       : ${passedCount}`)
console.log(`Need Revision         : ${reviseCount}`)
console.log(`Average Score         : ${averageScore}`)