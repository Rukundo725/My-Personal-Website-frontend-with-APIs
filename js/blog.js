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
const commentForm = document.querySelector('#comment-section'); // getting the comment of the user  through comment-section id 
const commentList = document.querySelector('.comments-list');// getting the commentList  from dash-messageList.html 


// saving data(comments) from the article  to the firebase database
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comments').add({
        email: commentForm.email.value,
        comment: commentForm.comment.value,
        
    });
    commentForm.email.value = '';
    commentForm.comment.value = '';
    
    alert("your comment is highly appreciated");
});

// comments rendering from the firebase
const renderComment = function(doc){
    let div = document.createElement('div');
    div.className = 'container';
    let email = document.createElement('h5');
    email.setAttribute("id", "email");
    let comment = document.createElement('p');
    comment.setAttribute("id", "comment");
    

    div.setAttribute('comment-id', doc.id);
    email.textContent = doc.data().email;
    comment.textContent = doc.data().comment;
    

    div.appendChild(email);
    div.appendChild(comment);
    commentList.appendChild(div);
}

// getting data(comments) from the firebase
db.collection('comments').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderComment(doc);
    });
});

