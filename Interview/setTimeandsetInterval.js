

const timerId = setTimeout(() => {
    console.log("Timer executed!");
}, 1000);

// output: Timer executed! (after 1 second)

const intervalId = setInterval(() => {
    console.log("Interval executed!");
}, 2000);

// output: Interval executed! (every 2 seconds)

