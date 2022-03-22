//  declaration of variables 
const logInForm = document.querySelector('#log-in-form'); // creating a variable to access the log in form from login.html

// login authentication
logInForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  // firebase.auth().signInWithEmailAndPassword(logInForm.email.value, logInForm.password.value)
  // .then((userCredential) => {
  //   console.log("Logged In")
  //   // window.open("dashboard.html")
  //   location.href ='dashboard.html';
  // });

  fetch("http://localhost:4000/api/user/login", {
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



