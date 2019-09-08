document.addEventListener("DOMContentLoaded", function() {
    if (location.search) {
        let resultsElement = document.querySelector(".results");
        let query = location.search.substring(1);
        let queryParts = query.split("&");
        for (let i = 0; i < queryParts.length; i++) {
            let keyValuePair = queryParts[i].split("=");
            resultsElement.innerText+= " " + keyValuePair[0] + ": " + keyValuePair[1];            
        }
    }
});