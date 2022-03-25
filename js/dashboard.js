
//  declaration of variables 
const articleList = document.querySelector('#article-list');


// const deleteArticle = document.querySelector('#delete');

// create element & render article(function to render articles from fire base firestore)
const renderArticle = function(doc){

    let container = document.createElement('div');
    container.className = 'container';
    container.setAttribute('article-id', doc._id);

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

    let readMore = document.createElement('a');
    var link = document.createTextNode("Read-more");


    let editDelete = document.createElement('div');
    editDelete.className = 'edit-delete';
   
    let span4 = document.createElement('span');
    span4.className = 'iconify';
    span4.setAttribute("id", "edit");
    span4.setAttribute("data-icon", "entypo:edit");

    

    let span5 = document.createElement('span');
    span5.className = 'iconify';
    span5.setAttribute("id", "delete");
    span5.setAttribute("data-icon", "fluent:delete-28-filled");
   

    let buttonEdit = document.createElement('button');
    buttonEdit.setAttribute("type", "button");

    let buttonDelete = document.createElement('button');
    buttonDelete.setAttribute("type", "button");
  
    
    img.src ="assets/article-img.jpeg"
    img.alt ="Article image"
    h2.textContent = doc.title;
    i1.innerHTML = "event"
    span1.textContent = doc.createdAt;;
    i2.innerHTML = "comment";
    span2.innerHTML = 4;
    p.textContent = doc.body.substring(0,240);
    

    articleImg.appendChild(img);
    articleContent.appendChild(h2);
    date.appendChild(i1);
    date.appendChild(span1);
    comment.appendChild(i2);
    comment.appendChild(span2);
    dateComment.appendChild(date);
    dateComment.appendChild(comment);
    articleContent.appendChild(dateComment);
    articleContent.appendChild(p);
    article.appendChild(articleImg);
    article.appendChild(articleContent);
    buttonEdit.appendChild(span4)
    buttonDelete.appendChild(span5)
    editDelete.appendChild(buttonEdit);
    editDelete.appendChild(buttonDelete);
    container.appendChild(article);
    container.appendChild(editDelete);
    articleList.appendChild(container);

  // ================================================================================================
    // deleting data
    buttonDelete.addEventListener("click",(e)=>{
        let id = doc._id;
        e.preventDefault();
        var answer = window.confirm("Are you sure you want to delete this blog?");
        if (answer) {
            fetch(`https://mypersonalweb-app.herokuapp.com/api/blog/${id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
                  },
                })
                console.log(id);
                alert('Article deleted');
                location.reload();

        }
        else {
            alert('Deleting Article was Aborted')
        }
        
    })

    

   
       
    
        

    // ================================================================================================

    // edit article

    buttonEdit.addEventListener('click',(e)=>{
        let id = doc._id;
        e.preventDefault();
        console.log('clicked')
        location.href = `../update-blog.html#${id}`
    })

}


const getData = async ( ) =>{
    const response = await fetch("https://mypersonalweb-app.herokuapp.com/api/blog/");
 
   //turning the response into the usable data
    const data = await response.json( );
 
    //Rendering articles from database
    
    // console.log(data.Articles);
    data.Articles.forEach((doc) => {
        renderArticle(doc);
    });
}
 
getData( );



   
     
    





