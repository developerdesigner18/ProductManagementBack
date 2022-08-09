import axios from "axios";
import { Request, Response } from "express";
import "../auth/middleware";

export class SearchController {
  public getSearchResult(req: Request, res: Response) {
    if (!req.query.title) return res.send({ message: "Title is required" });

    axios
      .get("https://www.omdbapi.com/?t=" + req.query.title + "&plot=full&apikey=5a0a6d0")
      .then((data) => {
        res.send({ success: true, code: 200, data: data.data });
      })
      .catch((err) => {
        res.send({ error: err });
      });
  }
}
