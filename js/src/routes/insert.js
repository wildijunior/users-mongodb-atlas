import Router from "express";
import insertController from "../controllers/insert.js";

const routes = Router();

routes.get("/", insertController.getInsert);
routes.post("/", insertController.postInsert);

export default routes;
