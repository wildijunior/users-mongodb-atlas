import { Request, Response } from "express";
import path from "path";

export default {
  getDeleted(req: Request, res: Response) {
    res.render(path.resolve("src/views/deleted"));
  },
};
