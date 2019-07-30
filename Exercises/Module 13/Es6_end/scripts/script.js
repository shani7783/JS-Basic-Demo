
// Ex1
console.log("~~~~~~~~~~~~~~~~~~~~~");
console.log("Ex1");
function sumUnlimited(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;

    // A better version would be the following:
    // let sum = 0;
    // numbers.forEach(value => {
    //     sum+=value;
    // });
    // return sum;
}
console.log(sumUnlimited(1, 2, 3));
console.log(sumUnlimited(1, 2, 3, 1, 2));
console.log(sumUnlimited(...[1, 2]));

// Ex2
console.log("~~~~~~~~~~~~~~~~~~~~~");
console.log("Ex2");
let [a, b] = [1, 2, 3, 4];
console.log(a, b);

// Ex3
console.log("~~~~~~~~~~~~~~~~~~~~~");
console.log("Ex3");
function printZeroTo(topNumber = 10) {
    console.log('Printing up to ', topNumber);
    for (let i = 0; i <= topNumber; i++) {
        console.log(i);
    }
}

printZeroTo();
printZeroTo(2);
printZeroTo(12);

// Ex4
console.log("~~~~~~~~~~~~~~~~~~~~~");
console.log("Ex4");
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log("Bark. I'm a " + this.breed + " and my name is " + this.name);
    }
}
let rexi = new Dog('Rexi', 'Chihuahua');
rexi.bark();

// Ex4
console.log("~~~~~~~~~~~~~~~~~~~~~");
console.log("Ex4");
const correctWord = ["dog", "axis", "test", "iris", "tilt", "the"].find(word => word.length == 4 && word.includes('t'));
console.log(correctWord);