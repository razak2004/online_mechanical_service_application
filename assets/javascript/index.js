const signUpForm = document.getElementById("signUpForm");
const otpForm = document.getElementById("otpVerify");
const loginForm = document.getElementById("loginForm");

// Define the data to be sent in the POST request
const postData = {
  username: "john_doe",
  password: "secret123",
};

// Send the POST request

const signUpButton = document.getElementById("signButton");
signUpButton.addEventListener("click", () => {
  signUpForm.style.display = "flex";
});
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", () => {
  loginForm.style.display = "flex";
});

let oneUser = {};

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
    addUser(oneUser);
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
