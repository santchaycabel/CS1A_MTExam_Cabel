let groceryList = [];

let createList = prompt("Would you like to create a grocery list? (Y/N)");

if (createList) { 
    let numberOfItems = Number(prompt("How many items would you like to add to your grocery list?"));

    for (let i = 0; i < numberOfItems; i++) {
        let item = prompt("Enter item " + (i + 1) + ":");
        groceryList.push(item);
    }

    groceryList.sort();
    alert("Your sorted grocery list: " + groceryList);
    console.log("Your sorted grocery list:", groceryList);
} else {
    alert("No grocery list created.");
}
