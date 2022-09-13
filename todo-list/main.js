// Spara Todo's i något
const todos = [

];

// let todos = [
//     "Todo 1",
//     "Todo 2",
//     "Todo 3"
// ];

// Visa ut Todo's
// todos.forEach(createTodoItem);

// function createTodoItem(value) {
//     // console.log(value);
//     let todoItem = `<p>${value}</p>`;
//     // let todoItem = "<p>" + value + "</p>";
//     document.getElementById("todoItems").innerHTML += todoItem;
// }



// Skapa nya Todo's via formulär
document.getElementById("todoButton").addEventListener("click", saveTodoItem);

function saveTodoItem() {
    console.log("Klick på knapp");
    // Hämta värdet på inputfält
    let todoInput = document.getElementById("todoInput").value;
    console.log(todoInput);
    // Göra något med detta värde
    todos.push(todoInput);
    console.log(todos);

    let text = "";

    for (let i = 0; i < todos.length; i++) {
    text += "<li>" + todos[i] + "</li>";
    document.getElementById("todoItems").innerHTML = text;
    }
}