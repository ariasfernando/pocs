 const dogProto = { 
  bark() { console.log('Guau!') }
};

function Dog(name) {  
  this.name = name;
}

Dog.prototype = dogProto;

const max = new Dog('Max');  
const tom = new Dog('Tom');

max.name   // 'Max'  
tom.bark() // 'Guau!' 
