const theFavDigit = 30; // You can change this to any digit you like

let guess;
while (true) {
    guess = Number(prompt("Guess my favorite digit:"));
    if (guess === theFavDigit) {
        console.log("Correct! You guessed the correct digit.");
        alert("Correct! You guessed the correct digit.");
        break;
    } else if (guess > theFavDigit) {
        console.log("Too high! Try again.");
        alert("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
        alert("Too low! Try again.");
    }
}