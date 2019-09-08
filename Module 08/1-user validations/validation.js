
document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("form .button");
    button.addEventListener("click", checkIfFormIsValidate);
});

function checkIfFormIsValidate() {
    let errorMessage = validateForm();
    let errorMessageDiv = document.getElementById("errorMessage"); 
    if(errorMessage){
        errorMessageDiv.classList.remove("errorMessageHidden");
        errorMessageDiv.classList.add("errorMessage");
        errorMessageDiv.innerText = errorMessage;
   }
   else {
        errorMessageDiv.classList.add("errorMessageHidden");
        errorMessageDiv.classList.remove("errorMessage");
   }
}


function validateForm()                                    
{ 
    let name = document.getElementById("userName");   
    let address = document.getElementById("address");               
    let password = document.getElementById("password");   
    let errorMessage = ""; 
   
    if (name.value === "")                                  
    { 
        errorMessage = "Please enter user name";
        return errorMessage;
    } 
   
    if (address.value === "")                               
    { 
        errorMessage = "Please enter address";
        return errorMessage;
    } 
       
    if (password.value === "")                        
    { 
        errorMessage = "Please enter password";
        return errorMessage;
    }   
}