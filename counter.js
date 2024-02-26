let counter = 30;

// Function to update the counter and log it
function updateCounter() {
    console.log(counter);
    counter--;

    if (counter < 0) {
        clearInterval(interval); // Stop the timer when counter reaches 0
        console.log("Countdown reached 0");
    }
}

// Call updateCounter every second (1000 milliseconds)
let interval = setInterval(updateCounter, 1000);