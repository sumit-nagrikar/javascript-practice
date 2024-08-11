// Function with a callback
function fetchDataFromServer(param) {
    // Simulating an asynchronous operation
    setTimeout(
        function() {
      const data = {
        name: "John",
        age: 30
      };
      param(data); // Execute the callback function with the fetched data
    }, 5000);
  }
  
  // Callback function to handle the fetched data
  function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
  }
  
  // Call the function with the callback
  fetchDataFromServer(displayData);
  
  // Output
  "Name: John, Age: 30"