"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const axios_1 = __importDefault(require("axios"));
require("../auth/middleware");
class SearchController {
    getSearchResult(req, res) {
        if (!req.query.title)
            return res.send({ message: "Title is required" });
        axios_1.default
            .get("https://www.omdbapi.com/?t=" + req.query.title + "&plot=full&apikey=5a0a6d0")
            .then((data) => {
            res.send({ success: true, code: 200, data: data.data });
        })
            .catch((err) => {
            res.send({ error: err });
        });
    }
}
exports.SearchController = SearchController;
//# sourceMappingURL=searchController.js.map