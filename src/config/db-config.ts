export default {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 5000,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
