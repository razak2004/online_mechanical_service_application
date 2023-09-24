function createWorkshop(obj, id) {
  // Create elements
  const div = document.createElement("div");
  div.classList.add("workShopCard");

  const icon = document.createElement("span");
  icon.classList.add("material-symbols-outlined");
  icon.innerText = "store";

  const img = document.createElement("img");
  img.setAttribute("src", obj["image"]);
  img.setAttribute("alt", "workshop image");

  const h3 = document.createElement("h3");
  h3.textContent = obj["workshopName"];

  const cardMidDiv = document.createElement("div");
  cardMidDiv.classList.add("cardMid");

  const ratingsDiv = document.createElement("div");
  ratingsDiv.classList.add("content");
  const ratingsH6 = document.createElement("h6");
  ratingsH6.textContent = "Ratings: ⭐⭐⭐⭐";
  ratingsDiv.appendChild(ratingsH6);

  const typeDiv = document.createElement("div");
  typeDiv.classList.add("content");
  const typeH6 = document.createElement("h6");
  typeH6.textContent = "Type: " + obj["workshopType"] + " Wheelers";
  typeDiv.appendChild(typeH6);

  const addressDiv = document.createElement("div");
  addressDiv.classList.add("content");
  const addressH6 = document.createElement("h6");
  addressH6.textContent =
    "Address: " +
    obj["workshopAddress"] +
    "," +
    obj["workshopCity"] +
    "," +
    obj["workshopState"];
  addressDiv.appendChild(addressH6);

  const button = document.createElement("button");
  button.addEventListener("click", () => {
    openView(obj);
  });

  const span = document.createElement("span");
  span.setAttribute("class", "material-symbols-outlined");
  span.innerText = "visibility";
  button.append(span);
  let p = document.createElement("p");
  p.innerText = "View";
  button.append(p);

  if (obj["image"] == null) div.appendChild(icon);
  // Append elements to their respective parents
  else div.appendChild(img);

  div.appendChild(h3);
  div.appendChild(cardMidDiv);

  cardMidDiv.appendChild(ratingsDiv);
  cardMidDiv.appendChild(typeDiv);
  cardMidDiv.appendChild(addressDiv);

  div.appendChild(button);

  // Append the created DOM to a parent element on the page
  const parentElement = document.getElementById(id);
  parentElement.appendChild(div);
}
function oneWorkshopCard(obj, id) {
  let workshop = obj["workshopInfo"];
  // Create the workshop div element
  const workshopDiv = document.createElement("div");
  workshopDiv.className = "workshop";

  // Create the icon element for the store
  const storeIcon = document.createElement("i");
  storeIcon.className = "material-symbols-outlined";
  storeIcon.textContent = "store";

  // Create the detail div element
  const detailDiv = document.createElement("div");
  detailDiv.className = "detail";

  // Create the first info div element
  const infoDiv1 = document.createElement("div");
  infoDiv1.className = "info";

  // Create the icon element for storefront
  const storefrontIcon = document.createElement("p");
  storefrontIcon.className = "material-symbols-outlined";
  storefrontIcon.textContent = "storefront";

  // Create the workshop name element
  const workshopName = document.createElement("p");
  workshopName.textContent = workshop["workshopName"];

  // Append the icon and name to the first info div
  infoDiv1.appendChild(storefrontIcon);
  infoDiv1.appendChild(workshopName);

  // Create the second info div element
  const infoDiv2 = document.createElement("div");
  infoDiv2.className = "info";

  // Create the icon element for pedal bike
  const pedalBikeIcon = document.createElement("p");
  pedalBikeIcon.className = "material-symbols-outlined";
  pedalBikeIcon.textContent = "pedal_bike";

  // Create the text for 2 wheelers
  const twoWheelersText = document.createTextNode(
    workshop["workshopType"] + " Wheelers"
  );

  // Append the icon and text to the second info div
  infoDiv2.appendChild(pedalBikeIcon);
  infoDiv2.appendChild(twoWheelersText);

  // Create the third info div element
  const infoDiv3 = document.createElement("div");
  infoDiv3.className = "info";

  // Create the icon element for phone in talk
  const phoneInTalkIcon = document.createElement("p");
  phoneInTalkIcon.className = "material-symbols-outlined";
  phoneInTalkIcon.textContent = "phone_in_talk";

  // Create the phone number text
  const phoneNumberText = document.createTextNode(workshop["user"]["number"]);

  // Append the icon and phone number to the third info div
  infoDiv3.appendChild(phoneInTalkIcon);
  infoDiv3.appendChild(phoneNumberText);

  // Create the btn div element
  const btnDiv = document.createElement("div");
  btnDiv.className = "btn";

  // Create the distance text
  const distanceText = document.createElement("p");
  distanceText.textContent = obj["distance"].toFixed(2) + " km";

  // Create the anchor (a) element
  const anchorElement = document.createElement("a");
  anchorElement.className = "material-symbols-outlined";
  anchorElement.href =
    "https://www.google.com/maps/place/" + workshop["workshopAddress"];
  anchorElement.textContent = "home_pin";

  // Create the span element for visibility
  const visibilitySpan = document.createElement("span");
  visibilitySpan.className = "material-symbols-outlined";
  visibilitySpan.textContent = "visibility";

  // Append the distance, anchor, and span to the btn div
  btnDiv.appendChild(distanceText);
  btnDiv.appendChild(anchorElement);
  btnDiv.appendChild(visibilitySpan);

  // Append all the elements to the workshop div
  workshopDiv.appendChild(storeIcon);
  workshopDiv.appendChild(detailDiv);
  detailDiv.appendChild(infoDiv1);
  detailDiv.appendChild(infoDiv2);
  detailDiv.appendChild(infoDiv3);
  workshopDiv.appendChild(btnDiv);
  let workshopContain = document.getElementById(id);

  // Append the workshop div to the document body or any other desired container
  workshopContain.appendChild(workshopDiv);
}
function getLiveLocation(latitude, longitude) {
  let address = {};
  const apiUrl = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, false);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);
          const arr = data["display_name"].split(",");
          address = {
            streetAddress: "",
            city: arr[arr.length - 4].trim(),
            state: arr[arr.length - 3].trim(),
            country: arr[arr.length - 1].trim(),
          };
          for (let i = 0; i < arr.length - 4; i++) {
            address["streetAddress"] += arr[i] + ",";
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Request failed with status:", xhr.status);
      }
    }
  };

  xhr.send();

  return address;
}
const select_vehicle_Type = document.querySelector("#vehicleType");
if (select_vehicle_Type != null) {
  select_vehicle_Type.addEventListener("change", (event) => {
    type = event.target.value;
    if (type == "2") {
      createCompany(two_wheeler_company, "vehicleCompany");
    } else if (type == "3") {
      createCompany(three_wheeler_company, "vehicleCompany");
    } else if (type == "4") {
      createCompany(four_wheeler_company, "vehicleCompany");
    }
  });
}
//vehicle-models
const select_VehicleCompany = document.getElementById("vehicleCompany");
if (select_VehicleCompany != null) {
  select_VehicleCompany.addEventListener("change", (event) => {
    VehicleCompany = event.target.value;
    if (type == "2") {
      createVehicle(two_wheeler_company, "vehicleModel", VehicleCompany);
      // createCompany(two_wheeler_company, "v_company");
    } else if (type == "3") {
      createVehicle(three_wheeler_company, "vehicleModel", VehicleCompany);
    } else if (type == "4") {
      createVehicle(four_wheeler_company, "vehicleModel", VehicleCompany);
    }
  });
}
function createOtpCard(obj, id) {
  // Create the elements
  const otpCardDiv = document.createElement("div");
  otpCardDiv.id = "otpCard";

  const h4 = document.createElement("h4");
  h4.textContent =
    obj["workshopInfo"]["workshopName"] + " accepted your request";

  const p = document.createElement("p");
  p.textContent = "Share this otp to the Workshop owner";

  const h5 = document.createElement("h5");
  h5.textContent = obj["otp"];

  const locationLink = document.createElement("a");
  locationLink.href = "#";
  const locationIcon = document.createElement("i");
  locationIcon.className = "material-symbols-outlined";
  locationIcon.textContent = " near_me ";
  locationLink.href =
    "https://www.google.com/maps/place/" +
    obj["workshopInfo"]["workshopAddress"];

  locationLink.appendChild(locationIcon);
  locationLink.appendChild(document.createTextNode(" Location"));

  const phoneLink = document.createElement("a");
  phoneLink.href = "";
  const num = document.createElement("p");
  const phoneIcon = document.createElement("i");
  phoneIcon.className = "material-symbols-outlined";
  phoneIcon.textContent = " phone_in_talk ";
  num.innerText = obj["workshopInfo"]["user"]["number"];
  // document.createTextNode();
  phoneLink.appendChild(phoneIcon);
  phoneLink.appendChild(num);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel Booking";
  cancelButton.addEventListener("click", () => {
    let con = confirm("Are you sure want to cancel this booking");
    if (con) {
      cancelBooking(obj["bookingId"], "user");
    }
  });

  // Append elements to the otpCardDiv
  otpCardDiv.appendChild(h4);
  otpCardDiv.appendChild(p);
  otpCardDiv.appendChild(h5);
  otpCardDiv.appendChild(locationLink);
  otpCardDiv.appendChild(phoneLink);
  otpCardDiv.appendChild(cancelButton);

  // Append the otpCardDiv to the document body or any other desired location
  document.querySelector(id).appendChild(otpCardDiv);
}
