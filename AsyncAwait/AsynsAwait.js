 function butterSprading()
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
             console.log("Butter is spreding on bread.")  
              resolve(true);
        },1000)
    })
}

 function jellySprading()
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
             console.log("Jelly is spreding on bread.")  
              resolve(true);
        },1500)
    }) 
}


async function mySandwitch()
{
   await jellySprading();   //Await until this step executes
   await butterSprading(); //Await Until; this step exceutes
   console.log("Sandwitch is ready.")
}

mySandwitch();