import path from "path";

export default {
  getDelete(req, res) {
    res.render(path.resolve("src/views/delete"));
  },
};
