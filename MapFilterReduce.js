 //1.map()----> To perform operations with each and every elemnts of an array.
/*
let num=[1,2,3,4,5,6];
let mulArray=num.map(function(e)
{
     return e*10;
})

console.log(mulArray)


let num=[1,5,10,5,65];
let mulArray=num.map((e)=>
{
    return e/5;
})
console.log(mulArray)

*/

//2.filter()----> Returns the elements of an array that meet the condition specified in a callback function
/*
let array=[1,15,6,9,8];
let evenNumbers=array.filter((e)=>
{
    return e%5===0;
})

console.log(evenNumbers);
*/
//3.reduce()----> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   //Genrerally used to perform the addition of no's present in the array.
   /*
let array=[1,15,6,9,8];
let sum=array.reduce((r, num)=>                      //r is initial value. num--->each element of the array.
{
     return r+num
},10);
console.log(sum);

*/

