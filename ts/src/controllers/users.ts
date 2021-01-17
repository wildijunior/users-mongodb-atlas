import { Request, Response } from "express";
import path from "path";
import User from "../models/usersModel";

export default {
  getUsers(req: Request, res: Response) {
    User.find((err, users) => {
      if (err) return console.error(err);
      res.render(path.resolve("src/views/users"), {
        dados: users,
      });
    });
  },

  getUser(req: Request, res: Response) {
    const findUser = req.params.userId;

    User.findOne({ _id: findUser }, (err: string, user: string[]) => {
      if (err) return console.error(err);
      res.render(path.resolve("src/views/user-update"), {
        usuario: user,
      });
    });
  },

  updateUser(req: Request, res: Response) {
    const findUser = req.params.userId;

    const novoNome = req.body.newName;
    const novoAge = req.body.newAge;
    const novoEmail = req.body.newEmail;
    const novoAddress = req.body.newAddress;

    User.updateOne(
      { _id: findUser },
      { name: novoNome, age: novoAge, email: novoEmail, address: novoAddress }
    ).exec();

    res.redirect("/updated");
  },

  deleteUser(req: Request, res: Response) {
    const findUser = req.params.userId;

    User.deleteOne({ _id: findUser }).exec();
    res.redirect("/deleted");
  },
};
