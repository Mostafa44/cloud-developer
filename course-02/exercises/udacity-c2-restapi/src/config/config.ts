export const config = {
  dev: {
    username: process.env.POSTGRES_USERNAME,
    password: "Cairo_1234",
    database: "udagramyossefdev",
    host: "udagramyoussefdev.cnglbuygvkqz.eu-west-3.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "eu-west-3",
    aws_profile: "default",
    aws_media_bucket: "udagram-yossef-dev",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
