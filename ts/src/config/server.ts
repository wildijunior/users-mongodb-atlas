import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Conexao from "../models/conexao";

import { collectDefaultMetrics, register } from 'prom-client';

// CONEXAO COM O DB
Conexao.catch((err) => {
  if (err) {
    console.error(`Error: ${err}`);
  }
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// IMPORT ROUTES
import indexRoute from "../routes/index";
import insertRoute from "../routes/insert";
import usersRoute from "../routes/users";
import submitedRoute from "../routes/submited";
import deletedRoute from "../routes/deleted";
import updatedRoute from "../routes/updated";

collectDefaultMetrics();
const app = express();

export default () => {
  // APP USES/SET
  app.set("view engine", "ejs");
  app.use(express.static(path.resolve("src/public")));
  app.use(bodyParser.urlencoded({ extended: false }));

  // MIDDLEWARES
  app.use(indexRoute);
  app.use("/insert", insertRoute);
  app.use("/users", usersRoute);
  app.use("/submited", submitedRoute);
  app.use("/deleted", deletedRoute);
  app.use("/updated", updatedRoute);

  app.get('/metrics', async (_req, res) => {
    try {
        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
    } catch (err) {
        res.status(500).end(err);
    }
});

  return app;
};
