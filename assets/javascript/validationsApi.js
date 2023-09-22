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
function vehicleYearValidation(year) {
  if (year > 2023) {
    Notify.error("Year cant be in future");
    return false;
  }
  if (isNaN(year)) {
    Notify.error("Year should not have Alaphabets ");
    return false;
  }
  if (year < 1900) {
    Notify.error("Year cant be less than 1900");
    return false;
  }
  return true;
}
function problemValidation(str) {
  const regex = /^[a-zA-Z ]+$/;
  if (!regex.test(str) || str == "") {
    Notify.error("problem Should not contain numbers");
  }
  return regex.test(str);
}
function addressValidation(str) {
  const regex = /^[a-zA-Z0-9\s.,'#\-]+(\s[A-Za-z0-9\-#]+)?$/;
  if (!regex.test(str) || str == "") {
    Notify.error(
      "Address Should not contain any special character except (,) "
    );
  }
  return regex.test(str);
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
