// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// get the hamburger
var mobileBtn = document.getElementById('mobile-cta');

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// chane the nav style to block from none
const addBlock =()=>{
  navbar.style.display = "block";
  mobileBtn.removeEventListener("click", addBlock,);
};
mobileBtn.addEventListener('click', addBlock);


       



        



        

        // mobileBtn.addEventListener('click', () => {
        //   nav.classList.add('menu-btn'); // for adding the menu-btn class on click event
        //       })

// mobileBtnExit.addEventListener('click', () => {
//     nav.classList.remove('menu-btn'); // for removing the menu-btn class on click event
//         })


// document.getElementById(id).style.property = new style