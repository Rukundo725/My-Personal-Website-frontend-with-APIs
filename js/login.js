//  declaration of variables 
const logInForm = document.querySelector('#log-in-form'); // creating a variable to access the log in form from login.html

// login authentication
logInForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(logInForm.email.value, logInForm.password.value)
  .then((userCredential) => {
    console.log("Logged In")
    window.open("dashboard.html")
  });

});