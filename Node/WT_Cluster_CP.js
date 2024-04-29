// Here's a small example demonstrating a simple task using each of the three modules:

// 1. **Cluster Module**:
//    - The following example creates a simple HTTP server using the cluster module to utilize multiple CPU cores efficiently:

// ```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case, an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
// ```

// 2. **Child Process Module**:
//    - The following example executes a shell command using the child process module:

// ```javascript
const { exec } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
// ```

// 3. **Worker Threads**:
//    - The following example demonstrates using worker threads to perform a simple computation:

// ```javascript
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);

    worker.on('message', (message) => {
        console.log('Worker thread says:', message);
    });

    worker.postMessage('Hello from main thread!');
} else {
    parentPort.on('message', (message) => {
        console.log('Main thread says:', message);
        // Perform some computation
        const result = 1 + 2;
        // Send the result back to the main thread
        parentPort.postMessage(result);
    });
}
// ```

// These examples illustrate how each module can be used to perform different tasks, such as running an HTTP server, executing shell commands, and performing parallel computation.