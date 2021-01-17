import Router from "express";
import usersController from "../controllers/users.js";

const routes = Router();

routes.get("/", usersController.getUsers);
routes.get("/:userId", usersController.getUser);
routes.post("/:userId/update", usersController.postUpdate);
routes.post("/:userId/delete", usersController.postDelete);
export default routes;
