/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
  employeeId: string
  employeeName: string
  date: string
  checkIn: string
  checkOut: string
  totalWorkingHours: number
  isPresent: boolean
}

const attendance1: Attendance = {
  employeeId: "EMP001",
  employeeName: "Dimas Pratama",
  date: "2026-07-29",
  checkIn: "08:00",
  checkOut: "17:00",
  totalWorkingHours: 8,
  isPresent: true
}

const attendance2: Attendance = {
  employeeId: "EMP002",
  employeeName: "Alya Putri",
  date: "2026-07-29",
  checkIn: "08:15",
  checkOut: "17:15",
  totalWorkingHours: 8,
  isPresent: true
}

const attendance3: Attendance = {
  employeeId: "EMP003",
  employeeName: "Raka Wijaya",
  date: "2026-07-29",
  checkIn: "-",
  checkOut: "-",
  totalWorkingHours: 0,
  isPresent: false
}

console.log("=== Employee Attendance ===")

console.log("\nAttendance 1:")
console.log(`Employee ID         : ${attendance1.employeeId}`)
console.log(`Employee Name       : ${attendance1.employeeName}`)
console.log(`Date                : ${attendance1.date}`)
console.log(`Check-in Time       : ${attendance1.checkIn}`)
console.log(`Check-out Time      : ${attendance1.checkOut}`)
console.log(`Total Working Hours : ${attendance1.totalWorkingHours} hours`)
console.log(`Present             : ${attendance1.isPresent}`)

console.log("\nAttendance 2:")
console.log(`Employee ID         : ${attendance2.employeeId}`)
console.log(`Employee Name       : ${attendance2.employeeName}`)
console.log(`Date                : ${attendance2.date}`)
console.log(`Check-in Time       : ${attendance2.checkIn}`)
console.log(`Check-out Time      : ${attendance2.checkOut}`)
console.log(`Total Working Hours : ${attendance2.totalWorkingHours} hours`)
console.log(`Present             : ${attendance2.isPresent}`)

console.log("\nAttendance 3:")
console.log(`Employee ID         : ${attendance3.employeeId}`)
console.log(`Employee Name       : ${attendance3.employeeName}`)
console.log(`Date                : ${attendance3.date}`)
console.log(`Check-in Time       : ${attendance3.checkIn}`)
console.log(`Check-out Time      : ${attendance3.checkOut}`)
console.log(`Total Working Hours : ${attendance3.totalWorkingHours} hours`)
console.log(`Present             : ${attendance3.isPresent}`)