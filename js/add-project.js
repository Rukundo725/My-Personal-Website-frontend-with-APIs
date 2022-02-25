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
const projectForm = document.querySelector('#add-new-project-form'); // getting the content of the project form through add-new-project-form id of the add-project.html

// saving data(projects) from the dashboard  to the firebase database
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('projects').add({
        title: projectForm.title.value,
        summary: projectForm.summary.value,
        link: projectForm.link.value
    });
    projectForm.title.value = '';
    projectForm.summary.value = '';
    projectForm.link.value = '';
    alert("The project was created");
});