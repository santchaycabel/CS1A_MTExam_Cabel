let createGroceryList = prompt("Would you like to create a grocery list? (Y/N)");

if (createGroceryList.toUpperCase() === "Y") {
    let numberOfItems = parseInt(prompt("How many items would you like to add to your grocery list?"));

    let groceryList = [];

    for (let i = 0; i < numberOfItems; i++) {
        let item = prompt(Item ${i + 1}:);
        groceryList.push(item);
    }

    groceryList.sort();

    alert(Your sorted grocery list:\n- ${groceryList.join("\n- ")});
    console.log("Your sorted grocery list:", groceryList);
} else {
    alert("No grocery list created.");
}

