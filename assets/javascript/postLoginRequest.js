function loginPostMethod(data) {
  const url = "http://localhost:8080/user/loginUser";

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  let user;

  // Configure the request
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type to JSON

  // Define a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Successful response
      const response = xhr.responseText;
      alert(response);
      console.log(response);
      user = eval("(" + response + ")");
      localStorage.setItem("loginUserId", user.id);
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
  return user;
}

const workshopLoginForm = document.getElementById("workshopLoginForm");
if (workshopLoginForm != null) {
  workshopLoginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let number = document.getElementById("loginNumber").value;
    let password = document.getElementById("loginPassword").value;
    let user = await loginPostMethod({ number, password });

    if (user.role == 3) {
      window.location.href = "./workshop/workshop.html";
    }
    if (user.role == 2) {
      window.location.href = "./Customer/cust.html";
    }
  });
}
const loginForm = document.getElementById("loginForm");
if (loginForm != null) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let number = document.getElementById("loginNumber").value;
    let password = document.getElementById("loginPassword").value;
    let user = await loginPostMethod({ number, password });

    if (user.role == 3) {
      window.location.href = "./pages/workshop/workshop.html";
    }
    if (user.role == 2) {
      window.location.href = "./pages/Customer/cust.html";
    }
  });
}
