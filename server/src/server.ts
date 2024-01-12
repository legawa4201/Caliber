import express, { Application } from "express";
import cors from "cors";

import errorHandler from "./middlewares/errorHandler";
import routerV1 from "./routes/v1";

const server: Application = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(`public`))

server.use(`/api/v1`, routerV1);

server.use(errorHandler);

export default server;