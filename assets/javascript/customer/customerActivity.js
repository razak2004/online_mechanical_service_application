isUserLogged();
let liveBooking = sessionStorage.getItem("liveBookingId");
if (liveBooking != null) {
  let bookingId = tokenToId(liveBooking);
  let response = BookingServiceApi.findBookingById(bookingId);
  let booking = JSON.parse(response.data);
  if (!booking["acceptStatus"] && booking["live"]) {
    let workshopResponse = BookingServiceApi.findNearByWorkshops(bookingId);
    let workshops = JSON.parse(workshopResponse.data);
    workshops.sort((a, b) => a.distance - b.distance);
    console.log(workshops);
  }
  console.log(booking);
}
