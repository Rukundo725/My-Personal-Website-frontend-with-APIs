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
const articleForm = document.querySelector('#add-new-article-form'); // getting the content of the blog form through add-new-article-form id of the add-blog.html

// saving data(articles) from the dashboard  to the firebase database
articleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('articles').add({
        title: articleForm.title.value,
        brief: articleForm.brief.value,
        article: articleForm.article.value,
        date: articleForm.date.value
        
    });
    articleForm.title.value = '';
    articleForm.brief.value = '';
    articleForm.article.value = '';
    articleForm.date.value = '';
    alert("The article was created");
});
