import passport from "passport";
import passportLocal from "passport-local";
// import passportApiKey from "passport-headerapikey";
import passportJwt from "passport-jwt";
import User from "../utils/dummy.json";
import { JWT_SECRET } from "../utils/secret";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export class JwtController {
  // read the token from header authorization bearer or url
  public authenticateUser(req: Request, res: Response, next: NextFunction) {
    const header = req.headers["authorization"] || req.query.token;
    if (!header) {
      return res.send({ message: `token is required` });
    }
    const token = (header as string)?.split(" ")[1];

    // token does not exist
    if (!token) {
      return res.send({ message: `user not logged in` });
    }

    // verify token
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.send({ err: err });
      req.user = user;
      next();
    });
  }
}
