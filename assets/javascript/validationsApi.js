// validate Vehicle number

function validateVehicleNumber(vehicleNumber) {
  // Regular expression pattern for a simplified Indian vehicle number
  const pattern = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;

  // Check if the vehicleNumber matches the pattern
  if (pattern.test(vehicleNumber)) {
    return true; // Valid vehicle number
  } else {
    return false; // Invalid vehicle number
  }
}

const vehicleNumber = document.getElementById("vehicleNumber");
if (vehicleNumber != null) {
  vehicleNumber.addEventListener("change", function () {
    let chk = validateVehicleNumber(vehicleNumber.value);

    if (!chk) Notify.error("Enter a valid vehicle Number Eg: TN01AB3241");
    return;
  });
}
const vehicleYear = document.getElementById("vehicleYear");
if (vehicleYear != null) {
  vehicleYear.addEventListener("change", function () {
    let chk = vehicleYear.value;
    if (chk > 2023) Notify.error("Year cant be in future");
    if (isNaN(chk)) Notify.error("Year should not have Alaphabets ");
    if (chk < 1900) Notify.error("Year cant be less than 1900");
    return;
  });
}
