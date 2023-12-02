import Parent from './Parent.js';

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  myAge() {
    console.log("My age is: " + this.age);
  }
}

export default Child;