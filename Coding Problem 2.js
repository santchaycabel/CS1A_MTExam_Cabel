// Create a new JavaScript file named classSubjects.js.
// Collect the following user information with the use of prompt():
// Subject Title
// Class Schedule (Time, Days)
// Classroom
// Class Instructor
// Student Name
// Use variables to store this information and log it to the console following the string “[Student Name] is currently enrolled in [Subject Title] with a class schedule of [Class Schedule] at room [Classroom]. The instructor for the subject is [Class Instructor]”

let studentName = prompt("Please enter the student's name:");
let subjectTitle = prompt("Please enter the subject title:");
let classSchedule = prompt("Please enter the class schedule (Time, Days):");
let classroom = prompt("Please enter the classroom:");
let classInstructor = prompt("Please enter the class instructor's name:");

console.log(${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor});
