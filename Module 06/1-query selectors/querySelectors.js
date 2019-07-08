
// select by id
function changeTheText() {
    document.querySelector("#someDiv").innerHTML = "Changed text";
}

// select all

function changeFirstClassBgColor() {
    let classes = document.querySelectorAll(".someClass");
    classes[0].style.backgroundColor = 'green';
}