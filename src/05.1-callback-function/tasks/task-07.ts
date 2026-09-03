/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

type student = {
    name: string
    score: number
    attendance: number
}

type PASS_STATUS = "PASS" | "FAIL"

type PERFORMANCE_CATEGORY =
    | "Excellent"
    | "Good"
    | "Needs Improvement"
    | "Poor"

type ATTENDANCE_STATUS =
    | "Good Attendance"
    | "Poor Attendance"

type RECOMMENDATION =
    | "Excellent"
    | "Good"
    | "Improve Attendance"
    | "Improve Academic Peromance"

const students: student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function getPassStatus(selectedStudent: student) {
    const status: PASS_STATUS =
    selectedStudent.score >= 75 &&
    selectedStudent.attendance >= 90
        ? "PASS"
        : "FAIL"

return {
    
}
}