const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

eventEmitter.on("greet", () => console.log("hello"));
eventEmitter.emit("greet");
