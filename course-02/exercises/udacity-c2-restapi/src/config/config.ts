import * as dotenv from "dotenv";
dotenv.config();
export const config = {
  dev: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "udagramyossefdev",
    host: "udagramyoussefdev.cnglbuygvkqz.eu-west-3.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "eu-west-3",
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: "udagram-yossef-dev",
    jwt: {
      "secret": process.env.JWT_SECRET
    }
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
