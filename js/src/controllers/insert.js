import path from "path";

import User from "../database/models/userModel.js";

export default {
  getInsert(req, res) {
    res.render(path.resolve("src/views/insert"));
  },

  postInsert(req, res) {
    const nome = req.body.userName;
    const idade = req.body.userAge;
    const email = req.body.userEmail;
    const endereco = req.body.userAddress;

    const novoUser = new User({
      name: nome,
      age: idade,
      email: email,
      address: endereco,
    });

    novoUser.save((err, novoUser) => {
      if (err) return console.error(err);
      console.log(novoUser);
    });

    res.redirect("/success");
  },
};
