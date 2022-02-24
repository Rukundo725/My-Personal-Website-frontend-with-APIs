
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
const messageList = document.querySelector('#message-list');// getting the messageList id from dash-messageList.html 
const messageForm = document.querySelector('#send-message-form'); // getting elements of the form through send-message-form id of the index.html

// create element & render message(function to render messages from fire base firestore)
function renderMessage(doc){
    let div = document.createElement('div');
    div.className = 'container';
    let name = document.createElement('p');
    name.setAttribute("id", "name");
    let email = document.createElement('p');
    email.setAttribute("id", "email");
    let message = document.createElement('p');
    message.setAttribute("id", "message");

    div.setAttribute('message-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    message.textContent = doc.data().message;

    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(message);
    messageList.appendChild(div);
}

// getting data(messages) from the firebase
db.collection('messages').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderMessage(doc);
    });
});

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
    alert("The form was submitted");
});