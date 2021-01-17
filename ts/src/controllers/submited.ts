import { Request, Response } from "express";
import path from "path";

export default {
  getSubmited(req: Request, res: Response) {
    res.render(path.resolve("src/views/submited"));
  },
};
