

function changeTheText() {
    document.querySelector("#someDiv").innerHTML = "Changed text";
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#someBtn").addEventListener("click", clickButton);
    document.querySelector("#removeBtn").addEventListener("click", removeEvent);

    function clickButton() {
        console.log("The btn click event added!");
    }
    function removeEvent() {
        document.querySelector("#someBtn").removeEventListener("click", clickButton);
    }
    
});

