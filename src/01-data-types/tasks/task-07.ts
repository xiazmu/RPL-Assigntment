/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
  studentId: string
  fullName: string
  gradeLevel: number
  courseId: string
  courseTitle: string
  instructorName: string
  totalLearningHours: number
  registrationDate: string
  paymentCompleted: boolean
}

const registration1: Registration = {
  studentId: "STD001",
  fullName: "Alya Putri",
  gradeLevel: 11,
  courseId: "CRS001",
  courseTitle: "Basic JavaScript",
  instructorName: "Budi Santoso",
  totalLearningHours: 20,
  registrationDate: "2026-07-29",
  paymentCompleted: true
}

const registration2: Registration = {
  studentId: "STD002",
  fullName: "Dimas Pratama",
  gradeLevel: 12,
  courseId: "CRS002",
  courseTitle: "TypeScript Fundamentals",
  instructorName: "Siti Rahma",
  totalLearningHours: 25,
  registrationDate: "2026-07-29",
  paymentCompleted: true
}

const registration3: Registration = {
  studentId: "STD003",
  fullName: "Raka Wijaya",
  gradeLevel: 10,
  courseId: "CRS003",
  courseTitle: "Python Programming",
  instructorName: "Andi Wijaya",
  totalLearningHours: 30,
  registrationDate: "2026-07-30",
  paymentCompleted: false
}

console.log("=== Online Learning Course Registration ===")

console.log("\nRegistration 1:")
console.log(`Student ID          : ${registration1.studentId}`)
console.log(`Full Name           : ${registration1.fullName}`)
console.log(`Grade Level         : ${registration1.gradeLevel}`)
console.log(`Course ID           : ${registration1.courseId}`)
console.log(`Course Title        : ${registration1.courseTitle}`)
console.log(`Instructor          : ${registration1.instructorName}`)
console.log(`Learning Hours      : ${registration1.totalLearningHours} hours`)
console.log(`Registration Date   : ${registration1.registrationDate}`)
console.log(`Payment Completed   : ${registration1.paymentCompleted}`)

console.log("\nRegistration 2:")
console.log(`Student ID          : ${registration2.studentId}`)
console.log(`Full Name           : ${registration2.fullName}`)
console.log(`Grade Level         : ${registration2.gradeLevel}`)
console.log(`Course ID           : ${registration2.courseId}`)
console.log(`Course Title        : ${registration2.courseTitle}`)
console.log(`Instructor          : ${registration2.instructorName}`)
console.log(`Learning Hours      : ${registration2.totalLearningHours} hours`)
console.log(`Registration Date   : ${registration2.registrationDate}`)
console.log(`Payment Completed   : ${registration2.paymentCompleted}`)

console.log("\nRegistration 3:")
console.log(`Student ID          : ${registration3.studentId}`)
console.log(`Full Name           : ${registration3.fullName}`)
console.log(`Grade Level         : ${registration3.gradeLevel}`)
console.log(`Course ID           : ${registration3.courseId}`)
console.log(`Course Title        : ${registration3.courseTitle}`)
console.log(`Instructor          : ${registration3.instructorName}`)
console.log(`Learning Hours      : ${registration3.totalLearningHours} hours`)
console.log(`Registration Date   : ${registration3.registrationDate}`)
console.log(`Payment Completed   : ${registration3.paymentCompleted}`)