const abc= new Promise((resolve, reject)=>
{
    setTimeout(()=>
    {
        console.log("We are in timeout");
    }, 2000);
})

console.log("We are out of time>")