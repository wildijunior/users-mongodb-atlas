import Router from "express";
import usersController from "../controllers/users";

const routes = Router();
routes.get("/", usersController.getUsers);
routes.get("/:userId", usersController.getUser);
routes.post("/:userId/update", usersController.updateUser);
routes.post("/:userId/delete", usersController.deleteUser);

export default routes;
