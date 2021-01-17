import Router from "express";
import updatedController from "../controllers/update.js";

const routes = Router();

routes.get("/", updatedController.getUpdate);

export default routes;
