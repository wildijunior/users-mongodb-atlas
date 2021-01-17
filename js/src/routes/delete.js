import Router from "express";
import deleteController from "../controllers/delete.js";

const routes = Router();

routes.get("/", deleteController.getDelete);

export default routes;
