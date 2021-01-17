import Router from "express";
import updatedController from "../controllers/updated";

const routes = Router();
routes.get("/", updatedController.getUpdated);

export default routes;
