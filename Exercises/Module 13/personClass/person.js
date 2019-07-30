class Person {
     constructor (name, age, birthday){
        this.name = name;
        this.age = age;
        this.birthday = birthday;
     }

     sayHello(message = "Hello my friend") {
        console.log(message);
     }
}

let person1 = new Person("person1", 23, new Date());
let person2 = new Person("person2", 27, new Date());
let person3 = new Person("person3", 29, new Date());

person1.sayHello();
person1.sayHello("Say hello");

let personNames = [];

function addPersonName (name){
    personNames = [...personNames, name];
}

addPersonName(person1.name);
addPersonName(person2.name);
addPersonName(person3.name);

function checkIfNameIncludes(text){
    let ifExist = false;
    for (let index = 0; index < personNames.length; index++) {
        if(personNames[index].includes(text)){
            ifExist =  true;
        }    
    }
    return ifExist;
}

console.log("The person name includes 'son1': ", checkIfNameIncludes('son1'));

function changeDateFormat(date) {
    let israelFormatDate = new Intl.DateTimeFormat("he-IL");
    console.log(israelFormatDate.format(date));
}

changeDateFormat(person1.birthday);

function printNames (){
    for (let index = 0; index < personNames.length; index++) {
       setTimeout( ()=> {
            console.log("Person name", personNames[index]);
       }, 1000);
    }
}

printNames();
