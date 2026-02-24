"use stict"

let count = 0;

const intarvailed = setInterval(() => {
    count++;
    console.log(`Set Time: ${count}`);
    if (count === 10) {
        clearInterval(intarvailed);
        console.log(`This count: ${count}`)
    }
}, 1000);
