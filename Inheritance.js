//Inheritance

class Car {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    show() {
        return `I Have ${this.name} Car whose price is ${this.price}`;
    }

    static startEngine() {
        console.log("Engine Started");
    }
}
class Model extends Car {
    constructor(name, color, price, model) {
        super(name, color, price);
        this.model = model;
    }

    present() {
        return `${this.model} is my car model`
    }

    static stopEngine() {
        console.log("Engine Stopped");
    }
}
const car = new Car("BMW", "RRR", "1CR");
console.log(car.show())
Car.startEngine();
const model = new Model("Audi", "red", "65L", "Q4");
console.log(model.show());
console.log(model.present());
Model.startEngine();
Model.stopEngine();
 
console.log(model);




