import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import Conexao from "../database/conexao.js";
import mongoose from "mongoose";

import indexRoute from "../routes/index.js";
import insertRoute from "../routes/insert.js";
import successRoute from "../routes/success.js";
import usersRoute from "../routes/users.js";
import updateRoute from "../routes/update.js";
import deleteRoute from "../routes/delete.js";

// CONEXAO
Conexao.catch((err) => {
  if (err) return console.error(err);
});
// notified if we connect successfully or if a connection error occurs
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log(`Estamos conectados`);
});

const app = express();

export default () => {
  app.set("view engine", "ejs");
  app.use(express.static(path.resolve("src/public")));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(indexRoute);
  app.use("/insert", insertRoute);
  app.use("/success", successRoute);
  app.use("/users", usersRoute);
  app.use("/update", updateRoute);
  app.use("/delete", deleteRoute);

  return app;
};
