let userId = localStorage.getItem("loginUserId");
if (userId != null) {
  let user = getWorkshopByUserId(userId);
  console.log(user);
  let liveBookingId = localStorage.getItem("liveAcceptedBookingId");
  if (liveBookingId != null) {
    let booking = getBookingByIdApi(liveBookingId);
    console.log(booking);
    if (booking["otp"] != 0) {
      createOtpCard("#otpDiv", booking);
    } else {
      //
      let serv = getServiceList(booking["bookingId"]);
      //  for(let obj :serv.)
      console.log(serv);
      const serviceDiv = document.getElementById("serviceDetailDiv");
      serviceDiv.style.display = "flex";
      document.getElementById("Total").innerText = serv["serviceAmount"];
      let arr = serv["listOfServices"];
      for (let i = 0; i < arr.length; i++) {
        createServiceDiv(arr[i], ".serviceLists");
      }
    }
  } else {
    let bookings = getUnAcceptedBooking(user.workshopId);
    bookings.sort((a, b) => a.distance - b.distance);
    if (bookings.length != 0) {
      for (let i = 0; i < 3; i++) {
        if (!bookings[i].acceptStatus) {
          createBookingCard(
            bookings[i],
            "bookingContainer",
            user["workshopId"]
          );
        }
      }
      console.log(bookings);
    } else {
      document.getElementById("headBooking").innerText =
        "No available bookings";
    }
  }
}
