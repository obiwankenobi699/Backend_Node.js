function heavyTask() {
    console.log("Blocking CPU-heavy task started");

    let s = 0;
    for (let i = 0; i < 1e10; i++) {   // intense CPU loop
        s += i;
    }

    console.log("Blocking CPU-heavy task finished");
    return s;
}

console.log("1.Script Start");

setTimeout(() => {
    console.log("2.Settimeout macrotask");
}, 10000);

setInterval(() => {
    console.log("4.SetInterval");
}, 10000);

Promise.resolve().then(() => {
    console.log("3.Promise microtask");
});

async function example() {
    console.log("5.Async start"); 
    await null;                     
    console.log("6.Async microtask");
}

example();

// CPU HEAVY TASK BLOCKS EVERYTHING BELOW
heavyTask();

console.log("7.Script End");
