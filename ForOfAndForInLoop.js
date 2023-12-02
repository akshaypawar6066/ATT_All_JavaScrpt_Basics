const colours=["Red", "Green", "Yellow", "Blue", "Magenta", "Cyan", "White"];

//for of loop---->To deal with Array.(We can use for in loop as well to itearte Array).

for(const colour of colours)
{
  console.log(colour);
}


for(const e in colours)
{
    console.log(colours[e]);
}

const car={
    make:"Ford",
    model:"Mustang",
    year:2020
}
console.log("--------------------------------")
console.log(car.make);
console.log(car["model"])
console.log("--------------------------------")

//For In loop----->To deal with Object.
for(const key in car)
{
   console.log(key+":"+car[key]);
}



console.log("--------------------------------")
let s="Akshay Pawar";
for(const e of s)
{
    console.log(e);
}
console.log("--------------------------------")
let string="Akshay Pawar";
for(const e in string)
{
    console.log(string[e]);
}

console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")

const person={
    name:"Akshay",
    age:20,
    city:"Bangalore"
}

for(const key in person)
{
    console.log(`${key} : ${person[key]}`);
}

console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")

let add=0;
let arr=[5,4,9,8,7];
for(const number of arr)
{
    add=add+number;
}

console.log(`Addition of all the array elemnts are: ${add}`);