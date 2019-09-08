// please note that you will not see cookies if you run as local file

document.addEventListener("DOMContentLoaded", function() {
  let createElement = document.querySelector(".create");
  createElement.addEventListener("click", createCookie);
  let updateElement = document.querySelector(".update");
  updateElement.addEventListener("click", updateCookie);
  let getElement = document.querySelector(".get");
  getElement.addEventListener("click", getAllCookies);
  let deleteElement = document.querySelector(".delete");
  deleteElement.addEventListener("click", deleteCookie);
});

function createCookie() {
  document.cookie = "username=someName; expires=Thu, 19 Dec 2020 12:00:00 UTC";
}

function updateCookie() {
  document.cookie =
    "username=someUpdatedName, location=Israel; expires=Thu, 19 Dec 2020 12:00:00 UTC";
}

function getAllCookies() {
  let cookie = document.cookie;
  console.log(cookie);
}

function deleteCookie() {
  document.cookie =
    "username=someUpdatedName; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
