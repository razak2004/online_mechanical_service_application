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
let workShops = [];

const starCountRef = ref(db, "workshop/");
onValue(starCountRef, (snapshot) => {
  workShops = snapshot.val();
  localStorage.setItem("workshops", JSON.stringify(workShops));
});

let countryArr = document.getElementById("countries");
let stateArr = document.getElementById("state");
let districtArr = document.getElementById("district");

const authToken = getToken();
async function getData(endpoint) {
  const token = await authToken;
  const response = await fetch(
    `https://www.universal-tutorial.com/api/${endpoint}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.auth_token}`,
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}
async function getToken() {
  const response = await fetch(
    `https://www.universal-tutorial.com/api/getaccesstoken`,
    {
      method: "GET",
      headers: {
        "api-token":
          "5G63Z8Pifh6ZHt4N2togj-GElSMBCwt9hK4pIMIM1j3y0HsbZTpD_V-89QK1uxEStNQ",
        Accept: "application/json",
        "user-email": "utchikanna3108@gmail.com",
      },
    }
  );
  const data = await response.json();
  return data;
}
async function showData() {
  const dataArr = await getData("countries");
  const stateList = await getData(`states/${dataArr[0]["country_name"]}`);
  let option;

  for (const element of dataArr) {
    option = document.createElement("option");

    option.value = element["country_name"];
    option.text = element["country_name"];
    countryArr.appendChild(option);
  }
  for (const element of stateList) {
    option = document.createElement("option");
    option.value = element["state_name"];
    option.text = element["state_name"];
    stateArr.appendChild(option);
  }
}
showData();
countryArr.addEventListener("change", async () => {
  const dataArr = await getData(`states/${countryArr.value}`);
  stateArr.innerHTML = "";

  for (const element of dataArr) {
    var option = document.createElement("option");
    option.value = element["state_name"];
    option.text = element["state_name"];
    stateArr.appendChild(option);
  }
});
stateArr.addEventListener("change", async () => {
  const dataArr = await getData(`cities/${stateArr.value}`);
  districtArr.innerHTML = "";

  for (const element of dataArr) {
    var option = document.createElement("option");
    option.value = element["city_name"];
    option.text = element["city_name"];
    districtArr.appendChild(option);
  }
});
let oneWorkshop = {};
let workshops = JSON.parse(localStorage.getItem("workshops"));
// number registration
const numberForm = document.getElementById("numberForm");
numberForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let workshopId = Date.now();
  let name = document.getElementById("signName").value;
  let number = document.getElementById("signNumber").value;
  let password = document.getElementById("signPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let otp = generateOTP();
  if (password != confirmPassword) {
    Notify.error("Passwords do not match");
    return;
  }

  let work = {
    workshopId,
    name,
    number,
    password,
    otp,
  };
  let check = checkUserFunction(work);
  if (check == false) {
    let phoneNumber = document.getElementById("phoneNumber");
    phoneNumber.innerText = work["number"];
    oneWorkshop = work;
    alert(otp + ",");
    openDiv("#otpForm", "#numberForm");
  }
});

//otp
const otpForm = document.getElementById("otpForm");
otpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // let workOtp = workshops.find((e) => {
  //   if (e.workshopId == oneWorkshop) {
  //     return true;
  //   }
  // });
  let otpValue = document.getElementById("otpValue").value;
  if (oneWorkshop["otp"] == otpValue) {
    alert("phone number verified");
    let name = document.getElementById("ownerName");
    name.value = oneWorkshop["name"];
    let number = document.getElementById("ownerNumber");
    number.value = oneWorkshop["number"];

    openDiv("#workshopForm", "#otpForm");
  } else {
    alert("otp is incorrect");
    return;
  }
});

