const waterVehicle = { sail(){ console.log('Sailing') } };  
const groundVehicle = { drive(){ console.log('Driving') } };

// AUTOS, BICICLETAS Y BOTES
const car = Object.create(groundVehicle);  
car.wheels = 4;  
const bike = Object.create(groundVehicle);  
bike.wheels = 2;  
const boat = Object.create(waterVehicle);

const myCar = Object.create(car);  
const myBike = Object.create(bike);  
const myBoat = Object.create(boat);

myCar.drive(); // 'Driving'  
myBike.wheels; // 2  
myBoat.sail(); // 'Sailing'

// TODOTERRENO
const suv = Object.create(car);  
suv.offroad = function(){ console.log('Doing some off-road!') };

const mySuv = Object.create(suv);  
mySuv.drive();  // 'Driving'  
mySuv.wheels;   // 4  
mySuv.offroad() // 'Doing some off-road!' 

// ANFIBIO
const amphiVehicle = Object.create(waterVehicle);  
amphiVehicle.drive = function() { console.log('Driving') };

const myAmphi = Object.create(amphiVehicle)  
myAmphi.drive() // 'Driving'  
myAmphi.sail()  // 'Sailing'