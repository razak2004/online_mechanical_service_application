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
console.log(db);
const starUserRef = ref(db, "users/");
onValue(starUserRef, (snapshot) => {
  let users = snapshot.val();
  localStorage.setItem("users", JSON.stringify(users));
});
const starCountRef = ref(db, "workshop/");
onValue(starCountRef, (snapshot) => {
  let workShops = snapshot.val();
  localStorage.setItem("workshops", JSON.stringify(workShops));
});
const starBookingRef = ref(db, "bookings/");
onValue(starBookingRef, (snapshot) => {
  let bookings = snapshot.val();
  localStorage.setItem("bookings", JSON.stringify(bookings));
});

const signUpForm = document.getElementById("signUpForm");
const otpForm = document.getElementById("otpVerify");
const loginForm = document.getElementById("loginForm");
let users = JSON.parse(localStorage.getItem("users"));

const signUpButton = document.getElementById("signButton");
signUpButton.addEventListener("click", () => {
  signUpForm.style.display = "flex";
});
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", () => {
  loginForm.style.display = "flex";
});

let oneUser = {};

// signUp form
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let user_id = Date.now();
  let otp = generateOTP();

  if (password != confirmPassword) {
    // Notify.error("Password doesnot match");
    alert("password doesn't match");
    return;
  } else {
    let obj = {
      otp,
      user_id,
      name,
      number,
      password,
    };
    let check = checkUserFunction(obj);
    console.log(check);
    if (check == false) {
      //   users.push(obj);
      //   localStorage.setItem("users", JSON.stringify(users));
      //   set(ref(db, "users/"), users);
      oneUser = obj;
      console.log(oneUser);
      alert("Yor sign Up OTP is" + obj["otp"]);
      let otpNumber = document.getElementById("otpNumber");
      otpNumber.innerText = oneUser["number"];

      openDiv("#otpVerify", "#signUpForm");
    } else {
      return;
    }
  }
});

const signLogOut = document.getElementById("signLogOut");
signLogOut.addEventListener("click", () => {
  signUpForm.style.display = "none";
});

// otp
otpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let otp = document.getElementById("otpValue").value;
  if (otp == oneUser["otp"]) {
    alert("Phone number verified ");
    users.push(oneUser);

    set(ref(db, "users/"), users);

    alert("Account created try to login");
    openDiv("#loginForm", "#otpVerify");
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let logNumber = document.getElementById("loginNumber").value;
  let logPassword = document.getElementById("loginPassword").value;
  read(logNumber, logPassword, 1);
});

const LoginExit = document.getElementById("LoginExit");
LoginExit.addEventListener("click", () => {
  loginForm.style.display = "none";
});

let name = document.getElementById("name");
name.addEventListener("change", (e) => {
  e = name.value;
  let check = hasnotAlphabet(e);
  if (check == true) {
    Notify.error("Name only contain alphabets");
  }
});
let signUpNumber = document.getElementById("number");
signUpNumber.addEventListener("change", (e) => {
  e = signUpNumber.value;
  let check = hasNumber(e);
  if (check == false) {
    Notify.error("Only Numbers are accepted");
  }
  if (e.length != 10) {
    Notify.error("Number should be 10 digits");
  }
});
let loginNumber = document.getElementById("loginNumber");
loginNumber.addEventListener("change", (e) => {
  e = loginNumber.value;
  let check = hasNumber(e);
  if (check == false) {
    Notify.error("Only Numbers are accepted");
  }
  if (e.length != 10) {
    Notify.error("Number should be 10 digits");
  }
});
let otpNumber = document.getElementById("otpValue");
otpNumber.addEventListener("change", (e) => {
  e = otpNumber.value;
  let check = hasNumber(e);
  if (check == false) {
    Notify.error("Only Numbers are accepted");
  }
  if (e.length != 4) {
    Notify.error("OTP should be 4 digits");
  }
});

let password = document.getElementById("password");
password.addEventListener("change", (e) => {
  e = password.value;
  if (e.length > 6) {
    Notify.error("Password should not be more than 6 digits");
  }
});
let confirmPassword = document.getElementById("confirmPassword");
confirmPassword.addEventListener("change", (e) => {
  e = confirmPassword.value;
  if (e.length > 6) {
    Notify.error("Password should not be more than 6 digits");
  }
});
