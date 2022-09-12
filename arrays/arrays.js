let myTopFive = [
    "Falafel",
    "Coffee",
    "Cats",
    "JavaScript",
    "Water"
];

let categories = [
    "Sport",
    "World News",
    "Economics",
    "Music",
];
// Här använder vi join för att byta separator mellan våra list-items
// document.getElementById("demo").innerHTML = categories.join(", ");

// Här använder vi array pop() för att ta bort sista elementet i våran lista
// let lastCategory = categories.pop();
// console.log(lastCategory);

// Använd array push() för att lägga till ett "item" i listan
// categories.push("Art");
// console.log(categories);

// Komma åt ett specifikt "list-item" via index siffra
// console.log(categories[2]);

// console.log(myTopFive);

categories.forEach(myFunction);

function myFunction(value) {
    // console.log(value);
    let categoryListItem = `<li>${value}</li>`;
    console.log(categoryListItem);
}