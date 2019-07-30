document.addEventListener("DOMContentLoaded", function() {
    let people = [];

    let form = document.querySelector("form");
    form.addEventListener("submit", addPerson);

    function addPerson(event) {
        event.preventDefault();
        let nameElement = document.querySelector("form .name");
        let ageElement = document.querySelector("form .age");
        let greetElement = document.querySelector("form .greet");
        let person = {
            name: nameElement.value,
            age: ageElement.value
        }
        if (greetElement.checked) {
            person.greet = function() {
                let greetElement = document.querySelector("#greetText");
                greetElement.innerText = this.name + ' says hello!';
            }
        }
        people.push(person);
        let peopleContainer = document.querySelector("#people");
        let personDiv = document.createElement("div");
        personDiv.innerText = person.name + " age: " + person.age;
        if (person.greet) {
            let greetButton = document.createElement("input");
            let personGreet = person.greet.bind(person);
            greetButton.addEventListener("click", personGreet);
            greetButton.value = "Greet";
            greetButton.type = "button";
            personDiv.appendChild(greetButton);
        }
        peopleContainer.appendChild(personDiv);

    } 
});