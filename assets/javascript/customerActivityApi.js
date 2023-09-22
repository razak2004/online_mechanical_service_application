let bookingId = localStorage.getItem("livebookingId");
if (bookingId == null) {
  const h2 = document.getElementById("bookingNotfound");
  h2.style.display = "flex";
  const waitingCard = document.querySelector(".waitingCard");
  waitingCard.style.display = "none";

  h2.innerText = "No live bookings available";
} else {
  let i = 0;
  let booking = getBookingByIdApi(bookingId);
  setInterval(() => {
    booking = getBookingByIdApi(bookingId);
  }, 4000);

  console.log(booking);
  if (booking["workshopInfo"] == null) {
    let nearWorkshops = findNearByWorkshopsApi(bookingId);
    nearWorkshops.sort((a, b) => a.distance - b.distance);

    const intervalId = setInterval(() => {
      if (i < 3) {
        let h2 = document.getElementById("workshopNo");
        h2.innerText = "Founded " + (i + 1) + " Workshop near you";
        oneWorkshopCard(nearWorkshops[i], "container");
      }
      i++;
    }, 5000);
  } else {
    createOtpCard(booking, ".otpCard");
  }
}
