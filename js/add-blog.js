//  declaration of variables 
const articleForm = document.querySelector('#add-new-article-form'); // getting the content of the blog form through add-new-article-form id of the add-blog.html

// saving data(articles) from the dashboard  to the firebase database
articleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get form values
  let title = document.getElementById("title").value;
  //   let createdDate = document.getElementById("cdate").value;
    let article = document.getElementById("article").value;
    fetch("https://mypersonalweb-app.herokuapp.com/api/blog/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify({
      title: title,
      body: article,
    }),
  })
    .then(() => {
      console.log("Data saved");
      // window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
    
    alert("The article was created");
    window.location.href = "../dashboard.html";
});

