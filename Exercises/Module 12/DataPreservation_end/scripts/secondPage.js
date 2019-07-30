document.addEventListener("DOMContentLoaded", function() {	
	let firstName = localStorage.getItem("firstName");
	let lastName = localStorage.getItem("lastName");
	if (firstName && lastName) {
		let firstNameControl = document.querySelector("#firstName");
		let lastNameControl = document.querySelector("#lastName");
		firstNameControl.innerText = firstName;
		lastNameControl.innerText = lastName;
	}
	
});
