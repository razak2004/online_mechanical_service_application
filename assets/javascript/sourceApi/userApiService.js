class UserServiceApi {
  createUser(user) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/user/createUser";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json", "application/xml");
    let response;
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        response = xhr.responseText;
      } else {
        console.error("Error:", xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error("Network error occurred");
    };
    xhr.send(JSON.stringify(user));
    return JSON.parse(response);
  }
  loginUser(user) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/user/loginUser";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json", "application/xml");
    let response;
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        response = xhr.responseText;
      } else {
        console.error("Error:", xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error("Network error occurred");
    };
    xhr.send(JSON.stringify(user));
    return JSON.parse(response);
  }

  findUserByNum(number) {
    let xhr = new XMLHttpRequest();
    const url =
      "http://localhost:8080/api/reparo/user/findByNum?number=" + number;
    xhr.open("GET", url, false);

    let response;
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        response = xhr.responseText;
      } else {
        console.error("Error:", xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error("Network error occurred");
    };
    xhr.send(JSON.stringify(user));
    return JSON.parse(response);
  }
  findUserById(id) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/user/findById?id=" + id;
    xhr.open("GET", url, false);

    let response;
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        response = xhr.responseText;
      } else {
        console.error("Error:", xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error("Network error occurred");
    };
    xhr.send(JSON.stringify(user));
    return JSON.parse(response);
  }
}
