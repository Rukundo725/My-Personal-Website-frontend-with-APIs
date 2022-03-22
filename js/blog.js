//  declaration of variables 
const commentForm = document.querySelector('#comment-section'); // getting the comment of the user  through comment-section id 
const commentList = document.querySelector('.comments-list');// getting the commentList  from dash-messageList.html 
const id = location.hash.slice(1);

// console.log(id);

const title = document.getElementById('title');
const date = document.getElementById('date');
const article = document.getElementById('article');

fetch(`http://localhost:4000/api/blog/${id}`)
  .then((response) => response.json())
  .then((doc) => {
    console.log(doc);
    title.innerHTML = doc.Article.title;
    date.innerHTML = doc.Article.createdAt;
    //     image.src = res.data().image
    article.innerHTML = doc.Article.body;
  });


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

// =======================================================================
