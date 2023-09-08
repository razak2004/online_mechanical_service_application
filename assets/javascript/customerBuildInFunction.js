function createWorkshop(obj, id) {
  // Create elements
  const div = document.createElement("div");
  div.classList.add("workShopCard");

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
  typeH6.textContent = "Type: " + obj["workshopType"];
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
  const span = document.createElement("span");
  span.setAttribute("class", "material-symbols-outlined");
  span.innerText = "visibility";
  button.append(span);
  let p = document.createElement("p");
  p.innerText = "View";
  button.append(p);

  // Append elements to their respective parents
  div.appendChild(img);
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
const select_vehicle_Type = document.querySelector("#vehicleType");
select_vehicle_Type.addEventListener("change", (event) => {
  // alert("g
  type = event.target.value;
  if (type == "2 wheelers") {
    createCompany(two_wheeler_company, "vehicleCompany");
  } else if (type == "3 wheelers") {
    createCompany(three_wheeler_company, "vehicleCompany");
  } else if (type == "4 wheelers") {
    createCompany(four_wheeler_company, "vehicleCompany");
  }
});
//vehicle-models
const select_VehicleCompany = document.getElementById("vehicleCompany");
select_VehicleCompany.addEventListener("change", (event) => {
  VehicleCompany = event.target.value;
  if (type == "2 wheelers") {
    createVehicle(two_wheeler_company, "vehicleModel", VehicleCompany);
    // createCompany(two_wheeler_company, "v_company");
  } else if (type == "3 wheelers") {
    createVehicle(three_wheeler_company, "vehicleModel", VehicleCompany);
  } else if (type == "4 wheelers") {
    createVehicle(four_wheeler_company, "vehicleModel", VehicleCompany);
  }
});
