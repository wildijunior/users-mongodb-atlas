import path from "path";

export default {
  getUpdate(req, res) {
    res.render(path.resolve("src/views/update"));
  },
};
