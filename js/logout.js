// logout authentication
const logout = document.querySelector('#log-out');

logout.addEventListener('click', (e)=>{
    e.preventDefault()
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('sign-out successful');
        location.href ='login.html';
      }).catch((error) => {
        // An error happened.
        console.log('sign-out failed');
      });
  
});



 
