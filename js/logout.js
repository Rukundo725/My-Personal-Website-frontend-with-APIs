// logout authentication
const log_out = document.querySelector('#log-out');

log_out.addEventListener('click',logout);
function logout(e) {
    e.preventDefault()
    localStorage.removeItem("jwtToken");
    location.href = "../login.html";}