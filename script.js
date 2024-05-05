const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
// Variable that tracks if the counters have been activated
let activated = false;

//Add scroll event to the page
window.addEventListener("scroll", ( ) => {
    /* If the page is scrolled to the containers
    element and t ne counters are not voted */
    if(
    pageYOffset > container.offsetTop - container.offsetHeight - 200
    && activated === false
    ){
        
    }
