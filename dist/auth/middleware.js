"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtController = void 0;
const secret_1 = require("../utils/secret");
const jwt = __importStar(require("jsonwebtoken"));
class JwtController {
    // read the token from header authorization bearer or url
    authenticateUser(req, res, next) {
        const header = req.headers["authorization"] || req.query.token;
        if (!header) {
            return res.send({ message: `token is required` });
        }
        const token = header === null || header === void 0 ? void 0 : header.split(" ")[1];
        // token does not exist
        if (!token) {
            return res.send({ message: `user not logged in` });
        }
        // verify token
        jwt.verify(token, secret_1.JWT_SECRET, (err, user) => {
            if (err)
                return res.send({ err: err });
            req.user = user;
            next();
        });
    }
}
exports.JwtController = JwtController;
//# sourceMappingURL=middleware.js.map