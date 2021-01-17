import path from "path";

export default {
  getSuccess(req, res) {
    res.render(path.resolve("src/views/success"));
  },
};
