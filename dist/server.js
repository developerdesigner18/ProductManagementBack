"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = require("./routes/userRoutes");
const searchRoutes_1 = require("./routes/searchRoutes");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    routes() {
        this.app.use("/api/user", new userRoutes_1.UserRoutes().router);
        this.app.use("/api/search", new searchRoutes_1.SearchRoutes().router);
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("  API is running at http://localhost:%d", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map