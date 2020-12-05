import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";

import { V0MODELS } from "./controllers/v0/model.index";
import * as dotenv from "dotenv";
dotenv.config();
//require('dotenv').config()
//console.log(require('dotenv').config())
(async () => {
  console.log(__dirname)
  await sequelize.addModels(V0MODELS);
  //require("dotenv").config();
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen
  console.log("here it is ");
  console.log(process.env.POSTGRES_USERNAME);
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://dx9ucmsb4l7mn.cloudfront.net");
    //  res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
