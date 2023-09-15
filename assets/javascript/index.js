// Define the data to be sent in the POST request

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
