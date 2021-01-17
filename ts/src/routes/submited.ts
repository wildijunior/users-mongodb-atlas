import Router from "express";
import submitedController from "../controllers/submited";

const routes = Router();
routes.get("/", submitedController.getSubmited);

export default routes;
