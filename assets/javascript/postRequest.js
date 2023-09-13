function addUser(data) {
  const url = "http://localhost:8080/user/create"; // Replace with your Spring Boot backend URL

  // Data to send in the request body

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure the request
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type to JSON

  // Define a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Successful response
      const response = xhr.responseText;
      alert(response);
      console.log("Response from server:", response);
    } else {
      // Error response
      console.error("Error:", xhr.statusText);
    }
  };

  // Define a callback function to handle network errors
  xhr.onerror = function () {
    console.error("Network error occurred");
  };

  // Send the POST request with the JSON data
  xhr.send(JSON.stringify(data));
}

const signUpForm = document.getElementById("signUpForm");
// signUp form
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (password != confirmPassword) alert("Confirm passwords is not matching");
  let data = {
    name,
    number,
    password,
    role: 2,
  };
  addUser(data);
});

// Example user data to send in the request body

// Call the function to create a new user
