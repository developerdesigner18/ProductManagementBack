import { Router } from "express";
import { JwtController } from "../auth/middleware";
import { SearchController } from "../controllers/searchController";

export class SearchRoutes {
  router: Router;
  public searchController: SearchController = new SearchController();
  public JwtController: JwtController = new JwtController();

  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    // For TEST only ! In production, you should use an Identity Provider !!
    this.router.post(
      "/search",
      this.JwtController.authenticateUser,
      this.searchController.getSearchResult
    );
  }
}
