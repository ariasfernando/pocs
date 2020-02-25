/**
 * Utilización de Factory para creación de objetos.
 */

const dogProto = { 
  bark() { console.log('Guau!') }
};

function dog(name) {  
  const myDog = Object.create(dogProto);
  myDog.name = name;
  return myDog;
}

const max = dog('Max');

max.name   // 'Max'  
max.bark() // 'Guau!'  