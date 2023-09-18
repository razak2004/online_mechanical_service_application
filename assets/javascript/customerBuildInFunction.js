const select_vehicle_Type = document.querySelector("#vehicleType");
select_vehicle_Type.addEventListener("change", (event) => {
  // alert("g
  type = event.target.value;
  if (type == "2") {
    createCompany(two_wheeler_company, "vehicleCompany");
  } else if (type == "3") {
    createCompany(three_wheeler_company, "vehicleCompany");
  } else if (type == "4") {
    createCompany(four_wheeler_company, "vehicleCompany");
  }
});
//vehicle-models
const select_VehicleCompany = document.getElementById("vehicleCompany");
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
