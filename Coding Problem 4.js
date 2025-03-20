// Declaring the favorite number
const theFavNumber = 25; // You can change this to any number you like

// Loop for guessing
let guess;

while (true) {
    guess = prompt("Guess my favorite number:");

    // Convert guess to a number
    guess = Number(guess);

    // Check if the guess is correct, too high, or too low
    if (guess === theFavNumber) {
        console.log("Correct! You guessed the right number.");
        alert("Correct! You guessed the right number.");
        break;
    } else if (guess > theFavNumber) {
        console.log("Too high! Try again.");
        alert("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
        alert("Too low! Try again.");
    }
}
