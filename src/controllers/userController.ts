import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import "../auth/middleware";
import User from "../utils/dummy.json";
import { JWT_SECRET } from "../utils/secret";

export class UserController {
  public authenticateUser(req: Request, res: Response) {
    const dataCheck = User.filter((elm) => elm.username === req.body.username);
    if (!dataCheck.length) {
      return res.send({ message: `username ${req.body.username} not found.` });
    }

    if (dataCheck.length) {
      const comparePassword = dataCheck.filter(
        ({ password }) => password === req.body.passport
      );
      if (comparePassword.length) {
        return res.send({
          message: `${req.body.username} password is not matching.`,
        });
      }
      const token = jwt.sign({ username: req.body.username }, JWT_SECRET);
      res.status(200).send({ token: token });
    }
  }
}
