import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import server from "./server";
import serverDataSource from "./config/serverDataSource";

const PORT: string = process.env.PORT || `3000`;

serverDataSource.initialize()
.then(() => {
    server.listen(+PORT, () => console.log(`Server is listening on port ${PORT}`));
})
.catch(console.error);