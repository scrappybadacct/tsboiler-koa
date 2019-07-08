import http from "http";
import serverCallback from "./serverCallback";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3001;

http.createServer(serverCallback).listen(port);
