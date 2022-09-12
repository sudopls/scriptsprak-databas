// Spara våra värden i variabler
const myName = "Fredrik";

const myEmail = "mail@mail.nu";

const myAge = 31;

// Fyll element i vårat HTML-dokument med hjälp av JS
document.getElementById("myName").innerHTML = myName;

document.getElementById("myEmail").innerHTML = myEmail;

document.getElementById("myAge").innerHTML = myAge;

// Hämta dagens datum
console.log(Date());

// Spara dagens datum i en variabel
const currentDate = new Date();

// Utifrån dagens datum, spara nuvarande år
let currentYear = currentDate.getFullYear();

console.log(currentYear);

// Skapa en variabel som kan hålla vårat födelseår
let myBirthYear = calcMyBirthyear();

// Skapa en funktion som räknar ut vårat födelseår
function calcMyBirthyear (myBirthYear) {
    return myBirthYear = currentYear - myAge;
}

// Använd sedan funktionen för att skriva ut detta i HTML
// document.getElementById("myBirthyear").innerHTML = myBirthYear;

// Samma resultat som ovan fast utan funktionen
document.getElementById("myBirthyear").innerHTML = currentYear - myAge;