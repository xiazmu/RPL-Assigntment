/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
type Student = {
  name: string
  major: string
  active: boolean
}
const students: Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(data:Student[]): number {
  return data.filter(student => student.active).length
}

function countInactiveStudents(data: Student[]): number {
  return data.filter(student => !student.active).length
}

function countStudentsByMajor(data: Student[], major: string): number {
  return data.filter(student => student.major === major).length
}

function printEnrollmentReport(data: Student[]): void {
  console.log("=== Enrollment Report ===")
  console.log("Total Students:", data.length)
  console.log("Active Students:", countActiveStudents(data))
  console.log("Inactive Students:", countInactiveStudents(data))
  console.log(
    "Software Engineering:",
    countStudentsByMajor(data, "Software Engineering")
  )
  console.log(
    "Multimedia:",
    countStudentsByMajor(data, "Networking")
  )
  console.log(
    "Multimedia:",
    countStudentsByMajor(data, "Multimedia")
  )
}

const activeStudent = countActiveStudents(students)

console.log("Active Students:", activeStudent)

printEnrollmentReport(students)