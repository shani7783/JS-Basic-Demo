class Car {
   constructor(name, color){
      this.name = name;
      this.color = color;
   }

   printDetails(){
      console.log("The car name is: ", this.name, " the color is: ", this.color);
   }
}

const car = new Car("SuperCar", "blue");
car.printDetails();