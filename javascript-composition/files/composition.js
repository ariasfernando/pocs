const eater  = { eat(){ console.log('Is eating') } };  
const runner = { run(){ console.log('Is running!') } };  
const flying = { fly(){ console.log('Is flying!') } }; 

const max = Object.assign({ name: 'Max' }, eater, runner);  
const pit = Object.assign({ name: 'Pit' }, eater, flying);

max.name;  // 'Max'  
max.run(); // 'Is running!'  
pit.name;  // 'Pit'  
pit.fly(); // 'Is flying!'  

const shepherd = { sheperding() { console.log('Is sheperding!') } };  

function dog(options) {  
  const defaults = { name: 'Dog', hair: 'short', color: 'brown' };
  if (options.isShepherd) {
    return Object.assign(defaults, eater, runner, shepherd, options);
  } else {
    return Object.assign(defaults, eater, runner, options);
  }
}