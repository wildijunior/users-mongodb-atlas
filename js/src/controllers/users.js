import path from "path";

import User from "../database/models/userModel.js";

export default {
  getUsers(req, res) {
    User.find((err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.render(path.resolve("src/views/users"), {
          dados: users,
        });
      }
    });
  },
  getUser(req, res) {
    const findUser = req.params.userId;
    User.findOne({ _id: findUser }, (err, user) => {
      if (err) return console.error(err);
      res.render(path.resolve("src/views/user-detail"), {
        usuario: user,
      });
    });
  },

  postUpdate(req, res) {
    const findUser = req.params.userId;

    console.log(req.body);

    const newName = req.body.userNewName;
    const newAge = req.body.userNewAge;
    const newEmail = req.body.userNewEmail;
    const newAddress = req.body.userNewAddress;

    User.updateOne(
      { _id: findUser },
      { name: newName, age: newAge, email: newEmail, address: newAddress }
    ).exec();
    res.redirect("/update");
  },

  postDelete(req, res) {
    const findUser = req.params.userId;

    User.deleteOne({ _id: findUser }).exec();
    res.redirect("/delete");
  },
};
