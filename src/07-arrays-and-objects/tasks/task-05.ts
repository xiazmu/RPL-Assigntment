/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentScores = students.map(student => {
    const correct = student.answers.filter(
        (answer, index) => answer === correctAnswers[index]
    ).length;

    return {
        ...student,
        score: correct * 20
    };
});

console.log("Student Scores:", studentScores);


const passedStudents = studentScores.filter(student => student.score > 70);

console.log("Passed Students:", passedStudents);


const highestScore = studentScores.reduce((highest, student) => {
    return student.score > highest.score ? student : highest;
});

console.log("Highest Score:", highestScore);


const totalScore = studentScores.reduce(
    (total, student) => total + student.score,
    0
);

const averageScore = totalScore / studentScores.length;

console.log("Average Score:", averageScore);