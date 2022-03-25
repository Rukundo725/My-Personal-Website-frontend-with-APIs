//  declaration of variables 
const logInForm = document.querySelector('#log-in-form'); // creating a variable to access the log in form from login.html

// login authentication
logInForm.addEventListener('submit', (e)=>{
  e.preventDefault()

  fetch("https://mypersonalweb-app.herokuapp.com/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.localStorage["jwtToken"] = data.token;

      if (data.token) {
        window.location.href = "../dashboard.html";
      } else {
        alert("Invalid username or Password");
        window.location.href = "../login.html";
      }
    });

});



