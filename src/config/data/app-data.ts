import "reflect-metadata";
import { DataSource } from "typeorm";
import dbConfig from "../db-config";
import models from "../../domain/model";

export default new DataSource({
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: true,
  logging: true,
  entities: models,
  subscribers: ["src/data/subscriber"],
  migrations: ["src/data/migration"],
});
