import Router from "express";
import indexController from "../controllers/index";

const routes = Router();
routes.get("/", indexController.getIndex);

export default routes;
