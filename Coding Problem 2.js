// Create a new JavaScript file named classSubjects.js.
// Collect the following user information with the use of prompt():
// Subject Title
// Class Schedule (Time, Days)
// Classroom
// Class Instructor
// Student Name
// Use variables to store this information and log it to the console following the string “[Student Name] is currently enrolled in [Subject Title] with a class schedule of [Class Schedule] at room [Classroom]. The instructor for the subject is [Class Instructor]”

let subjectTitle = prompt("Enter the Subject Title:");
let classSchedule = prompt("Enter the Class Schedule (Time, Days):");
let classroom = prompt("Enter the Classroom:");
let classInstructor = prompt("Enter the Class Instructor:");
let studentName = prompt("Enter the Student Name:");

console.log(studentName + " is currently enrolled in " + subjectTitle + " with a class schedule of " + classSchedule + " at room " + classroom + ". The instructor for the subject is " + classInstructor + ".");
