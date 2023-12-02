class bankAccountDetails{
    #accountBalance=0;           //#variableName---->To declare the private variable.
        constructor(name)
    {
       this.name = name;
    }

    constructor()
    {
        
    }

    deposit(amount){
       this.#accountBalance += amount;;
    }

    getBalance()
    {
        return this.#accountBalance;
    }

}

const acc=new bankAccountDetails("Akshay");
acc.deposit(10000);
console.log("Account Balance is:"+acc.getBalance());      //Accessing private variable through public method.