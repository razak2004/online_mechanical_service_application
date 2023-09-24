isUserLogged();
let liveBooking = sessionStorage.getItem("liveBookingId");
if (liveBooking != null) {
  document.getElementById("waitingCard").style.display = "flex";
  document.getElementById("bookingNotfound").style.display = "none";
  let bookingId = tokenToId(liveBooking);
  let response = BookingServiceApi.findBookingById(bookingId);
  let booking = JSON.parse(response.data);
  if (!booking["acceptStatus"] && booking["live"]) {
    let workshopResponse = BookingServiceApi.findNearByWorkshops(bookingId);
    let workshops = JSON.parse(workshopResponse.data);
    workshops.sort((a, b) => a.distance - b.distance);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < 3) {
        let h2 = document.getElementById("workshopNo");
        h2.innerText = "Founded " + (i + 1) + " Workshop near you";
        oneWorkshopCard(workshops[i], "container");
      }
      i++;
    }, 5000);
    let cancelBtn = document.getElementById("cancelButton");
    cancelBtn.addEventListener("click", () => {
      let con = confirm("Are you want to cancel the request");
      if (con) {
        let response = BookingServiceApi.cancelBooking(bookingId, "user");
        if (response.statusCode == 200) {
          alert("your booking has been cancelled successfully");
          sessionStorage.removeItem("liveBookingId");
          window.location.reload();
        } else {
          Notify.error(response.error);
        }
      }
    });
    console.log(workshops);
  } else if (
    booking["acceptStatus"] &&
    booking["live"] &&
    booking["otp"] != 0
  ) {
    createOtpCard(booking, ".otpCard");
  }
}
