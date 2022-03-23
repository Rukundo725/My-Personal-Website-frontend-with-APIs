
window.onload = function () {
    if (localStorage.getItem("jwtToken") === null) {
      location.href = "../login.html";
    }
};