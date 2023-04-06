import { DataSource } from "typeorm"
import { User } from "../entity/User"
import "reflect-metadata"
import * as dotenv from "dotenv";
import {Post} from "../entity/Post";

dotenv.config({path: "src/config/.env"})

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Post],
    migrations: [],
    subscribers: [],
})
