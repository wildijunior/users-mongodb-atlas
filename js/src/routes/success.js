import Router from "express";
import successController from "../controllers/success.js";

const routes = Router();

routes.get("/", successController.getSuccess);

export default routes;
