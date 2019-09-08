document.addEventListener("DOMContentLoaded", function() {
  const localGetButton = document.querySelector(".local .get");
  localGetButton.addEventListener("click", getItemLS);
  const localSetButton = document.querySelector(".local .set");
  localSetButton.addEventListener("click", setItemLS);
  const localRemoveButton = document.querySelector(".local .remove");
  localRemoveButton.addEventListener("click", removeItemLS);
  const localClearButton = document.querySelector(".local .clear");
  localClearButton.addEventListener("click", clearLS);

  const sessionGetButton = document.querySelector(".session .get");
  sessionGetButton.addEventListener("click", getItemSS);
  const sessionSetButton = document.querySelector(".session .set");
  sessionSetButton.addEventListener("click", setItemSS);
  const sessionRemoveButton = document.querySelector(".session .remove");
  sessionRemoveButton.addEventListener("click", removeItemSS);
  const sessionClearButton = document.querySelector(".session .clear");
  sessionClearButton.addEventListener("click", clearSS);
});

function setItemLS() {
  localStorage.setItem("name", "someName");
  getItemLS();
}

function getItemLS() {
  console.log(
    "local storage name key value is: ",
    localStorage.getItem("name")
  );
}

function removeItemLS() {
  localStorage.removeItem("name");
  getItemLS();
}

function clearLS() {
  localStorage.clear();
  getItemLS();
}

function setItemSS() {
  sessionStorage.setItem("name", "someName");
  getItemSS();
}

function getItemSS() {
  console.log(
    "session storage name key value is: ",
    sessionStorage.getItem("name")
  );
}

function removeItemSS() {
  sessionStorage.removeItem("name", "someName");
  getItemSS();
}

function clearSS() {
  sessionStorage.clear();
  getItemSS();
}
