/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
type Enrollment = {
    student: string
    course: string
    completed: boolean
    score: number
    duration: number
}
const enrollments: Enrollment[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function getTotalEnrollments(data: Enrollment[]): number {
    return data.length
}

function getCompletedEnrollments(data: Enrollment[]): number {
    return data.filter(enrollment => enrollment.completed).length
}

function getIncompleteEnrollments(data: Enrollment[]): number {
    return data.filter(enrollment => !enrollment.completed).length
}

function getCompletionPercentage(data: Enrollment[]): number {
    return (
        getCompletedEnrollments(data) /
        getTotalEnrollments(data)
    ) * 100
}

function getHighestScore(data: Enrollment[]): number {
    return Math.max(
        ...data.map(enrollment => enrollment.score)
    )
}

function getLowestScore(data: Enrollment[]): number {
    return Math.min(
        ...data.map(enrollment => enrollment.score)
    )
}

function getAverageScore(data: Enrollment[]): number {
    const totalScore = data.reduce(
        (total, enrollment) => total + enrollment.score,
        0
    )

    return totalScore / getTotalEnrollments(data)

}

function getPassingStudents(data: Enrollment[]): string[] {
    return data
    .filter(enrollment => enrollment.score >= 75)
    .map(enrollment => enrollment.student)
}

function getStudentsByCourse(
    data: Enrollment[],
    course: string
): number {
    return data.filter(
        enrollment => enrollment.course === course
    ).length
}

function getAverageScoreByCourse(
    data: Enrollment[],
    course: string
): number {
    const courseEnrollments = data.filter(
        enrollment => enrollment.course === course
    )

    const totalScore = courseEnrollments.reduce(
        (total, enrollment) => total + enrollment.score,
        0
    )

    return totalScore / courseEnrollments.length

}

function getTotalLearningHours(data: Enrollment[]): number {
    return data.reduce(
        (total, enrollment) => total + enrollment.duration,
        0
    )
}

function getAverageLearningDuration(data: Enrollment[]): number {
    return (
        getTotalLearningHours(data) / 
        getTotalEnrollments(data)
    )
}

function printCompletionStatistics(data: Enrollment[]): void {
    console.log("===== COMPLETION STATISTIC =====")

    console.log(
        "Total Enrollments:",
        getTotalEnrollments(data)
    )

    console.log(
        "Completed Enrollments:",
        getCompletedEnrollments(data)
    )

    console.log(
        "incompleteEnrollments:",
        getIncompleteEnrollments(data)
    )
    
    console.log(
        "Completion Percentage:",
        getCompletionPercentage(data).toFixed(2) + "%"
    )
}

function printDashboard(data: Enrollment[]): void {
    console.log("\n===== ACADEMIC STATISTICS =====")

    console.log(
        "Highest Score:",
        getHighestScore(data)
    )

    console.log(
        "Lowest Score:",
        getLowestScore(data)
    )

    console.log(
        "Average Score:",
        getAverageScore(data).toFixed(2)
    )

    console.log(
        "Passing Students:",
        getPassingStudents(data).join(", ")
    )

    console.log("\n===== COURSE STATISTICS =====")

    console.log(
        "TypeScript Students:",
        getStudentsByCourse(data, "TypeScript")
    )

    console.log(
        "TypeScript Average Score:",
        getAverageScoreByCourse(data, "TypeScript").toFixed(2)
    )

    console.log(
        "Database Students:",
        getStudentsByCourse(data, "Database")
    )

    console.log(
        "Database Average Score:",
        getAverageScoreByCourse(data, "Database").toFixed(2)
    )

    console.log(
        "Backend Students:",
        getStudentsByCourse(data, "Backend")
    )

    console.log(
        "Backend Average Score:",
        getAverageScoreByCourse(data, "Backend").toFixed(2)
    )

    console.log("\n===== LEARNING STATISTICS =====")

    console.log(
        "Total Learning Hours:",
        getTotalLearningHours(data)
    )

    console.log(
        "Average Learning Duration:",
        getAverageLearningDuration(data).toFixed(2)
    )
}


printCompletionStatistics(enrollments)
printDashboard(enrollments)