console.log(oneWorkshop);
const workshopForm = document.getElementById("workshopForm");
workshopForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("ownerName").value;
  let number = document.getElementById("ownerNumber").value;
  let password = oneWorkshop["password"];
  let workShopID = oneWorkshop["workshopId"];
  let pickupService = false;
  let breakdownService = false;
  let image = document.getElementById("image").value;
  let workshopName = document.getElementById("workshopName").value;
  let workshopCountry = document.getElementById("countries").value;
  let workshopState = document.getElementById("state").value;
  let workshopCity = document.getElementById("district").value;
  let workshopAddress = document.getElementById("address").value;
  let workshopType = document.getElementById("vehicleType").value;
  let openTime = document.getElementById("openTime").value;
  let closeTime = document.getElementById("closeTime").value;
  let GeneralCost = document.getElementById("GeneralCost").value;
  let engineCost = document.getElementById("engineCost").value;
  let electricCost = document.getElementById("electricCost").value;
  let SuspensionCost = document.getElementById("SuspensionCost").value;
  let pickupCheck = document.getElementById("pickupService").checked;
  let breakdownCheck = document.getElementById("breakdownService").checked;
  if (pickupCheck == true) {
    pickupService = true;
  }
  if (breakdownCheck == true) {
    breakdownService = true;
  }

  // if (JSON.parse(localStorage.getItem("workshops")) != null) {
  //   workshops = JSON.parse(localStorage.getItem("workshops"));
  // }
  let workshopObj = {
    name,
    number,
    password,
    workShopID,
    workshopName,
    workshopCountry,
    workshopState,
    workshopCity,
    workshopAddress,
    workshopType,
    openTime,
    closeTime,
    GeneralCost,
    engineCost,
    electricCost,
    SuspensionCost,
    pickupService,
    breakdownService,
    image,
  };
  workshops.push(workshopObj);
  set(ref(db, "workshop/"), workshops);

  Notify.success("Thank you for registering your workShop");
  openDiv("#workshopLoginForm", "#workshopForm");
});

//login
let loginForm = document.getElementById("workshopLoginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginNumber = document.getElementById("loginNumber").value;
  let loginPassword = document.getElementById("loginPassword").value;
  alert(loginNumber);
  read(loginNumber, loginPassword, 0);
});
let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
  openDiv("#workshopLoginForm", "#numberForm");
});
let signBtn = document.getElementById("signBtn");
signBtn.addEventListener("click", () => {
  openDiv("#numberForm", "#workshopLoginForm");
});

// workshop registration

//name validation
let signUpName = document.getElementById("signName");
signUpName.addEventListener("change", (e) => {
  e = signUpName.value;
  let check = hasnotAlphabet(e);
  if (check == true) {
    Notify.error("Name only contain alphabets");
  }
});
// details
let ownerName = document.getElementById("ownerName");
ownerName.addEventListener("change", (e) => {
  e = ownerName.value;
  let check = hasnotAlphabet(e);
  if (check == true) {
    Notify.error("Name only contain alphabets");
  }
});
//workshop name
let workshopName = document.getElementById("workshopName");
workshopName.addEventListener("change", (e) => {
  e = workshopName.value;
  let check = hasnotAlphabet(e);
  if (check == true) {
    Notify.error("Name only contain alphabets");
  }
});

//number validation

let signUpNumber = document.getElementById("signNumber");
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
let OwnerNumber = document.getElementById("ownerNumber");
OwnerNumber.addEventListener("change", (e) => {
  e = OwnerNumber.value;
  let check = hasNumber(e);
  if (check == false) {
    Notify.error("Only Numbers are accepted");
  }
  if (e.length != 10) {
    Notify.error("Number should be 10 digits");
  }
});

let checkPassword = document.getElementById("signPassword");
checkPassword.addEventListener("change", (e) => {
  e = checkPassword.value;
  let numberCheck = hasNumber(e);
  let len = e.length;
  if (numberCheck == false) {
    Notify.error("only numbers are accepted");
  }
  if (len != 4) {
    Notify.error("password should be in 4 digits");
  }
});
