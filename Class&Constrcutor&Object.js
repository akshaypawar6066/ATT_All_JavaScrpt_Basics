class Car {

    constructor(name, price, model) {
        this.name = name;
        this.price = price;
        this.model = model;
    }


}

const car1=new Car("ODI", "65L", "Q5");
console.log(car1.name);
console.log(car1.price); 
console.log(car1.model);
console.log(car1.greet());