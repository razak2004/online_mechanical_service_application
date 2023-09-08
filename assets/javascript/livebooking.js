// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2heEjfk-ZZFgHKLbyQ1rCaXKAAQi8Qm4",
  authDomain: "reparo-c2273.firebaseapp.com",
  databaseURL: "https://reparo-c2273-default-rtdb.firebaseio.com",
  projectId: "reparo-c2273",
  storageBucket: "reparo-c2273.appspot.com",
  messagingSenderId: "199284904929",
  appId: "1:199284904929:web:e6bda7e3b41bb3e079f8a0",
  measurementId: "G-B8QVYWWTE9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getDatabase();
const starCountRef = ref(db, "bookings/");
onValue(starCountRef, (snapshot) => {
  let bookings = snapshot.val();
  localStorage.setItem("bookings", JSON.stringify(bookings));
});
let bookings = JSON.parse(localStorage.getItem("bookings"));
let workshops = JSON.parse(localStorage.getItem("workshops"));
const liveBooking = document.getElementById("liveBooking");
liveBooking.addEventListener("submit", (e) => {
  e.preventDefault();
  let chk = confirm("Are you sure want to find worshop near you ?");
  if (chk == true) {
    let booking_id = Date.now();
    let time = new Date();
    let customer_id = localStorage.getItem("LoginUser");
    let raisedStatus = true;
    let acceptBooking = false;
    let country = document.getElementById("countries").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("district").value;
    let address = document.getElementById("address").value;
    let vehicleType = document.getElementById("vehicleType").value;
    let vehicleCompany = document.getElementById("vehicleCompany").value;
    let vehicleModel = document.getElementById("vehicleModel").value;
    let vehicleProblem = document.getElementById("vehicleProblem").value;
    let bookObj = {
      time,
      booking_id,
      customer_id,
      raisedStatus,
      acceptBooking,
      country,
      state,
      city,
      address,
      vehicleType,
      vehicleCompany,
      vehicleModel,

      vehicleProblem,
    };
    let alreadyRaised = false;
    let check = bookings.find((e) => {
      if (e["customer_id"] == customer_id) {
        if (e["raisedStatus"] == true) {
          alreadyRaised = true;
          return true;
        }
      }
    });
    if (alreadyRaised == true) {
      alert("You already raised a booking cancel that to book another ");
      window.location.href = "./customerActivity.html";

      return;
    } else {
      bookings.push(bookObj);
      set(ref(db, "bookings/"), bookings);

      window.location.href = "./customerActivity.html";
    }
  } else {
    return;
  }
});
