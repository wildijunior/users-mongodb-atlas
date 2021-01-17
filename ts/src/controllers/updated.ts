import { Request, Response } from "express";
import path from "path";

export default {
  getUpdated(req: Request, res: Response) {
    res.render(path.resolve("src/views/updated"));
  },
};
