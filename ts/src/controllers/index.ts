import { Request, Response } from "express";
import path from "path";

export default {
  getIndex(req: Request, res: Response) {
    res.render(path.resolve("src/views/index"));
  },
};
