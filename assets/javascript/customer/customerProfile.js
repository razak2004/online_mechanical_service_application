isUserLogged();
let id = sessionStorage.getItem("loggedUserId");
let userId = tokenToId(id);
let response = UserServiceApi.findUserById(userId);
if (response.statusCode == 200) {
  let user = JSON.parse(response.data);
  document.getElementById("profileName").innerText = user.name;
  document.getElementById("profileNumber").innerText = user.number;
} else {
  Notify.error(response.error);
}
