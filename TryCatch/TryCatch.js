// const str="Akshay";

// const str1=str.toUpperCase();

// try {
//     if (str1 === "AKSHAYY") {
//         console.log("Same Strings");
//     } else {
//         throw new Error("Strings are not the same");
//     }
// } catch (error) {
//     console.error("An error occurred:", error.message);
// }


try{
    const string="123";
console.log(string.toUpperCase());
}
catch(error)
{
    throw new Error("It is not a String")
    
} 

finally
{
    console.log("Finally block executed");
}