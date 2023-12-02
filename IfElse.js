//Basic if-else
/*
let a=10;
if(a>5)
{
    console.log("A is greter than 5")
}
else{
    console.log("A is less han 5")
}
*/

//Nested If else
/*
let a=10, b=30, c=50,d=20.5;
if(a>b&&a>c&&a>d)
{
    console.log("A is greater number:"+a);
}
else if(b>c&&b>d)
{
    console.log("B is greater number:"+b);
}
else if(c>d)
{
    console.log("c  is greater number:"+c);
}
else{
    console.log("d is greater number:"+d);
}
*/
/*
let a=0;
if(a==0)    
{
    console.log("It is zero (0) number:")
}

var c=10;
let d="10";
if(c==d)   //loose Equality to check only values are equal or not.
{
    console.log("Hi");
}

var k=10;
let z=10;
if(k===z)   //Strictly Equality to check both values and data types.
{
    console.log("Hello");
}

*/

/*
//Taking no from userSide(Only run on Browser env). --->promp() method
let userInput=prompt("Enter Number:");
let b=parseFloat(userInput);
if(!isNaN(b))
{
    if(b>5)
    {
        console.log('B is greater than 5')
    }
    else{
        console.log("B is less than 5")
    }
}
else{
    console.log("Entered number is not a valid number:")
}
*/


//Switch cases***********

let day="Friday";
switch(day)
{
    case "Friday":
        console.log('Weekend Starts Here')
       //break;

        case "Saturday":
            console.log('Its saturday')
           //break;

            default:
                console.log('Its not weekend')
}
