
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
const messageForm = document.getElementById('send-message-form'); // getting elements of the form through send-message-form id of the index.html
var navbar = document.getElementById("nav"); // Get the navbar
var sticky = navbar.offsetTop; // Get the offset position of the navbar
var mobileBtn = document.getElementById('mobile-cta'); // get the hamburger


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// change the nav style to block from none on phone responsiveness screen
const addBlock =()=>{
  navbar.style.display = "block";
  mobileBtn.removeEventListener("click", addBlock,);
};
mobileBtn.addEventListener('click', addBlock);


// saving data(messages) from the user through the index.html form
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('messages').add({
      name: messageForm.name.value,
      email: messageForm.email.value,
      message: messageForm.message.value
  });
  messageForm.name.value = '';
  messageForm.email.value = '';
  messageForm.message.value = '';
  alert("Message sent");
});












