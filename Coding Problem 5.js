// Create an array to store colors
let colorPreferences = [];

// Loop to collect 3 color inputs
for (let i = 0; i < 3; i++) {
    let color = prompt(Enter color ${i + 1}:); 
    colorPreferences.push(color);
    console.log(Updated list of colors: ${colorPreferences.join(", ")});
}
