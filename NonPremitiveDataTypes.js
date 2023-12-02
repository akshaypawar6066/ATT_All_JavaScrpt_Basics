
//Objects arrays and functions
//But all the data types are considered as object

//Object----->1)***Non Premitive data type
//Syntax of declaring Object in JS//
/*
const student={
    name:"Akshay",
    class:"12th"

}

console.log(student.name);
console.log(student.class);
*/
//List of Object
/*
const persons =[{
 name:"Akshay",
 age:25,
 gender:"Male"
},
{
    name:"Shivaji",
 age:26,
 gender:"Male"
}]

console.log(persons)
console.log(typeof(persons))

console.log(persons[1].name)
persons[0].address="Pune";
persons[1].add="Mumbai";
persons[0].mobileNo=9875466;
persons[1].mobileNo="64644646";
console.log(persons)
persons[0].address="Ahmadabad";
persons[1].add="Chennai";
console.log(persons)
delete persons[1].mobileNo;
delete persons[0].mobileNo;
console.log(persons)

*/
//Functions into the Object

/*const car={
    make:"TaTa",
    model:"Tiago",
    start:function ()
    {
        console.log('Good Car')
    },
    stop:function ()
    {
        console.log('bad Car')
    }
}

console.log(car)
car.start();
car.stop();  
*/


//Array Into the Object
/*
const student={
    name:"Akshay",
    class:"12th",
    hobbies:["Reading","Writing","Travelling"]
}

console.log(student.hobbies)
student.hobbies[1]="Singing";
console.log(student.hobbies)
console.log(student);

student.hobbies.pop();
console.log(student.hobbies)
student.hobbies.push("Drawing")
console.log(student.hobbies)
*/
/*
const num=[1,2,3,4];
num.splice(2,0,10);  //To add element at perticular index
console.log(num)
num.splice(4,2)      //o remove element from the perticular index.
console.log(num)
num.splice(1,1)
console.log(num)

*/


/*
const student={
    name:"Akshay",
    class:"12th",
}


student.email="ABC@Gmail.com";
console.log(student)
student.hobbies=["Reading","Writing","Travelling"]
console.log(student)
console.log(student.hobbies)


student.slepping=function ()
{
    console.log("sleeping the student");
}

console.log(student);
student.slepping();

console.log(student.slepping())

student.slepping();

*/
/*
//Function------>2)***Non Premitive Data Type
function demo()
{
    console.log("Function using Function Keyord with its name");
}
demo();

function demoWithParameter(name)
{
  console.log("Parameterized funcion:"+name)
}

demoWithParameter("Hello Parameterized function");

//Anynomous function-->Function assigned to some variable and not declared it's name.

const aFun=function(name, age)
{
  console.log("Your name is:"+name+" and your age is:"+age)
 
}

aFun("Akshay",25);

//Declaring function using Arrow Function

let arroFunction=() =>
{
    console.log("I am the function generated using array function:");
}
arroFunction();

//Parametrized arraow function

const add=(a, b) =>
{
  return a+b;
}
 
let Fnum=add(100,200);
console.log("Addition of two numbers are:"+Fnum)
console.log(typeof(add))

//call back function

function greet(fname, callback)
{
    console.log("Hey:"+fname);
    callback();
}

function callMe()
{
    console.log("This is a callback")
}

greet("Akshay", callMe)
*/

//Arrays---->3)***Non Premitive Data Type

let NumberAray=[1,5,4,98,10,10.5,'c',"HelloAkshay"];   //Array of number
let StringArray=["ABC","jdsf","hshf" ,"sgfhusgf"];   //Array of string
console.log(NumberAray);
console.log(StringArray);
let countryAndCode=[91,"India", "USA", +34, "China", 35, true] //Combination of different data in array.
console.log(countryAndCode);

let fruits=["Orange", "Apple", "ABC"]
console.log(typeof(fruits))
console.log(fruits[1])

console.log(fruits.length)

//Object and function in array.
let abc=[1, {"City":"Pune", "Name":"Akshay"}, b(10,15),function(a,b){return a+b}]
console.log(abc)


console.log(abc[3](5,10));











