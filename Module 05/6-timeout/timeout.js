let timeout;

function startTimeout() {
  debugger;
  timeout = setTimeout(function() {
    console.log("Hello");
  }, 5000);
}

function stopTimeout() {
  clearTimeout(timeout);
  console.log("The timeout stopped");
}
