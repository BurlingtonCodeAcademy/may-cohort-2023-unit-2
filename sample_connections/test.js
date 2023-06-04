console.log("file connected")

let x = 12;
let y = 12;

let z = x + y;

let body = document.querySelector('body');


let h1 = document.createElement('h1');
h1.innerText = z;
console.log(h1.textContent);
h1.innerText = "Updated this"
console.log(h1.textContent)

body.appendChild(h1);