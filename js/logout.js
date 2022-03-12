// logout authentication
const logout = document.querySelector('#log-out');

logout.addEventListener('click', (e)=>{
    e.preventDefault()
    auth.signOut().then(res=>{
       console.log('sign-out successful');
      auth.onAuthStateChanged(user => {
          if (user) {

          } else {
              location.href = "../login.html"
          }
      });
  });
  
});