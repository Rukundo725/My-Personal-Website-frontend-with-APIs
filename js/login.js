
// configuring the firebase connection 
const firebaseConfig = {
    apiKey: "AIzaSyCW9SS2XGL0OLGNXc2LjabpQYwxDBTGnoo",
    authDomain: "owner-my-personal-web.firebaseapp.com",
    projectId: "owner-my-personal-web",
    storageBucket: "owner-my-personal-web.appspot.com",
    messagingSenderId: "14382238606",
    appId: "1:14382238606:web:fcf7d8a1919b9d9e68b2df",
    measurementId: "G-MP4TB9HZPF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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