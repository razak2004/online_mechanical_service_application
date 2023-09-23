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
class VehicleServiceApi {
  createVehicle(vehicle) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/vehicle/createVehicle";
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
    xhr.send(JSON.stringify(vehicle));
    return JSON.parse(response);
  }
}
class WorkshopServiceApi {
  createWorkShop(workshop, userId) {
    let xhr = new XMLHttpRequest();
    const url =
      "http://localhost:8080/api/reparo/workshop/createWorkshop?userId=" +
      userId;
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
    xhr.send(JSON.stringify(workshop));
    return JSON.parse(response);
  }
  getAllWorkshops(id) {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/workshop/getAllWorkshops?id=" + id; // Replace with your actual endpoint URL

    let workshops;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        workshops = xhr.responseText;
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
    return JSON.parse(workshops);
  }
  findWorkshopByUserId(id) {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/workshop/getWorkshopByUserId?id=" + id; // Replace with your actual endpoint URL

    let workshops;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        workshops = xhr.responseText;
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
    return JSON.parse(workshops);
  }
  findBookings(id) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/workshop/getAllUnAcceptedBooking?workshopId=" +
      id;
    let bookings;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        bookings = xhr.responseText;
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
    return JSON.parse(bookings);
  }
}

class BookingServiceApi {
  createBooking(booking) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/booking/createBooking";
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
    xhr.send(JSON.stringify(booking));
    return JSON.parse(response);
  }
  // workshopId,bookingId,OTP,
  acceptBooking(acceptObj) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/booking/acceptBooking";
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
    xhr.send(JSON.stringify(acceptObj));
    return JSON.parse(response);
  }
  findNearByWorkshops(bookingId) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/booking/nearWorkshops?bookingId=" +
      bookingId; // Replace with your actual endpoint URL

    let workshops;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        workshops = xhr.responseText;
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
    return JSON.parse(workshops);
  }
  findBookingById(id) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/booking/getBookingById?bookingId=" + id; // Replace with your actual endpoint URL

    let booking;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        booking = xhr.responseText;
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
    return JSON.parse(booking);
  }
  cancelBooking(id, user) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/booking/cancelBooking?bookingId=" +
      id +
      "&user=" +
      user; // if user = "user" - cancel booking by user side else cancel booking by workshop side

    let booking;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        booking = xhr.responseText;
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
    return JSON.parse(booking);
  }
}
class ServiceListServiceApi {
  createServiceList(bookingId) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/service/createServiceList?bookingId=" +
      bookingId; // Replace with your actual endpoint URL

    let data;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        data = xhr.responseText;
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
    return JSON.parse(data);
  }
  createService(service) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/service/createService";
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
    xhr.send(JSON.stringify(service));
    return JSON.parse(response);
  }
  findServiceListByBookingId(bookingId) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/service/getServiceListByBookingId?bookingId=" +
      bookingId; // Replace with your actual endpoint URL

    let data;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        data = xhr.responseText;
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
    return JSON.parse(data);
  }
  updateService(service) {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/api/reparo/service/updateService";
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
    xhr.send(JSON.stringify(service));
    return JSON.parse(response);
  }
  deleteService(serviceId) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/service/deleteService?serviceId=" +
      serviceId; // Replace with your actual endpoint URL

    let data;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        data = xhr.responseText;
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
    return JSON.parse(data);
  }
  makeServiceListLive(listId) {
    var xhr = new XMLHttpRequest();

    // Define the URL for your Spring Boot GET endpoint
    var url =
      "http://localhost:8080/api/reparo/service/makeServiceLive?serviceDetailId=" +
      listId; // Replace with your actual endpoint URL

    let data;

    // Configure the request
    xhr.open("GET", url, false);

    // Set up a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        data = xhr.responseText;
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
    return JSON.parse(data);
  }
}
