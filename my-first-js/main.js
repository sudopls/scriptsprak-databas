var hello  = "Hello from var";
let helloAgain = "Hello from let";
const helloOnceAgain = "Hello from const";

// window.alert("Här är en alert");

// console.log(hello);

document.getElementById("demo").innerHTML = document.getElementById("demo").textContent + helloAgain;

document.getElementById("demo").innerHTML = "Titel: " + helloAgain;

let numbers = 200;

let five = 5;

let eight = "eight";

// console.log(numbers / five);

let cat = {name:"Kattsson", color:"Black", owner:"Fredrik"};

let orderedList = {firstItem:"Item1", secondItem:"item2"};

// My First Functions

function myFunction(valueOne, valueTwo) {
    return valueOne * valueTwo;
}

console.log(myFunction(2, 10));

function headingColorChanger() {
    // console.log(helo);
    document.getElementById("demo").setAttribute("class", "color-green");
}

let name = "fredrik";

function calcBirthYear(currentYear, userAge) {
    return currentYear - userAge;
}

function showBirthYear() {
    let userBirthYear = document.getElementById("birthYearInput")
    console.log(document.getElementById("birthYear").innerHTML = calcBirthYear(currentYear, userBirthYear));
}

let age1 = 2022;
let age2 = 10;

// console.log(showBirthYear(age1, age2));