function getUserBynum(id) {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Define the URL for your Spring Boot GET endpoint
  var url = "http://localhost:8080/user/findById?id=" + id; // Replace with your actual endpoint URL

  let user = {};

  // Configure the request
  xhr.open("GET", url, false);

  // Set up a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Successful response
      var responseData = xhr.responseText;

      console.log(responseData);
      var jsonObject = eval("(" + responseData + ")");
      user = jsonObject;
      // console.log(parsedData);
    } else {
      // Error response
      console.error("Error:", xhr.statusText);
    }
  };

  // Set up a callback function to handle network errors
  xhr.onerror = function () {
    console.error("Network error occurred");
  };

  // Send the GET request
  xhr.send();
  return user;
}
function getAllWorkshops(id) {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Define the URL for your Spring Boot GET endpoint
  var url = "http://localhost:8080/workshop/getAllWorkshops?id=" + id; // Replace with your actual endpoint URL

  let workshops = [];

  // Configure the request
  xhr.open("GET", url, false);

  // Set up a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Successful response
      var responseData = xhr.responseText;
      workshops = JSON.parse(responseData);
    } else {
      // Error response
      console.error("Error:", xhr.statusText);
    }
  };

  // Set up a callback function to handle network errors
  xhr.onerror = function () {
    console.error("Network error occurred");
  };

  // Send the GET request
  xhr.send();
  return workshops;
}
let userId = localStorage.getItem("loginUserId");
let user = getUserBynum(userId);
let userName = document.getElementById("userName");
if (userName != null) {
  userName.innerText = "Hi " + user.name + " ! !";
  let workshops = getAllWorkshops(userId);
  console.log(workshops);
  for (let i = 0; i < workshops.length; i++) {
    createWorkshop(workshops[i], "workshops");
  }
}
