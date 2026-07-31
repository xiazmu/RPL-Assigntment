/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
  studentId: string;
  fullName: string;
  age: number;
  isActive: boolean;
};

const student1: Student = {
  studentId: "STD001",
  fullName: "Alya Putri",
  age: 16,
  isActive: true
};

const student2: Student = {
  studentId: "STD002",
  fullName: "Dimas Pratama",
  age: 17,
  isActive: true
};

const student3: Student = {
  studentId: "STD003",
  fullName: "Raka Wijaya",
  age: 18,
  isActive: false
};

console.log("=== Student Information ===");

console.log("Student 1:");
console.log(`Student ID : ${student1.studentId}`);
console.log(`Full Name  : ${student1.fullName}`);
console.log(`Age        : ${student1.age}`);
console.log(`Active     : ${student1.isActive}`);

console.log("\nStudent 2:");
console.log(`Student ID : ${student2.studentId}`);
console.log(`Full Name  : ${student2.fullName}`);
console.log(`Age        : ${student2.age}`);
console.log(`Active     : ${student2.isActive}`);

console.log("\nStudent 3:");
console.log(`Student ID : ${student3.studentId}`);
console.log(`Full Name  : ${student3.fullName}`);
console.log(`Age        : ${student3.age}`);
console.log(`Active     : ${student3.isActive}`);