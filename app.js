require("dotenv").config();

const http = require("http");
const serverCallback = require("./build/serverCallback");

const port = process.env.PORT || 3001;

http.createServer(serverCallback).listen(port);
