let myName = "Fredri";

const myUser = {
    userName: "Fredri",
    userEmail: "mail@mail.test",
}

// console.log(myUser);

// Om användarnamn är lika med "Fredrik" kör kod i block
if (myUser.userName == "Fredrik") {
    // console.log("It's true!!!");
    document.getElementById("demo").innerHTML = "Welcome " + myName;
}
// Om ovan är falskt men variabeln myUser har ett värde, kör kod i block
else if (myUser) {
    console.log("We has user with name " + myUser.userName);
}
// Om allt ovan var falskt, kör detta
else {
    console.log("It's false!!!!");
}