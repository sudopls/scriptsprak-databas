const mountainbike = {
    id: 1,
    brand: "Canyon",
    desc: "The fastest bike there is!",
    productImage: "./images/pexels-anastasia-r-9904214.jpg"
}

const fixie = {
    id: 2,
    brand: "Cinelli",
    desc: "No brakes, no problems",
    productImage: ""
}

console.log(mountainbike);

const productTemplate = `
<div>
    <h2>${mountainbike.brand}</h2>

    <p>${mountainbike.desc}</p>

    <img src="${mountainbike.productImage}" alt="">
</div>`

document.getElementById("demo").innerHTML = productTemplate;