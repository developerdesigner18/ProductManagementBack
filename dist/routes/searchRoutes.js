"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRoutes = void 0;
const express_1 = require("express");
const middleware_1 = require("../auth/middleware");
const searchController_1 = require("../controllers/searchController");
class SearchRoutes {
    constructor() {
        this.searchController = new searchController_1.SearchController();
        this.JwtController = new middleware_1.JwtController();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // For TEST only ! In production, you should use an Identity Provider !!
        this.router.post("/search", this.JwtController.authenticateUser, this.searchController.getSearchResult);
    }
}
exports.SearchRoutes = SearchRoutes;
//# sourceMappingURL=searchRoutes.js.map