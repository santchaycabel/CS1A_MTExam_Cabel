let DSA = [];
let WebDev = [];

let subject = prompt("Select a subject: (A) DSA or (B) WebDev");

while (true) {
let choice = prompt("A. Enroll\nB. Unenroll\nC. Change Subject\nD. Exit");

if (choice === "A") {  
    let student = prompt("Enter student name to enroll:");  
    if (subject === "A") {  
        DSA.push(student);  
    } else {  
        WebDev.push(student);  
    }  
    alert(student + " enrolled successfully.");  

} else if (choice === "B") {  
    let student = prompt("Enter student name to unenroll:");  
    if (subject === "A") {  
        DSA = DSA.splice();  
    } else {  
        WebDev = WebDev.splice();  
    }  
    alert(student + "unenrolled successfully.");  

} else if (choice === "C") {  
    subjects = prompt("Select a subject: (A) DSA or (B) WebDev");  

} else if (choice === "D") {  
    alert("DSA Students: " + DSA + "\nWebDev Students: " + WebDev);  
    alert("Program returned.");  
    break;  

} else {  
    alert("Invalid choice. Try again.");  
}

}


