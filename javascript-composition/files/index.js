/*************************************************
 * CADENA DE PROTOTIPOS
 */
/* const animal = { 
  name: 'Animal', 
  eat() { console.log('Eating') }
};

const dog = Object.create(animal);
dog.bark = function() { console.log('Guau!') };

dog.eat()   // Eating
dog.bark()  // Guau!

const max = Object.create(dog);
console.log(max.name);
max.name = 'Max';
console.log(max.name);

const tom = Object.create(dog);
console.log(tom.name);
tom.name = 'Tom';
console.log(tom.name);

max.bark() // Guau!
tom.eat()  // Eating! */

/*************************************************
 * FUNCIONES
 */
const doSomething = function() { console.log('doing something!') };

function final(myFunction) {
  myFunction();
}

final(doSomething) // 'doing something!'

/*************************************************
 * PROGRAMACION FUNCIONAL
 */

function dog(name) {
  return { name, specie: 'Dog' };
}

console.log( dog('Max').name ) // 'Max'

/*************************************************
 * RECURSIVIDAD
 */

function factorial(n) {
  if (n > 1) {
    return n * factorial(n-1);
  } else {
    return 1;
  }
}

console.log( factorial(3) ) // 6
console.log( factorial(4) ) // 24 