const car = {
    name: 'SuperSport', 
    start: function() {
        console.log(this.name, 'starting the engine...');
    }
 };

car.start();

car["name"] = "Some car";
console.log("the name changes to: ", car.name);
car.start()