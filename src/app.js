import server from "./server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3001;

server.listen(port);
