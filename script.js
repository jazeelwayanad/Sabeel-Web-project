const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
// Variable that tracks if the counters have been activated
let activated = false;

//Add scroll event to the page
window.addEventListener("scroll", () => {
    /* If the page is scrolled to the containers
    element and t ne counters are not voted */
    if (
        pageYOffset > container.offsetTop - container.offsetHeight - 50
        && activated === false
    ) {
        counters.forEach(counter => {

            counter.innerText = 0;

            let count = 0;
            //Update count function
            function updateCount() {
                //Get counter target number to count to
                const target = parseInt(counter.dataset.count);
                //As Long as the count is below the target number
                if(count < target) {
                    //Increment the count
                    count++;
                    //Set the counter text to the count
                    counter.innerText = count;
                    // Repeat this every 10 stilteconds
                    setTimeout(updateCount, 10);
                } else{
                    counter.innerText = target;
                }
            }

            updateCount();

            activated = true;
        });
    } else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 100
        || pageYOffset === 0
        && activated === true
    ) { 
    //Select all counters
    counters.forEach(counter =>{
    //Set counter text back to zero 
    counter.innerText = 0;
    });
    //Set activated to false
    activated = false;
    }
    });