// app.js

// Function to execute when the page has finished loading
function onPageLoad() {
    console.log("Page loaded successfully!");
    // Add your code here to perform actions when the page loads
  }
  
  // Function to handle a button click event
  function handleClick() {
    console.log("Button clicked!");
    // Add your code here to handle the button click event
  }
  
  // Attach the onPageLoad function to the "load" event of the window
  window.addEventListener("load", onPageLoad);
  
  // Attach the handleClick function to the click event of the button
  var button = document.getElementById("myButton");
  button.addEventListener("click", handleClick);