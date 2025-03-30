// Create an array to store colors
let colors = []; 

// Loop to collect 3 color inputs
for (let i = 0; i < 3; i++) {
    let threecolor = prompt("Enter color:"); // Corrected prompt syntax and changed variable name
    colors.push(threecolor); 
    console.log("Updated list of colors: " + colors); 
}