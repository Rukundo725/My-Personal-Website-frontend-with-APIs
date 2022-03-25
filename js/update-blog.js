const updatePost = document.querySelector('.upload-article');
const title = document.getElementById('title');
const article = document.getElementById('article');

const id = location.hash.slice(1);

fetch(`https://mypersonalweb-app.herokuapp.com/api/blog/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    title.value = data.Article.title;
    article.value = data.Article.body;})

updatePost.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch(`https://mypersonalweb-app.herokuapp.com/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify({
          title:  title.value,
          article: article.value
        }),
      }).then(res=>{
        title.value = "";
        article.value = "";
        alert("Post updated");
        location.href = "../dashboard.html";
    }).catch(err=>{
        alert("Error: " + err.message)
    })
})
