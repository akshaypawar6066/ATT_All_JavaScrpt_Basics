//var
/*
var x=10;
var x=100, y=200;
var c="Akshay";
console.log(c);
var c=150;
document.write(c);
*/

//let
/*
let x=20;
let y='A';
console.log("Value of x is:"+x+ " And value of y is:"+y);
var a="Welcome", b=20;
console.log("Value of a is:"+a+ " And value of b is:"+b);
*/

//Difference between var and let.
//console.log(x);
//var x=100;
// let x=100;
// console.log(x);

//const
/*
const x=100;
console.log(x);
x=500;
console.log(x);
*/

//Data types in Java
/*
let x=100;
console.log(typeof(x));    //number
 x="Akshay";
 console.log(typeof(x));
x=100.0;
console.log(typeof(x));
x="A";
console.log(typeof(x));
x=false;
console.log(typeof(x));
x=null;
console.log(typeof(x));
let y;
console.log(typeof(y));
let q=undefined;
console.log(typeof(q));
*/

//Difference betn var, let and const/***
//varExample();
/*
function varExample()
{
    var x=10;
    if(true)
    {
       var x=20;    //It will assign  outer x =20;
    }
    console.log(x)
}
varExample();
*/

//let example
/*
function letExample()
{
    let x=100;
    if(true)
    {
       let x=200;   //It will create x within block scope.
       console.log(x)
    }
    console.log(x)
}
letExample();
*/

//const example
function constExample()
{
  const a="I am const variable";
  console.log(a)
}
constExample();






