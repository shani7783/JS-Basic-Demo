function changeColor() {
	const selectElement = document.querySelector("select");
	const selectedValue = selectElement.value;
	const label = document.querySelector("#mySpan");
	let labelClassList = label.classList;

	if (labelClassList.length > 0) {
		labelClassList.replace(labelClassList.item(0), selectedValue);
	} else {
		labelClassList.add(selectedValue);
	}
}
