const updatePost = document.querySelector('.upload-article');
const title = document.getElementById('title');
const article = document.getElementById('article');

const id = location.hash.slice(1);

fetch(`http://localhost:4000/api/blog/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    title.value = data.Article.title;
    article.value = data.Article.body;})

updatePost.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch(`http://localhost:4000/api/blog/${id}`, {
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
