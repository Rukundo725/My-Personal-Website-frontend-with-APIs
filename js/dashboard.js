
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
const articleList = document.querySelector('.container');

// create element & render article(function to render articles from fire base firestore)
const renderArticle = function(doc){
    let article = document.createElement('article');
    article.setAttribute('data-id', doc.id);
    
    let div1 = document.createElement('div');
    div1.className = 'article-img';

    let img = document.createElement('img');
    img.setAttribute("id", "article-img");

    let div2 = document.createElement('div');
    div2.className = 'article-content';

    let h2 = document.createElement('h2');

    let div3 = document.createElement('div');
    div3.className = 'date-comment';


    let div4 = document.createElement('div');
    div4.className = 'date';
   
    let i1 = document.createElement('i');
    i1.className = 'material-icons';

    let span1 = document.createElement('span');
    span1.setAttribute("id", "date");

    let div5 = document.createElement('div');
    div5.className = 'comment';
   
    let i2 = document.createElement('i');
    i2.className = 'material-icons';

    let span2 = document.createElement('span');
    span2.setAttribute("id", "comment-count");

    let p = document.createElement('p');

    let span3 = document.createElement('span');
    span3.setAttribute("id", "link");

    let a = document.createElement('a');

    var link = document.createTextNode("Read-more");

    let div6 = document.createElement('div');
    div6.className = 'edit-delete';
    

    let span4 = document.createElement('span');
    span4.className = 'iconify';
    span4.setAttribute("id", "edit");
    span4.setAttribute("data-icon", "entypo:edit");

    let span5 = document.createElement('span');
    span5.className = 'iconify';
    span5.setAttribute("id", "delete");
    span5.setAttribute("data-icon", "fluent:delete-28-filled");
   

    
    img.src ="../assets/article-img.jpeg"
    img.alt ="Article image"
    h2.textContent = doc.data().title;
    i1.innerHTML = "event"
    span1.textContent = doc.data().date;
    i2.innerHTML = "comment";
    span2.innerHTML = 4;
    p.textContent = doc.data().brief;
    a.href = "../blog.html"; 
 

    div1.appendChild(img);
    div2.appendChild(h2);
    div4.appendChild(i1);
    div4.appendChild(span1);
    div5.appendChild(i2);
    div5.appendChild(span2);
    div3.appendChild(div4);
    div3.appendChild(div5);
    a.appendChild(link); 
    span3.appendChild(a);
    p.appendChild(span3);
    div2.appendChild(div3);
    div2.appendChild(p);
    article.appendChild(div1);
    article.appendChild(div2);
    div6.appendChild(span4);
    div6.appendChild(span5);
    articleList.appendChild(article);
    articleList.appendChild(div6);

     // deleting data
    span5.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('articles').doc(id).delete();
    });
}

// getting data(articles) from the firebase
db.collection('articles').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderArticle(doc);
    });
});







