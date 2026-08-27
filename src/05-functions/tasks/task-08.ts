/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type submission = {
    student: string
    submitted: boolean
    score: number
}

const submissions: submission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(data: submission[]): number {
    return data.length
}

function countSubmittedAssignments(data: submission[]): number {
    return data.filter(item => item.submitted).length
}

function countMissingAssignments(data: submission[]): number {
    return data.filter(item => !item.submitted).length
}

function countPassedStudents(data: submission[]): number {
    return data.filter(item => item.submitted && item.score >= 75).length
}

function countRevisionStudents(data: submission[]): number {
    return data.filter(item => item.submitted && item.score < 75).length
}

function calculateAverageScore(data: submission[]): number {
    const totalScore = data.reduce((total, item) => total + item.score, 0)
    return totalScore / data.length
}

function findHighestScore(data: submission[]): number {
    return Math.max(...data.map(item => item.score))
}

function findLowestScore(data: submission[]): number {
    return Math.min(...data.map(item => item.score))
}

function displayReport(data: submission[]): void {
    console.log("=== LMS Assignment Report ===")
    console.log("Total Students:", countTotalStudents(data))
    console.log("Submitted Assignments:", countSubmittedAssignments(data))
    console.log("Missing Assignments:", countMissingAssignments(data))
    console.log("Passed Students:", countPassedStudents(data))
    console.log("Students Requiring Revision:", countRevisionStudents(data))
    console.log("Average Score:", calculateAverageScore(data))
    console.log("Highest Score:", findHighestScore(data))
    console.log("Lowest Score:", findLowestScore(data))
}

displayReport(submissions)