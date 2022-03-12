
//  declaration of variables 
const articleList = document.querySelector('#article-list');

// const deleteArticle = document.querySelector('#delete');

// create element & render article(function to render articles from fire base firestore)
const renderArticle = function(doc){

    let container = document.createElement('div');
    container.className = 'container';
    container.setAttribute('article-id', doc.id);

    let article = document.createElement('article');

    let articleImg = document.createElement('div');
    articleImg.className = 'article-img';

    let img = document.createElement('img');
    img.setAttribute("id", "article-img");

    let articleContent = document.createElement('div');
    articleContent.className = 'article-content';

    let h2 = document.createElement('h2');

    let dateComment = document.createElement('div');
    dateComment.className = 'date-comment';


    let date = document.createElement('div');
    date.className = 'date';
   
    let i1 = document.createElement('i');
    i1.className = 'material-icons';

    let span1 = document.createElement('span');
    span1.setAttribute("id", "date");

    let comment = document.createElement('div');
    comment.className = 'comment';
   
    let i2 = document.createElement('i');
    i2.className = 'material-icons';

    let span2 = document.createElement('span');
    span2.setAttribute("id", "comment-count");

    let p = document.createElement('p');

    let span3 = document.createElement('span');
    span3.setAttribute("id", "link");

    let a = document.createElement('a');

    var link = document.createTextNode("Read-more");

    let editDelete = document.createElement('div');
    editDelete.className = 'edit-delete';
    editDelete.setAttribute('article-id', doc.id);
   
    

    let button1 = document.createElement('button');
    button1.className = 'iconify';
    button1.setAttribute("type", "button");
    button1.setAttribute("id", "edit");
    button1.setAttribute("data-icon", "entypo:edit");

    let button2 = document.createElement('button');
    button2.className = 'iconify';
    button2.setAttribute("id", "delete");
    button2.setAttribute("data-icon", "fluent:delete-28-filled");
    button2.setAttribute('article-id', doc.id);
    //  span5.setAttribute("onclick", "deleteArticle");
    // span5.style.color = 'yellow';

    
   

    
    img.src ="../assets/article-img.jpeg"
    img.alt ="Article image"
    h2.textContent = doc.data().title;
    i1.innerHTML = "event"
    span1.textContent = doc.data().date;
    i2.innerHTML = "comment";
    span2.innerHTML = 4;
    p.textContent = doc.data().article.substring(0,140);
    a.href = "../blog.html"; 
 

    articleImg.appendChild(img);
    articleContent.appendChild(h2);
    date.appendChild(i1);
    date.appendChild(span1);
    comment.appendChild(i2);
    comment.appendChild(span2);
    dateComment.appendChild(date);
    dateComment.appendChild(comment);
    a.appendChild(link); 
    span3.appendChild(a);
    p.appendChild(span3);
    articleContent.appendChild(dateComment);
    articleContent.appendChild(p);
    article.appendChild(articleImg);
    article.appendChild(articleContent);
    editDelete.appendChild(button1);
    editDelete.appendChild(button2);
    container.appendChild(article);
    container.appendChild(editDelete);
    articleList.appendChild(container);
  
    // // deleting data
    // span5.addEventListener('click', (e) => {
    //     // e.stopPropagation();
    //     // let id = e.target.parentElement.getAttribute('article-id');
    //     // let id = doc.id;
    //     console.log(doc.id)
    //     db.collection('articles').doc(doc.id).delete();
    // });

    button2.addEventListener("click",(e)=>{
        e.preventDefault();
        db.collection('articles').doc(doc.id).delete()
        .then(res=>{
            alert("Article deleted");
            location.reload();
        }).catch(err=>{
            alert("Error: " + err.message)
        })
    })

    
    // span5.addEventListener("click",deleteArticle);


    // =================================================

    // edit article

    button1.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('clicked')
        location.href = `update-blog.html#${doc.id}`
    })


}

// getting data(articles) from the firebase
db.collection('articles').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderArticle(doc);
    });
});



    // const deleteArticle = function(e){
    //     e.preventDefault();
    //     db.collection('articles').doc(doc.id).delete()
    //     .then(res=>{
    //         alert("Article deleted");
    //         location.reload();
    //     }).catch(err=>{
    //         alert("Error: " + err.message)
    //     })
    // }


//    const updateArticle = (e)=>{
//         e.preventDefault();
//         console.log('clicked')
//         location.href = `update-blog.html#${doc.id}`
//     }

     
    





