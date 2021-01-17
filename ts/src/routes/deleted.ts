import Router from "express";
import deletedController from "../controllers/deleted";

const routes = Router();
routes.get("/", deletedController.getDeleted);

export default routes;
