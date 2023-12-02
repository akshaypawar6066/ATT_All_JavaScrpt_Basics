let s="I Love my India   ";

//1.length()---->
console.log(s.length);


//2.subString(2,5)---->To get SubString---->Start index to one index less than last index(Not consider last index character).
console.log(s.substring(5,11));

//3.split()---->To split the given string into the no of parts--->Return type will be String Array.
console.log(s.split(" "));


//4.trim()--->To remove the unnecessary spaces from staring and ending of the string.
console.log(s);
console.log(s.length)
let s1=s.trim();
console.log(s1.length)

//5.toUpperCase()--->To convert the string to upper case.
console.log(s.toUpperCase());

//5. toLowerCase()--->To convert the string to lower case.
console.log(s);
console.log(s.toLowerCase());

