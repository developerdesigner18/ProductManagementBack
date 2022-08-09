"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
require("dotenv").config();
exports.JWT_SECRET = process.env["JWT_SECRET"];
if (!exports.JWT_SECRET) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}
//# sourceMappingURL=secret.js.map