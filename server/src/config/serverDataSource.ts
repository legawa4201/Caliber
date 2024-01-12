import { DataSource } from "typeorm";

import { Applicant, Company, Job, MyJob } from "../models";

const serverDataSource = new DataSource({
    type: `postgres`,
    url: process.env.DB_DEV_URI,
    entities: [Applicant, Company, Job, MyJob],
    migrations: [],
    migrationsRun: false,
    logging: true,
    synchronize: true
});

export default serverDataSource;