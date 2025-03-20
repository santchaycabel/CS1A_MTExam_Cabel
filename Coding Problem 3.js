// Use a conditional statement to categorize the user into one of the following age groups:
// Toddler (under 5 years)
// Child (5-12 years)
// Teenager (13-19 years)
// Young Adult (20-35 years)
// Middle Aged (36-60 years)
// Senior (over 60 years)
let age = prompt("Please enter your age:");

let ageCategory;

if (age < 5) {
  ageCategory = "Toddler";
} else if (age >= 5 && age <= 12) {
  ageCategory = "Child";
} else if (age >= 13 && age <= 19) {
  ageCategory = "Teenager";
} else if (age >= 20 && age <= 35) {
  ageCategory = "Young Adult";
} else if (age >= 36 && age <= 60) {
  ageCategory = "Middle Aged";
} else {
  ageCategory = "Senior";
}

console.log(You are categorized as a ${ageCategory}.);



