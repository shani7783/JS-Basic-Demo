document.addEventListener("DOMContentLoaded", function() {
	let frame = document.querySelector("#frame");

	let queryString = location.search.substring(1);

	let queryValues = {};
	let queryPaths = queryString.split("&");

	for (let i = 0; i < queryPaths.length; i++) {
		let keyValuePair = queryPaths[i].split("=");
		let key = keyValuePair[0];
		let value = keyValuePair[1];
		queryValues[key] = value;		
	}

	if (queryValues["firstName"] && queryValues["lastName"]) {
		localStorage.setItem("firstName", queryValues["firstName"]);
		localStorage.setItem("lastName", queryValues["lastName"]);
	
		window.location = "secondPage.html";
	}
});
