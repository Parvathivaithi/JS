// !   This is the Cluster working code
// const cluster = require("cluster");
// const http = require("http");
// const os = require("os");

// if (cluster.isPrimary) {

//     console.log(`Primary process: ${process.pid}`);

//     const cpuCount = os.cpus().length;

//     for (let i = 0; i < cpuCount; i++) {
//         cluster.fork();
//     }

// } else {

//     const server = http.createServer((req, res) => {

//         res.writeHead(200, {
//             "Content-Type": "text/plain"
//         });

//         res.end(`Hello from worker ${process.pid}`);
//     });

//     server.listen(4004);

//     console.log(`Worker started: ${process.pid}`);
// }


// ! This is the worker thread 

const { Worker } = require("worker_threads");

console.log("Main thread:", process.pid);

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
    console.log("Result from worker:", result);
});

worker.on("error", (error) => {
    console.log("Worker error:", error);
});

worker.on("exit", (code) => {
    console.log("Worker exited with code:", code);
});