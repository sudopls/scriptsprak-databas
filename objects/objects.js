// En enkel variabel
// let car = "Fiat";

const car = {
    brand: "Volvo",
    model: "240",
    color: "Red",
}

// console.log(car.brand);

const user = {
    username: "hejhej123",
    email: "mail@mail.net",
    password: "password1234",
    nicename: "Fredrik",
    img: "./img/sad-thumbs-up-cat.jpeg",
}

console.log(user);

const post = {
    postId: 1,
    postTitle: "Hello world!",
    postContent: "This is post content",
}

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a iusto molestiae vel repellat recusandae rem animi provident nisi nobis impedit hic nesciunt, quidem reiciendis asperiores rerum facere? Nisi, commodi.";

console.log(text.length);

let textTwo = 'We are the so-called "Vikings" from the north.';

console.log(textTwo);

// Strängar går att skriva på två sätt
'En sträng'
"Detta är också en sträng"
let escapeChar = 'Oh no! It\'s the "vikings" a\\gain';

console.log(escapeChar);

// String Template underlättar när vi vill blanda värden från JS och statisk HTML

let userHtml =
`<h2 id="userName">${user.username}</h2>

<img src="${user.img}" alt="Profile photo" id="profileImage">

<p id="firstName">${user.nicename}</p>`;

document.getElementById("app").innerHTML = userHtml;