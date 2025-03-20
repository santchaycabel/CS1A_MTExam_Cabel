let DSA = [];
let WebDev = [];

let subject = prompt("Select a subject: (A) DSA or (B) WebDev");

while (true) {
    let choice = prompt("1. Enroll\n2. Unenroll\n3. Change Subject\n4. Exit");

    if (choice === "1") {
        let student = prompt("Enter student name to enroll:");
        subject === "A" ? DSA.push(student) : WebDev.push(student);
        alert(${student} enrolled successfully.);
        
    } else if (choice === "2") {
        let student = prompt("Enter student name to unenroll:");
        if (subject === "A") {
            DSA = DSA.filter(name => name !== student);
        } else {
            WebDev = WebDev.filter(name => name !== student);
        }
        alert(${student} unenrolled successfully.);
        
    } else if (choice === "3") {
        subject = prompt("Select a subject: (A) DSA or (B) WebDev").toUpperCase();
        
    } else if (choice === "4") {
        alert(DSA Students: ${DSA.join(", ") || "None"}\nWebDev Students: ${WebDev.join(", ") || "None"});
        alert("Program terminated.");
        break;
        
    } else {
        alert("Invalid choice. Try again.");
    }
}

