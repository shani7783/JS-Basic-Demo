
// bind example
const car = {
    name: 'SuperSport', 
    getName: function() {
        return this.name;
    },
    printNamaAndColor: function(color) {
        console.log("The name is: ", this.name, ", the color is: ", color);
    }
 };

let carGetNameMethod = car.getName;
console.log("The name will be empty: ", carGetNameMethod());

let carGetNameMethodBinded = carGetNameMethod.bind(car);
console.log("The name will be SuperSoprt: ", carGetNameMethodBinded());


// call example
const anotherCar = {
    name: "Sport"
}
car.printNamaAndColor("red");
car.printNamaAndColor.call(anotherCar, "blue");

//apply example

car.printNamaAndColor.apply(anotherCar, ["pink"]);