import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
require('dotenv').config();
const c = config.dev;
console.log(c);
//console.log(process.env)

console.log(process.env)
// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": `${process.env.POSTGRES_USERNAME}`,
  "password": `${process.env.POSTGRES_PASSWORD}`,
  "database": c.database,
  "host": c.host,


  dialect: "postgres",
  storage: ":memory:",
});
